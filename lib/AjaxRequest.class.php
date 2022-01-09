<?php


// Включаем все ошибки и предупреждения в PHP для отладки кода


/*
 * Обертка для работы с Ajax-запросами
*/

class AjaxRequest
{
    protected $EMAIL_CHARS      = "/^((([!#$%&'*+\\-\/\=?^_`{|}~\w])|([!#$%&'*+\\-\/\=?^_`{|}~\w][!#$%&'*+\\-\/\=?^_`{|}~\.\w]{0,}[!#$%&'*+\\-\/\=?^_`{|}~\w]))[@]\w+(([-.]|\-\-)\w+)*\.\w+(([-.]|\-\-)\w+)*)$/";
    protected $EMAIL_COLUM      = "/^[a-z0-9]+@[a-z]+\.co$/";
    
    
    public $actions = array();

    public $data;
    public $code;
    public $message;
    public $success;

    public function __construct($request)
    {
        // Object Post
        $this->request = json_decode(file_get_contents("php://input"));
        // RAR GET
        //$this->request = $request;
        //print_r($this->request);
        $this->action = $this->getRequestParam("act");

        if (!empty($this->actions[$this->action])) 
        {
            // Все хорошо! Вызываем рабочую функцию
            $this->callback = $this->actions[$this->action];
            call_user_func(array($this, $this->callback));
        } 
        else 
        {
            //header("HTTP/1.1 400 Bad Request");
            $this->setFieldError("main34 ".print_r($this->request, TRUE), "Method_Not_Allowed");
        }

        $this->response = $this->renderToString();
    }

    public function getRequestParam($name)
    {
        if (isset($name, $this->request)) {
            $value = trim($this->request->$name);
            // Filtering result
            $value = strip_tags($value);
            $value = filter_var($value, FILTER_SANITIZE_STRING);
            $value = htmlentities($value);
            return $value;
        }
        //var_dump(filter_var('bob@example.com', FILTER_VALIDATE_EMAIL));
        //var_dump(filter_var('http://example.com', FILTER_VALIDATE_URL, FILTER_FLAG_PATH_REQUIRED));
        return null;
    }
    public function getRequestParamRar($name)
    {
        
        
        if (array_key_exists($name, $this->request)) {
            return $this->request[$name];
        }
        return null;
    }

    public function setResponse($key, $value)
    {
        $this->data[$key] = $value;
    }


    public function setFieldError($name, $message = '' )
    {
        $this->success = false;
        $this->code = $name;
        $this->message = $message;
    }
    
    public function setFildSuccess( $name = '', $message = '' )
    {
        $this->success = true;
        if($name!='') $this->code = $name;
        $this->message = $message;
    }

    public function renderToString()
    {
        $this->json = array(
            "success" => $this->success,
            "code" => $this->code,
            "message" => $this->message,
            "data" => $this->data,
        );
        return json_encode($this->json, ENT_NOQUOTES);
    }


    // Проверка имя пользователя по длине и отсутствия плохих знаков. В базе данных существование не проверяем
    public function only_post()
    {
        // Принимаем только запросы методом POST
        if ($_SERVER["REQUEST_METHOD"] !== "POST") 
        {
            // Method Not Allowed
            http_response_code(405);
            header("Allow: POST");
            $this->setFieldError("main118", "Method_Not_Allowed");
            return true;
        }
    }
    
    
    
    // Проверка элеткронной почты по длине и отсутствия плохих знаков. В базе данных существование не проверяем
    public function validation_email($email, $code="email")
    {
        
        
        $email_len      = mb_strlen($email,'UTF-8');
        
        if (empty($email)) {
            $this->setFieldError($code, "Email address is required");
            return true;
        }
        if( !preg_match( $this->EMAIL_CHARS, $email) ){
            $this->setFieldError($code, "Please provide a valid e-mail address");
            return true;
        }
        if( preg_match( $this->EMAIL_COLUM, $email) ){
            $this->setFieldError($code, "We are not accepting subscriptions from Colombia emails");
            return true;
        }
        if( $email_len < MIN_USERNAME_LEN ){
            $this->setFieldError($code, "Email_name_too_short");
            return true;
        }
        if( $email_len > MAX_USERNAME_LEN ){
            $this->setFieldError($code, "Email_name_too_long");
            return true;
        }
    }
    
    
    // Проверка имени пользователей или электронной почты на существование дубликатов
    public static function check($key, $value)
    {
        $book = R::findOne('subscribing', $key.' = ? ', [ $value ] );
        
        if( $book)
		{
            return true;
		}        
        return false;
    }
    
    // Пересылаем сформированные данные
    public function showResponse()
    {
        
        //return $this->response;
        
        header("Content-Type: application/json; charset=UTF-8");
        echo $this->response;
    }
    
    
}

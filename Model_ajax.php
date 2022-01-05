<?php
    
    // We connect the user library Model_Ajax
    require_once 'config.php';
    
    class Model_Ajax extends AjaxRequest
    {
        
        // Checking what act came from the ajax request? We check with the list.
        public $actions = array(
            "delete"    => "delete",
            "list"      => "list",
            "user"      => "user",
            "new_email" => "new_email"
        );
        
        // Adding a new email
        public function new_email()
        {
            
            // Принимаем только запросы методом POST 
            if( $this->only_post() ) return;
            
            $email = $this->getRequestParam("email");
            $terms = $this->getRequestParam("terms");
            
            // Проверка правильности ввода электронной почты
            if( $this->validation_email($email) ) return;
            
            // Проверка на уникальность адреса электронной почты
            if( $this->check('email', $email) ) {
                $this->setFieldError("email", "You have already subscribed");
                return;
            }
            
            if( !$terms ) {
                $this->setFieldError("email", 'You must accept the terms and conditions');
                return;
            }
            
            $time = time();
        
            // We save the new address in the database
            $ferm = R::dispense('subscribing');
        	$ferm   ->  time   =   $time;
        	$ferm   ->  email  =   $email;
            R::store($ferm);
            
            $this->setFildSuccess("email", 'Ok');
        }
        
        //We get a list of all email addresses
        public function list()
        {
            $books = R::getAll('SELECT * FROM `subscribing` ORDER BY id LIMIT 100');
            $item['items'] = $books;
            
            $Counting = R::count( 'subscribing' );
            
            $this->setFildSuccess($Counting, $item);
        }
        
        
        //Get address by id number
        public function user()
        {
            $id = $this->getRequestParam("id");
            $id = (int)$id;
            
            $item = R::findOne('subscribing', 'id = ?', [$id]);
            
            $this->setFildSuccess(1, $item);
        }
        
        //Delete id
        public function delete()
        {
            $id = $this->getRequestParam("id");
            $id = (int)$id;
            
            $book = R::load('subscribing', $id);
            R::trash($book);
            
            $this->setFildSuccess(1, 'Delete success');
        }
    }
?>
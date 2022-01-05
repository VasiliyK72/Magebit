// Универсальный ajaks для отправки команд на сервер
function send_comand( $data, call_back_success, call_back_error) //  call_back_success, call_back_error - не обязательные
{
    let xhttp = new XMLHttpRequest();
    let data = $data;
    
    xhttp.open("POST", "ajax.php", true); 
    
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Response
            let response = JSON.parse(this.responseText);
         
            if( response && response.success) {
                // Универсальная функция ответа на success
                if( call_back_success ) { call_back_success(response); }
            }
            else {
                // Универсальная функция ответа на ошибки
                if( call_back_error ) { call_back_error(response); }
            }
         
        }
    };
    
    // Content-type
    xhttp.setRequestHeader("Content-Type", "application/json");
    
    // Send request with data
    xhttp.send(JSON.stringify(data));
}
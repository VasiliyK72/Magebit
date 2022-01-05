<?php
    // Controler Ajax
    require_once 'Model_ajax.php';
    
    // Model Ajax
    // These classes are run only if there is an ajax request
    $model = new Model_Ajax($_REQUEST);  
    
    // View Ajax
	$model->showResponse();
	
?>
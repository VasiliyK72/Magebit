<?php


ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);


// DB
define('PDO_DSN', 'mysql:host=localhost;dbname=magebit');
define('PDO_USER', 'user_magebit');
define('PDO_PASSWORD', '****');

// WEBSITE

define('TIME_ZONE', 120);           // По умолчанию временная зона 2 часа или 120 минут
define('TIME_FORMAT', 'H:i');      // По умолчанию 
define('DATE_FORMAT', 'd/m/Y');    // По умолчанию 

define('SERVER_EMAIL', 'akvaferma@gmail.com');

// Login
define('MAX_ATTEMPS', 3); // Количество попыток войти на сайт. Считает количество попыток по ссесии. Если ссесию перегрузить, то начнет считать с начала.
define('MIN_USERNAME_LEN', 3);
define('MIN_PASSWORD_LEN', 4);
define('MAX_USERNAME_LEN', 36);
define('MAX_PASSWORD_LEN', 30);
define('MIN_TEXT_LEN', 2);
define('MAX_TEXT_LEN', 5000);



// Подключаем обертку для ajax
require_once 'lib/AjaxRequest.class.php';

// Подключаем библиотеку redbeanphp
require_once "lib/rb-mysql.php";

R::setup( PDO_DSN, PDO_USER, PDO_PASSWORD ); //for both mysql or mariaDB
R::freeze( true ); //will freeze redbeanphp

?>

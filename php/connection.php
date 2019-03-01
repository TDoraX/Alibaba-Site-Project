<?php
header('content-type=text/html;charset=utf-8');
define('HOST', '10.31.162.43');
define('USERNAME', 'root');
define('PASSWORD', 'mxd7363999');
define('DB', 'ali1688');

$link = new mysqli(HOST, USERNAME, PASSWORD, DB);
if ($link->connect_error) {
    die('Connecting database failed. - ');
}
$link->select_db(DB);
$link->query('set names utf8');
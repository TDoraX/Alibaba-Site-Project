<?php
include "connection.php";

$result = $link->query('SELECT * FROM  itemDetail WHERE shopid=10');
$itemList = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $itemList[$i] = $result->fetch_array(MYSQLI_ASSOC);
}

echo json_encode($itemList);

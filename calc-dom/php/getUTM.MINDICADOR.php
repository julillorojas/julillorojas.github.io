<?php
//echo "hola mundo";
error_reporting(0);

$JsonSource = "http://mindicador.cl/api";
$json = file_get_contents($JsonSource);

// Retorna un json
header('Content-Type: application/json');
echo $json;

<?php
//echo "hola mundo";
error_reporting(0);

$JsonSource = "http://indicadoresdeldia.cl/webservice/indicadores.json";
$json = file_get_contents($JsonSource);

// Retorna un json
header('Content-Type: application/json');
echo $json;

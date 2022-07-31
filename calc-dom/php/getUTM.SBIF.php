<?php
//echo "hola mundo";
error_reporting(0);

$JsonSource = "http://api.sbif.cl/api-sbifv3/recursos_api/utm?apikey=9ee60e0c6d5ed13e09b4fafde4e824ae42692d81&formato=json";
$json = file_get_contents($JsonSource);

// Retorna un json
header('Content-Type: application/json');
echo $json;

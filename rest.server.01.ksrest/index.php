<?php
/*
 * @framework: Ksike
 * @package: REST
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 11/03/2017
 * @update: 23/06/2019
 * @license: GPL v3
 */
include __DIR__ . "/src/ksrest/KsRest.php";

$database = __DIR__ . "/data/store.json";
$controller = __DIR__ . "/src/controllers/";

echo KsRest::This($controller , $database)->dispatch();
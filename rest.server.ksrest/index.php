<?php
/*
 * @framework: Bycod
 * @package: REST
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 23/4/2011
 * @update: 23/4/2011
 * @license: GPL v3
 */

include __DIR__ . "/src/ksrest/KsRest.php";

$database = __DIR__ . "/data/store.json";
$controller = __DIR__ . "/src/controllers/";

echo KsRest::This($controller , $database)->dispatch();
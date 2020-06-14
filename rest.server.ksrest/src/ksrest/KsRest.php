<?php
/*
 * @framework: Ksike
 * @package: REST
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 23/4/2011
 * @update: 23/4/2011
 * @license: GPL v3
 */

include __DIR__ . "/KsRestController.php";
include __DIR__ . "/KsDataManager.php";

class KsRest
{
    //--------------------------------------------------- DESING PATTERN SINGLETON
	protected static $obj = null;
	public static function This($controller='' , $database=''){
		self::$obj = self::$obj ? self::$obj : new self($controller, $database);
		return self::$obj;
	}
    //--------------------------------------------------- NORMAL CLASS IMPLEMENTATION
    public $src;
    public $path;

	public function __construct($controller , $database='data.json'){
        $this->src = $database;
        $this->path = $controller;
	} 

    public function dispatch()
    {
        //............................ get request params 
        $param = array_merge($_REQUEST, $this->getHtmlPretty()) ;
        //............................ get controller for request resource 
		$obj = $this->getController($param);
        if(!$obj) return false;
        //............................ router action based on REST  
        $res = $this->router($obj, $param);
        //............................ get controller action result 
        return is_string($res) ? $res : json_encode($res);
    }

    protected function getController($param){
        $resource = $param['resource'];
        $controller = ucfirst(strtolower($resource))."Controller";
        include_once $this->path . $controller. ".php";
        $controller = new $controller();
        $controller->datamanager = new KsDataManager($this->src);
        return $controller;
    }
    protected function router($controller, $param)
    {
		switch(strtolower($_SERVER["REQUEST_METHOD"])){
			case "get": 
				return $controller->select($param);
			break;

            case "post": 
				return $controller->insert($this->getHtmlPost($param));
			break;

			case "put": 
            case "patch": 
                $param['data'] = $this->getHtmlInput();
				return $controller->update($param);
			break;

			case "delete": 
			case "purge": 
				return $controller->delete($param);
			break;
        }
        
        return 'Not found';
    }

    protected function getHtmlPost($param=[], $asArray=true){
        foreach($_POST as $k=>$i){
            $decode = json_decode($i, $asArray);
            $param[$k] = $decode ? $decode : $i;
        }
        return $param;
    }
    protected function getHtmlInput($asArray=true){	
        $obj = json_decode(file_get_contents('php://input'), true);   
        if(is_array($obj)) return $obj;
        $raw  = '';
        $httpContent = fopen('php://input', 'r');
        while ($kb = fread($httpContent, 1024)) $raw .= $kb;
        fclose($httpContent);
        parse_str($raw, $output);
        //var_dump($output); die('-----------------');
        $input = !is_string($output) ? $output : json_decode(stripslashes($raw), $asArray);
        return $input;
    }
    protected function getHtmlPretty(){
        if(!isset($_SERVER['PATH_INFO'])) return [];
        $data = explode("/", $_SERVER['PATH_INFO']);
        return [
            'resource' => isset($data[1]) ? $data[1] : '',
            'id' => isset($data[2]) ? $data[2] : '',
        ];
    }
}
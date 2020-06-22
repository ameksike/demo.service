<?php
/*
 * @framework: Bycod
 * @package: Data Manager
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 23/4/2011
 * @update: 23/4/2011
 * @license: GPL v3
 */
class KsDataManager
{
	public $src;
	
	public function __construct($opt='data.json'){
		$this->src = $opt;
	} 
	
	public function select($id=''){
		$data = json_decode(file_get_contents($this->src), true);
		return $id!='' ? ( isset($data[$id]) ? $data[$id] : null ) : $data;
	}
		
	public function insert($person){
		try{
			$data = $this->select();
			$id = count($data);
			$person['id'] = $id;
			$data[$id] = $person;
			file_put_contents($this->src, json_encode($data));
		}
        catch (\Exception $e) {
            return false;
        }
		return $person;
	}		
	
	public function update($person, $id){
		try{
			$data = $this->select();
			if(!isset($data[$id])) return false;
			$person['id'] = $id;
			$data[$id] = $person;
			file_put_contents($this->src, json_encode($data));
		}
        catch (\Exception $e) {
            return false;
        }
		return $person;
	}
	
	public function delete($id){
		$person = false;
		try{
			$data = $this->select();
			if(!isset($data[$id])) return false;
			$person = $data[$id];
			unset($data[$id]);
			file_put_contents($this->src, json_encode($data));
		}
        catch (\Exception $e) {
            return false;
        }
		return $person;
	}
}
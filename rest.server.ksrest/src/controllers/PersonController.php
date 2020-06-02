<?php
/*
 * @package: demo
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 23/4/2011
 * @update: 23/4/2011
 * @license: GPL v3
 */
class PersonController extends KsRestController
{	
	public function select($param){
		if(isset($param['id'])){
			return $this->datamanager->select($param['id']); 
		}else{
			return $this->datamanager->select(); 
		}
	}	

	public function insert($param){
		$person = isset($param['data']) ? $param['data'] : [
			"name"=>$param['name'],
			"age"=>$param['age'],
		];
		return $this->datamanager->insert($person); 
	}	

	public function update($param){
		$person =  $param['data'];
		return $this->datamanager->update($person, $param['id']) ; 
	}	
	
	public function delete($param){
		return $this->datamanager->delete($param['id']) ; 
	}	
}
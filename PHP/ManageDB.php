<?php
include_once 'DB.php';
class ManageBD extends DB{
  public function getQueries(){

	$productos= $this->connect()->query('SELECT * FROM productos');

	$queries = array (
		"productos"=>$productos
	);
	
		return $queries;
	
	}
}
?>
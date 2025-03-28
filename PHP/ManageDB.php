<?php
include_once 'DB.php';
class ManageBD extends DB{
  public function getQueries(){

	$clientes= $this->connect()->query('SELECT * FROM clientes');

	
	


	$queries = array (
		'clientes' => $clientes
		
		
		
	);
	
		return $queries;
	
	}
}
?>
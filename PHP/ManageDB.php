<?php
include_once 'DB.php';
class ManageBD extends DB{
  public function getQueries(){

	$empleados= $this->connect()->query('SELECT * FROM empleados');
	

	$queries = array (
		"empleados"=>$empleados
	);
	
		return $queries;
	
	}
}
?>
<?php
include_once 'DB.php';
class ManageBD extends DB{
  public function getQueries(){
	$pedidos= $this->connect()->query('SELECT * FROM pedidos');
	"pedidos"=>$pedidos,

	$queries = array (
		
		
		
	);
	
		return $queries;
	
	}
}
?>
<?php 
$servername = "localhost"; 
$username = "username"; 
$password = "12345"; 
$database = "shoppingCart"; 

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) { 
    die("Connection failed: " . $conn->connect_error); 
}  
echo "Connected successfully"; 
?>

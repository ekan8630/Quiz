<?php
    /*$conn = mysqli_connect("localhost", "root", "", "quizsafari") or die(mysql_error) */
?>

<?php
$servername = "localhost"; // Change these values as per your database configuration
$username = "root";
$password = "";
$dbname = "quizsafari";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
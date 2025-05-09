<?php
include 'db.php';

if(isset($_POST['signup'])) {
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

    $sql = "INSERT INTO form1 (Name, Email, Password) VALUES ('$Name', '$Email', '$Password')";

    if ($conn->query($sql) === TRUE) { 
        echo "<script type='text/javascript'> alert('Successfully Registered'); window.location = 'Lmodule.php';</script>";

        //header("Location: Lmodule.php");
        
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>

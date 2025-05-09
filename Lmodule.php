<?php
include 'db.php';
session_start();


if(isset($_POST['signin'])) 
{
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

    $sql = "SELECT * FROM form1 WHERE Email='$Email' && Password='$Password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) 
    {
        header("Location: home.php");
		exit();
        
    } 
    else 
    {
        echo "<script type='text/javascript'> alert('Enter Valid Email and Password'); window.location = 'Lmodule.php';</script>";
        exit(); 
    }
} 
$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuizSafari</title>
    <link rel="stylesheet" href="Lmodule.css">
    

</head>
<body>
    
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="signup.php" method="POST">
			<h1>Create Account</h1>
			<div class="social-container">
				<!--<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a> -->
			</div>
			
			<input type="text" name="Name" placeholder="Name"  required/>
			<input type="email" name="Email" placeholder="Email" required/>
			<input type="password" name="Password" placeholder="Password" required/>
			<button name="signup">Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="Lmodule.php" method="POST">
			<h1>Sign in</h1>
			<div class="social-container">
				<!-- <a href="images/facebook.png" class="social">
					<i class="images/facebook.png"></i>
				</a>
				<a href="images/google.png" class="social">
					<i class="bi bi-facebook"></i>
				</a>
				<a href="" class="">
					<i class="fa fa-linkedin" aria-hidden="true"></i>
				</a> -->
			</div>
			
			<input type="email" name="Email" placeholder="Email" required/>
			<input type="password" name="Password" placeholder="Password" required/>
			<a href="#">Forgot your password?</a>
			<button name="signin">Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

<script src="Lmodule.js"></script>

</body>
</html>
<?php

include 'db.php';



$Email = ''; // fetch the username of the currently logged-in user
$sql = "SELECT * FROM form1 WHERE Email = '$Email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        $Name = $row['Name'];
        $Email = $row['Email'];
        $Password = $row['Password'];
    }
} else {
    echo "0 results";
}


$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuizSafari - Profile</title>
    
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        .profile-header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .profile-header h1 {
            margin: 0;
            font-size: 24px;
            color: #333;
        }
        
        .profile-details {
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
        
        .profile-details p {
            margin-bottom: 10px;
            color: #666;
        }
        
        .profile-details a {
            color: #007bff;
            text-decoration: none;
        }
        
        .profile-details a:hover {
            text-decoration: underline;
        }
        
        .profile-photo {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .profile-photo img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
        }
        
        .profile-photo input[type="file"] {
            display: none;
        }
        
        .profile-photo label {
            cursor: pointer;
            color: #007bff;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="profile-header">
        <h1>Welcome to QuizSafari</h1>
        <p>Profile Details</p>
    </div>
    
    <div class="profile-photo">
        <img id="profile-pic" src="default-profile-pic.jpg" alt="Profile Picture">
        <input type="file" id="file-upload" accept="image/*">
        <label for="file-upload">Change Photo</label>
    </div>
    
    <div class="profile-details">
        <p><strong>Username:</strong> <?php  echo $Name; ?></p>
        <p><strong>Email:</strong> <?php echo $Email; ?></p>
        <p><strong>Password:</strong> <?php echo $Password; ?></p>
        
        <p><button>Edit Profile</button></p>
        <p><button>Change Password</button></p> 
        <p>
            <a href="Lmodule.php"> <button>Logout</button>
            </a>
        </p>
    </div>
</div>

<script>
    // JavaScript to display the selected photo
    const fileUpload = document.getElementById('file-upload');
    const profilePic = document.getElementById('profile-pic');

    fileUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            profilePic.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });
</script>

</body>
</html>



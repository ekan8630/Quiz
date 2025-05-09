<?php
// Start session
session_start();

// Check if the user is logged in
if(isset($_SESSION['Email'])) {
    // Database connection
    $db_host = 'localhost';  // Your database host
    $db_username = 'root';  // Your database username
    $db_password = '';  // Your database password
    $db_name = 'quizsafari';  // Your database name

    // Create connection
    $conn = new mysqli($db_host, $db_username, $db_password, $db_name);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL query to fetch user's name
    $Email = $_SESSION['Email'];
    $sql = "SELECT name FROM form WHERE Email = '$Email'";

    // Execute query
    $result = $conn->query($sql);

    // Check if query was successful
    if ($result->num_rows > 0) {
        // Fetch user's name
        $row = $result->fetch_assoc();
        $Name = $row['Name'];
    } else {
        $Name = "Unknown";
    }

    // Close connection
    $conn->close();
} 
else {
    // If user is not logged in, set default name
    $Name = "Pankaj";
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Basic -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- Mobile Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <!-- Site Metas -->
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />

  <title>Quiz Safari</title>


  <!-- bootstrap core css -->
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

  <!-- font awesome style -->
  <link href="css/font-awesome.min.css" rel="stylesheet" />

  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet" />
  <!-- responsive style -->
  <link href="css/responsive.css" rel="stylesheet" />
  

</head>

<body>

  <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="home.php">
            <span>
              Quiz Safari
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <a class="nav-link" href="home.php">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"> About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="service.html">Quiz</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="404.html">Profile</a>
              </li>
            </ul>
            <div class="quote_btn-container">
              <a href="service.html" class="quote_btn">
                Start Quiz
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
    <!-- slider section -->
    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="img-box">
                    <img  src="images/slider.png" alt="">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      The Best Quiz Support
                    </h1>
                    <p>
                      Quiz Safari provides best quiz support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/slider2.png" alt="">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Knowledge test
                    </h1>
                    <p>
                      Test your knowledge with amazing quizzes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="images/slider3.png" alt="">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Authanticated questions
                    </h1>
                    <p>
                      All the Question is here is trule authenticated with the sources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>
    <!-- end slider section -->
  </div>

  <div class="footer_container">
    <!-- info section -->

    <section class="info_section ">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 ">
            <div class="info_detail">
              <h4>
                Quiz Safari
              </h4>
              <p>
                We believe in the power of curiosity and the joy of discovery. Our platform is meticulously crafted with user-friendly interfaces, interactive features, and a commitment to continuous improvement. Whether you're looking to challenge your knowledge or simply have fun, QuizSafari is your go-to destination. Join us on this adventure of learning, exploration, and community building at QuizSafari.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 mx-auto">
            <div class="info_link_box">
              <h4>
                Links
              </h4>
              <div class="info_links">
                <a class="" href="home.php">
                  Home
                </a>
                <a class="" href="about.html">
                  About
                </a>
                <a class="" href="service.html">
                  Quiz
                </a>
                
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-0 ml-auto">
            <div class="info_contact">
              <div class="contact_link_box">
                <a href="">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>
                    Call +01 1234567890
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    QuizSafari@gmail.com
                  </span>
                </a>
              </div>
            </div>
            <div class="info_social">
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end info section -->

    <!-- footer section -->
    <footer class="footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Quiz Safari</a>
        </p>
      </div>
    </footer>
    <!-- footer section -->
  </div>

  <!-- jQery -->
  <script src="js/jquery-3.4.1.min.js"></script>
  <!-- popper js -->
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
  </script>
  <!-- bootstrap js -->
  <script src="js/bootstrap.js"></script>
  <script src="js/custom.js"></script>
  <!-- Google Map -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
  <!-- End Google Map -->

</body>

</html>
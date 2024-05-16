<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Plant Info | Plant Parenthood</title>
    <link rel="icon" type="image/png" href="../public/img/planticon.png">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/info.css">
    <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap" rel="stylesheet">
</head>
<body>

<header>
    <!-- Navigation bar -->
    <nav class="navbar">
        <!-- Pages -->
        <div class="pages">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="calendar.html">Calendar</a></li>
                <li><a href="diaries.html">Diary</a></li>
                <li><a href="Info.html">Plant Info</a></li>
            </ul>
        </div>

        <!-- Title -->
        <h1>Plant Parenthood</h1>

        <!-- Profile -->
        <div class="profile">
            <ul>
                <li><a href="login.html">Profile</a></li>
                <li><a href="login.html">Sign Up</a></li>
            </ul>
        </div>

        <!-- Menu for smaller screens -->
        <div class="hamburger-btn">
            <!--Reference: https://www.w3schools.com/howto/howto_js_sidenav.asp-->
            <span onclick="openNav()">&#9776;</span>
        </div>

        <!--Menu for Media Query-->
        <div id="side-nav" class="mobile-nav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="calendar.html">Calendar</a></li>
                <li><a href="diaries.html">Diary</a></li>
                <li><a href="Info.html">Plant Info</a></li>
                <li><a href="login.html">Profile</a></li>
                <li><a href="login.html">Sign Up</a></li>
            </ul>
        </div>
    </nav>
</header>

<main>
    <!-- Basic Plant Info -->
    <section class="plant-info">
        <h1>Monstera</h1>
        <h3>Monstera deliciosa</h3>
        <p class="plant-blurb">They are famous for their natural leaf-holes, which has led to their nickname, Swiss Cheese Plant.</p>
    </section>
    
    <section class="plant-details">
        <div class="plant-picture">
            <img src="img/monsterabiggo.webp" alt="Plant">
        </div>

        <div class="plant-care">
            <h2>Monster Care Instructions</h2>
            <p class="plant-blurb">Two different species of Monstera are cultivated as houseplants - Monstera deliciosa and Monstera adansonii...</p>

            <h3>Sunlight</h3>
            <p class="plant-blurb">Thrives in bright to medium indirect light...</p>

            <h3>Water</h3>
            <p class="plant-blurb">Water every 1-2 weeks, allowing soil to dry out between waterings...</p>
        </div>
    </section>
</main>

<!-- Copyright -->
<footer>
    <p>&copy; Plant Parenthood</p>
</footer>  

<script src="index.js"></script>

</body>
</html>

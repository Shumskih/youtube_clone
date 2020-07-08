<?php require_once "includes/config.php"; ?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Youtube Clone</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

<div id="pageContainer">

    <div id="mastHeadContainer">
        <button class="navShowHide">
            <img src="assets/images/icons/menu.png" alt="Open And Close Menu">
        </button>

        <a class="logoContainer" href="index.php">
            <img src="assets/images/icons/VideoTubeLogo.png" alt="Youtube Copy Logo" title="Youtube Clone Logo">
        </a>

        <div class="searchBarContainer">
            <form action="search.php" method="GET">
                <input type="text" class="searchBar" name="term" placeholder="Search">
                <button class="searchButton">
                    <img src="assets/images/icons/search.png" alt="Search Button" title="Search">
                </button>
            </form>
        </div>

        <div class="rightIcons">
            <a href="upload.php">
                <img class="upload" src="assets/images/icons/upload.png" alt="Upload Button" title="Upload">
            </a>
            <a href="#">
                <img class="upload" src="assets/images/profilePictures/default.png" alt="Upload Button" title="Upload">
            </a>
        </div>
    </div>

    <div id="sideNavContainer" style="display: none;">

    </div>

    <div id="mainSectionContainer">

        <div id="mainContentContainer">
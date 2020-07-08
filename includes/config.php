<?php

ob_start();

date_default_timezone_set("Europe/Moscow");

try {
    $con = new PDO("mysql:dbname=youtube_clone;host=localhost", "root", "");
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
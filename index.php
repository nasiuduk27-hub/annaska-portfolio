<?php
$page = $_GET['page'] ?? 'home';

$allowedPages = ['home', 'contact', 'about', 'project'];

if (!in_array($page, $allowedPages)) {
    $page = 'home';
}

include 'layouts/main.php';
?>
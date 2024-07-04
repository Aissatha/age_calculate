<?php
// Connexion à la base de données
$servername = "localhost";
$username = "phpmyadmin";
$dbname = "users";

$conn = new mysqli($localhost, $phpmyadmin, $users);

// Vérifie la connexion
if ($conn->connect_error) {
    die("Erreur de connexion : ". $conn->connect_error);
}

// Récupère les données envoyées par la requête POST
$day = $_POST['day'];
$month = $_POST['month'];
$year = $_POST['year'];
$age = $_POST['age'];

// Prépare la requête SQL pour stocker les données
$stmt = $conn->prepare("INSERT INTO users (day, month, year, age) VALUES (?,?,?,?)");
$stmt->bind_param("iiii", $day, $month, $year, $age);
$stmt->execute();

// Ferme la connexion
$conn->close();

// Retourne un message de confirmation
echo "Données stockées avec succès!";
?>
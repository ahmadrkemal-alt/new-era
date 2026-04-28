<?php
include 'koneksi.php';

$game = $_POST['game'];
$player_id = $_POST['player_id'];
$nominal = $_POST['nominal'];
$payment = $_POST['payment'];

$query = "INSERT INTO orders (game, player_id, nominal, payment)
          VALUES ('$game', '$player_id', '$nominal', '$payment')";

if (mysqli_query($conn, $query)) {
    echo "success";
} else {
    echo "error";
}
?>
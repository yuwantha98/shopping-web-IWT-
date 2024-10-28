<?php
require 'config.php';

if (isset($_POST['submit'])) {
    $itemName = $_POST['itemName'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $itemCode = $_POST['itemCode'];
    $description = $_POST['description'];

    $sql = "INSERT INTO item (Item_name, Item_description, Price, Quantity, Item_code)
            VALUES ('$itemName', '$description', '$price', '$quantity', '$itemCode')";

    if ($conn->query($sql) === TRUE) {
        echo "Item added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
} else {
    echo "Form not submitted.";
}

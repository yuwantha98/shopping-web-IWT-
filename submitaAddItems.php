<?php
require 'config.php';

if (isset($_POST['submit'])) {
    $itemName = $_POST['itemName'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $itemCode = $_POST['itemCode'];
    $description = $_POST['description'];

    // Check if data is received correctly
    echo "Received data: <br>";
    echo "Item Name: $itemName <br>";
    echo "Price: $price <br>";
    echo "Quantity: $quantity <br>";
    echo "Item Code: $itemCode <br>";
    echo "Description: $description <br>";

    // SQL query to insert data into the item table
    $sql = "INSERT INTO item (Item_name, Item_description, Price, Quantity, Item_code)
            VALUES ('$itemName', '$description', '$price', '$quantity', '$itemCode')";

    echo "SQL Query: $sql <br>"; // Print the SQL query for debugging

    // Execute the query and check for success
    if ($conn->query($sql) === TRUE) {
        echo "Item added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
} else {
    echo "Form not submitted.";
}

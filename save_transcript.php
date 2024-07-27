<?php

header("Access-Control-Allow-Origin: http://127.0.0.1:5500");

$servername = "localhost";
$username = "root";
$password = "";
$database = "voice_to_text";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the transcript is received from the AJAX request
if (isset($_POST['transcript'])) {
    $transcript = mysqli_real_escape_string($conn, $_POST['transcript']);

    // Prepare the SQL query
    $sql = "INSERT INTO transcripts (text) VALUES (?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $transcript);

    // Execute the query
    if ($stmt->execute()) {
        echo "Transcript saved successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

// Close the database connection
$conn->close();
?>
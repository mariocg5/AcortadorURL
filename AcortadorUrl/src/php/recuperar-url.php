<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 

$host = 'localhost'; 
$dbname = 'AcortadorUrl';
$username = 'unai';
$password = 'xd';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT url_larga, url_corta FROM urlDatabase";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $data = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $data[] = $row;
    }

    echo json_encode($data);
    
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
} finally {
    $conn = null;
}



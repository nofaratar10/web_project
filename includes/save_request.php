<html><body>
<?php
$host = "localhost";
$user = "nofarat_nofar";
$pass = "meronandnofar2000";
$db   = "nofarat_requests";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

/* נתונים מהטופס החדש */
$personRole     = $_POST['personRole'];
$fullName       = $_POST['fullName'];
$personId       = $_POST['personId'];
$contactPhone   = $_POST['contactPhone'];
$meetingTopic   = $_POST['meetingTopic'];
$meetingDate    = $_POST['meetingDate'];
$meetingDetails = $_POST['meetingDetails'];

/* INSERT לטבלת meetings */
$sql = "INSERT INTO request
        (personRole, fullName, personId, contactPhone, meetingTopic, meetingDate, meetingDetails)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if ($stmt == FALSE) {
  echo "Prepare failed: " . $conn->error;
  exit();
}

$stmt->bind_param(
  "sssssss",
  $personRole,
  $fullName,
  $personId,
  $contactPhone,
  $meetingTopic,
  $meetingDate,
  $meetingDetails
);

if ($stmt->execute() == FALSE) {
  echo "Can not add request. Error is: " . $stmt->error;
  exit();
}

/* תשובת הצלחה */
echo "<!DOCTYPE html><html lang='he' dir='rtl'><head><meta charset='UTF-8'><title>נשמר</title></head><body>";
echo "<h2>הפגישה נשמרה בהצלחה</h2>";
echo "<p>אפשר לחזור ל <a href='../index.html'>דף הבית</a>.</p>";
echo "</body></html>";

$stmt->close();
$conn->close();
?>
</body></html>

<?php
// Config DB (ajusta con tus credenciales)
$servername = "localhost";
$username = "root"; // Default XAMPP
$password = "";
$dbname = "contacto_db";

// Conexión
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Validación server-side
$errors = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = trim($_POST['nombre']);
  $apellido = trim($_POST['apellido']);
  $email = trim($_POST['email']);
  $tipo = isset($_POST['tipo']) ? $_POST['tipo'] : '';
  $mensaje = trim($_POST['mensaje']);
  $consentimiento = isset($_POST['consentimiento']) ? 1 : 0;

  if (empty($nombre)) $errors[] = "First Name is required.";
  if (empty($apellido)) $errors[] = "Last Name is required.";
  if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Valid Email is required.";
  if (empty($tipo)) $errors[] = "Query Type is required.";
  if (empty($mensaje)) $errors[] = "Message is required.";
  if (!$consentimiento) $errors[] = "Consent is required.";

  if (empty($errors)) {
    // Insertar en DB
    $stmt = $conn->prepare("INSERT INTO contactos (nombre, apellido, email, tipo, mensaje, consentimiento) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $nombre, $apellido, $email, $tipo, $mensaje, $consentimiento);
    if ($stmt->execute()) {
      // Éxito: redirect con mensaje (usa session o query param)
      header("Location: index.html?success=1");
      exit();
    } else {
      $errors[] = "Error al guardar: " . $stmt->error;
    }
    $stmt->close();
  }
}

$conn->close();

// Si errores, muestra en página (o redirect con errores)
if (!empty($errors)) {
  echo "<div class='container my-5'><div class='alert alert-danger'>";
  foreach ($errors as $error) echo "<p>$error</p>";
  echo "</div><a href='index.html' class='btn btn-primary'>Volver</a></div>";
}
?>
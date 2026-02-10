<?php
// Configuración de la base de datos (igual que en guardar.php)
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "contacto_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM contactos ORDER BY id DESC");
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Envíos Recibidos</title>

  <!-- Bootstrap 5 CDN (mismo que usas en el formulario) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Estilos personalizados – mismos colores y vibe que el formulario -->
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f0fdfa;          /* fondo teal muy claro */
      color: #111827;
      margin: 0;
      padding: 2rem;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      overflow: hidden;
      border: none;
    }

    .card-header {
      background: #0d9488;          /* teal intenso */
      color: white;
      padding: 1.25rem 1.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      border-bottom: none;
    }

    h2 {
      margin: 0;
    }

    .table {
      margin-bottom: 0;
      border-collapse: separate;
      border-spacing: 0;
    }

    .table th,
    .table td {
      padding: 1rem 1.25rem;
      vertical-align: middle;
      border-top: 1px solid #e5e7eb;
    }

    .table thead th {
      background: #f3f4f6;
      color: #374151;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      border-bottom: 2px solid #d1d5db;
    }

    .table tbody tr {
      transition: background-color 0.15s;
    }

    .table tbody tr:hover {
      background-color: #f1f5f9;
    }

    .table tbody td {
      border-right: 1px solid #f3f4f6;
    }

    .table tbody td:last-child {
      border-right: none;
    }

    .consent-si {
      color: #065f46;
      font-weight: 600;
    }

    .consent-no {
      color: #991b1b;
      font-weight: 500;
    }

    .no-registros {
      text-align: center;
      padding: 3rem;
      color: #6b7280;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .table th, .table td {
        padding: 0.75rem;
        font-size: 0.95rem;
      }
    }
  </style>
</head>
<body>

<main class="container my-5">
  <div class="card">
    <div class="card-header">
      <h2>Envíos Recibidos</h2>
    </div>

    <div class="card-body p-0">
      <?php if ($result && $result->num_rows > 0): ?>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Tipo</th>
                <th>Mensaje</th>
                <th>Consent</th>
              </tr>
            </thead>
            <tbody>
              <?php while ($row = $result->fetch_assoc()): ?>
                <tr>
                  <td><?= htmlspecialchars($row['id']) ?></td>
                  <td><?= htmlspecialchars($row['nombre']) ?></td>
                  <td><?= htmlspecialchars($row['apellido']) ?></td>
                  <td><?= htmlspecialchars($row['email']) ?></td>
                  <td><?= htmlspecialchars($row['tipo']) ?></td>
                  <td><?= nl2br(htmlspecialchars(substr($row['mensaje'], 0, 120))) ?><?= strlen($row['mensaje']) > 120 ? '...' : '' ?></td>
                  <td class="<?= $row['consentimiento'] ? 'consent-si' : 'consent-no' ?>">
                    <?= $row['consentimiento'] ? 'Sí' : 'No' ?>
                  </td>
                </tr>
              <?php endwhile; ?>
            </tbody>
          </table>
        </div>
      <?php else: ?>
        <div class="no-registros">
          <p>Aún no hay envíos registrados.</p>
        </div>
      <?php endif; ?>
    </div>
  </div>

  <!-- Botón para volver al formulario -->
  <div class="text-center mt-4">
    <a href="index.html" class="btn btn-outline-primary px-4 py-2">
      Volver al formulario
    </a>
  </div>
</main>

<?php $conn->close(); ?>

</body>
</html>
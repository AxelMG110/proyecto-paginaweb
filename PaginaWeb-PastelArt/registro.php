<?php
// Configuración de la base de datos
$servidor = "localhost"
$usuario = "root"
$clave = ""; // ¡Cambia esto por la contraseña de tu base de datos!
$basededatos = "pasteleria ";

// Crear conexión
$connection = mysqli_connect($servidor,$usuario, $clave, $basededatos)

//llamado a base de datos
$nombre = $_POST['nombre'];
$estado = $_POST['estado'];
$municipio = $_POST['municipio'];
$colonia = $_POST['colonia'];
$telefono = $_POST['telefono'];
$fecha_registro = $_POST['fecha-registro'];
$email = $_POST['email'];


// Preparar la consulta SQL para insertar datos
// Asegúrate de que los nombres de las columnas en tu tabla 'clientes' coincidan con esto
$insertardatos = "INSERT INTO clientes VALUES ('','$nombre','$estado','$municipio','$colonia','$telefono', '$fecha_registro', '$email');


$ejecutarinsertar= mysql_query($enlace,$insertardatos);
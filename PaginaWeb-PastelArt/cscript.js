function enviarCotizacionWhatsApp() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const piezas = document.getElementById('piezas').value;
    const saborBizcocho = document.getElementById('sabor_bizcocho').value;
    const relleno = document.getElementById('relleno').value;
    const zonaEntrega = document.getElementById('zona').value;

    // Número de teléfono de WhatsApp 
    const numeroWhatsApp = '5215549163333'; // Reemplaza con tu número
const mensaje = `¡Hola! quiero realizar una nueva cotización:\n\n` +
                `Nombre: ${nombre}\n` +
                `Teléfono: ${telefono}\n` +
                `No. de piezas: ${piezas}\n` +
                `Sabor Bizcocho: ${saborBizcocho}\n` +
                `relleno: ${relleno}\n` +
                `Zona de entrega: ${zonaEntrega}`;
const mensajeCodificado = encodeURIComponent(mensaje);
const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;


    // Redirigir al usuario a la URL de WhatsApp
    window.open(urlWhatsApp, '_blank');
}
function enviarCotizacionWhatsApp() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const personas = document.getElementById('personas').value;
    const saborBizcocho = document.getElementById('sabor_bizcocho').value;
    const saborLeche = document.getElementById('sabor_leche').value;
    const zonaEntrega = document.getElementById('zona').value;

    // Número de teléfono de WhatsApp 
    const numeroWhatsApp = '5215549163333'; // Reemplaza con tu número
const mensaje = `¡Hola! quiero realizar una nueva cotización:\n\n` +
                `Nombre: ${nombre}\n` +
                `Teléfono: ${telefono}\n` +
                `No. de personas: ${personas}\n` +
                `Sabor Bizcocho: ${saborBizcocho}\n` +
                `Sabor Leche: ${saborLeche}\n` +
                `Zona de entrega: ${zonaEntrega}`;
const mensajeCodificado = encodeURIComponent(mensaje);
const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;


    // Redirigir al usuario a la URL de WhatsApp
    window.open(urlWhatsApp, '_blank');
}
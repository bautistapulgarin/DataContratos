// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sitio de Análítica de Contratos cargado correctamente');
    
    // Ejemplo: Cambiar color del título al hacer clic
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.addEventListener('click', function() {
            this.style.color = this.style.color === 'red' ? 'white' : 'red';
        });
    }
    
    // Mensaje de bienvenida en consola
    console.log('Para ver este mensaje: F12 → Consola');
});

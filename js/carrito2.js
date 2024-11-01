
const URL = "http://127.0.0.1:5000/"



// Función para agregar al carrito con valores constantes predefinidos
function agregarAlCarrito2() {
    // Definimos los valores constantes
    const codigo = '001'; // Código fijo
    const descripcion = 'Camiseta Boca'; // Descripción fija
    let precio = 6000; // Precio fijo
    let cantidad =1; // Cantidad fija
    const proveedor = 'Deportes SA'; // Proveedor fijo
    

    // Crear un objeto FormData con los valores fijos
    const formData = new FormData();
    formData.append('codigo', codigo);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);
    formData.append('cantidad', cantidad);
    formData.append('proveedor', proveedor);




    // Realizamos la solicitud POST al servidor
fetch(URL + 'productos', { // fetcheamos a la URL http://http://127.0.0.1:5000/productos con el método POST (usamos la variable URL definida antes para poder colocar despues solo el nombre del decorador de la ruta en el servidor, en este caso productos)
    method: 'POST',
    body: formData // Aquí enviamos formData. Dado que formData puede contener archivos, no se utiliza JSON.
})

    //Después de realizar la solicitud POST, se utiliza el método then() para manejar la respuesta del servidor.
    .then(function (response) {
        if (response.ok) {
            //Si la respuesta es exitosa, convierte los datos de la respuesta a formato JSON.
            return response.json();
        } else {
            // Si hubo un error, lanzar explícitamente una excepción
            // para ser "catcheada" más adelante
            throw new Error('Error al agregar el producto.');
        }
    })

    //Respuesta OK, muestra una alerta informando que el producto se agregó correctamente y limpia los campos del formulario para que puedan ser utilizados para un nuevo producto.
    .then(function (data) {
        alert('Producto agregado correctamente.');
    })

    // En caso de error, mostramos una alerta con un mensaje de error.
    .catch(function (error) {
        alert('Error al agregar el producto.');
    })

    // Limpiar el formulario en ambos casos (éxito o error)
    .finally(function () {
        document.getElementById('descripcion').value = "";
        document.getElementById('cantidad').value = "";
        document.getElementById('precio').value = "";
        
        document.getElementById('proveedor').value = "";
    });
}
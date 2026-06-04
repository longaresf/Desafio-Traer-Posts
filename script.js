// Función asíncrona
const getPosts = async () => {

    // URL guardada en una variable
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // Bloque try/catch para conectarse a la URL con método fetch
    try {
        const response = await fetch(url);

        // Guardar respuesta del arreglo de datos JSON e una variable
        const data = await response.json();

        // Guardar en la variable el elemento <ul>
        let lista = document.querySelector('#post-data > ul');

        // Recorrer el arreglo obtenido con forEach(), e ir agragando
        // los elementos de a uno a la lista
        data.forEach((elemento)=>{
            lista.innerHTML += `<li>
                                    <p><strong>${elemento.title}</strong></p>
                                    <p>${elemento.body}</p>
                                    </br>
                              </li>`;
        });

    } 
    // Método catch() para atrapar errores
    catch(err) {
        console.log(err);
    }
    
}
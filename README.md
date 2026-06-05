# REST API Consumer & Async Data Fetcher (JavaScript)

Este repositorio contiene una aplicación web desarrollada en **JavaScript (ES6+)** enfocada en el consumo de servicios web externos mediante peticiones asíncronas. El proyecto demuestra la implementación eficiente del método `fetch`, el manejo de **Promesas** y la manipulación dinámica del DOM para renderizar información proveniente de una API REST.

## 🚀 Características y Capacidades Técnicas

* **Consumo de API RESTful:** Integración con la API JSONPlaceholder para la obtención de datos en formato JSON.
* **Programación Asíncrona:** Implementación de flujos de trabajo mediante `async/await` para garantizar una experiencia de usuario fluida sin bloqueos del hilo principal.
* **Manejo de Errores (Error Handling):** Uso de bloques `try...catch` para gestionar fallos de red o respuestas inesperadas del servidor, mejorando la robustez de la aplicación.
* **Manipulación Dinámica del DOM:** Renderizado automatizado de los posts recibidos en la interfaz mediante la creación e inyección de elementos HTML desde JavaScript.

## 🛠️ Stack Tecnológico

* **Lenguaje:** JavaScript (ES6+)
* **Protocolo de Red:** HTTP/HTTPS mediante Fetch API.
* **Interfaz de Usuario:** HTML5 / CSS3.
* **Entorno de Desarrollo:** Visual Studio Code.

## ⚙️ Resolución de Problemas y Buenas Prácticas

El desarrollo de este integrador de datos se centró en resolver desafíos comunes del desarrollo frontend:

1. **Gestión de la Asincronía:** Se aseguró que la interfaz de usuario no se "congele" mientras espera la respuesta del servidor, permitiendo una interacción continua del usuario.
2. **Transformación de Datos:** Procesamiento de la respuesta cruda del servidor para convertirla en estructuras de datos legibles por la aplicación (parsing JSON).
3. **Escalabilidad del Código:** Estructuración de funciones modulares encargadas de tareas únicas (obtener datos vs. renderizar datos), facilitando el mantenimiento y la lectura del código.

## 📌 Ejemplo de Implementación Asíncrona

El núcleo del proyecto utiliza una estructura de comunicación limpia:

```javascript
const getPosts = async () => {
    try {
        const response = await fetch('[https://api.example.com/posts](https://api.example.com/posts)');
        const data = await response.json();
        renderPosts(data);
    } catch (error) {
        console.error("Error al recuperar los datos:", error);
    }
};
```
🔧 Guía de Ejecución Local
1. Clonar el repositorio:
   Bash
   git clone [https://github.com/longaresf/rest-api-consumer-js.git](https://github.com/longaresf/rest-api-consumer-js.git)

2. Abrir el proyecto:
   Simplemente abre el archivo index.html en tu navegador o utiliza la extensión Live Server de VS Code para una mejor experiencia de desarrollo.

✒️ Autor

    Francisco Longares - Desarrollador Full Stack - longaresf

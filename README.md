# Landing Page Para Servidores.

Este proyecto es una **Landing Page** diseñada para mostrar información acerca de varios servidores, sus servicios, encargados, e imágenes representativas. La página sigue un estilo similar al de AWS, proporcionando una interfaz limpia y moderna para visualizar los servidores y sus funciones.
---
## Índice

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Instalación y Configuración](#instalación-y-configuración)

---
## Descripción del Proyecto
Este proyecto tiene como objetivo presentar una **landing page** que muestre 5 servidores con sus respectivas descripciones, encargados, y sus imágenes asociadas. Cada servidor tiene un detalle sobre sus funciones y es administrado por uno o más encargados. Además, la página cuenta con un diseño moderno inspirado en los servicios de AWS para garantizar una buena experiencia de usuario.

---
## Tecnologías Utilizadas
El proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **React**: Para la construcción de la interfaz de usuario.
- **Vite**: Herramienta de construcción para un desarrollo rápido y optimizado.
- **CSS**: Estilos personalizados utilizando técnicas modernas como **CSS Grid** y **Flexbox**.

---
## Estructura del Proyecto
La estructura del proyecto sigue buenas prácticas para facilitar el mantenimiento y la escalabilidad. A continuación, se detalla la organización de las carpetas y archivos principales:

- /src /components ServerCard.jsx # Componente que representa cada servidor /data servers.js # Datos de los servidores (nombre, descripción, imagen, encargados) /styles global.css # Estilos globales para toda la página App.jsx # Componente principal de la landing page main.jsx # Punto de entrada de la aplicación

- /public /images proxy.png # Imagen del servidor proxy docker.png # Imagen del servidor Docker gitlap.png # Imagen del servidor Gitlap redis.png # Imagen del servidor Redis respaldo.png # Imagen del servidor 5

- index.html # Archivo HTML principal

---
### Componentes
- **ServerCard**: Este componente recibe los datos de cada servidor (nombre, descripción, encargados, imagen) y los muestra en una tarjeta interactiva.
  
---
### Archivos de Datos
- **servers.js**: Contiene la información de los servidores que se mostrarán en la landing page, incluyendo el nombre, descripción, encargados y la ruta de la imagen asociada.

---
### Estilos
- **global.css**: Archivo que contiene los estilos globales del proyecto, incluyendo el diseño de la tarjeta de cada servidor y la disposición de la página en **CSS Grid**.

---
## Instalación y Configuración

### Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- **Node.js**: Necesario para la ejecución de Vite y React.
- **npm** o **yarn**: Para manejar las dependencias.
---
### Pasos para la Instalación

1. Clona el repositorio en tu máquina local:

   ```
   git clone https://github.com/Andres-Talamanes/Servers.git
    ```

2. Navega al directorio del proyecto:
 
 ```
cd Servers
 ```

 3. Instala las dependencias utilizando npm:
 ```
npm install
 ```

 4. Una vez que las dependencias se hayan instalado, inicia el servidor de desarrollo:

 ```
npm run dev
 ```

 5. Abre tu navegador y ve a http://localhost:3000 para ver la landing page en acción.

---
## Uso
La página mostrará un conjunto de tarjetas, cada una representando un servidor, con su imagen, descripción, y la lista de encargados. Si se desea modificar o agregar un servidor, se debe editar el archivo src/data/servers.js.
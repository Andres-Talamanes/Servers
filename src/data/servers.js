export const servers = [
  {
    id: 1,
    name: "Servidor Proxy",
    descriptions: [
      "Actúa como intermediario entre los usuarios y los servidores principales, proporcionando servicios de autenticación, autorización y cacheo para optimizar el tráfico de red."
    ],
    managers: [
      { name: "José Fabian Rauda Rivera", link: "https://github.com/Fabian-005/UbuntuServer-ITE-2024-2.git" },
      { name: "Andrés Manuel Hernández Talamanes", link: "https://github.com/Fabian-005/UbuntuServer-ITE-2024-2.git" }
    ],
    image: "/images/proxy.png",
  },
  {
    id: 2,
    name: "Servidor Docker",
    descriptions: [
      "Gestiona contenedores para ejecutar aplicaciones de forma eficiente, asegurando portabilidad y escalabilidad en entornos de desarrollo y producción.",
      "Codilink: Herramienta colaborativa para edición de código en tiempo real.",
      "Kanboard: Gestión visual de proyectos con tableros Kanban.",
      "Excalidraw: Dibujo y diagramación colaborativa en tiempo real."
    ],
    managers: [
      { name: "Luis Angel Murillo Salinas", link: "" } // Sin enlace para este encargado
    ],
    image: "/images/docker.png",
  },
  {
    id: 3,
    name: "Servidor GitLab",
    descriptions: [
      "Centraliza el control de versiones de proyectos de software, ofreciendo integración continua, despliegue continuo y colaboración en equipos de desarrollo."
    ],
    managers: [
      { name: "Vianey Barrientos Rebollar", link: "https://github.com/Vianeyb/GitLab.git" }
    ],
    image: "/images/gitlap.png",
  },
  {
    id: 4,
    name: "Servidor Redis",
    descriptions: [
      "Proporciona un almacenamiento rápido y eficiente para datos clave-valor, ideal para cachés, colas de mensajes y análisis en tiempo real."
    ],
    managers: [
      { name: "Judith Adilene Andrade Perez", link: "https://github.com/JudithAndrade/server-redis.git" }
    ],
    image: "/images/redis.png",
  },
  {
    id: 5,
    name: "Servidor de Respaldo",
    descriptions: [
      "Garantiza la protección y recuperación de datos críticos mediante copias de seguridad programadas y redundancia."
    ],
    managers: [
      { name: "Gloria Berenice Hernández Arredondo", link: "https://github.com/BereniceHernandezA/Servidor-Coach-DB.git" },
      { name: "Pedro Adrian Lopez Campuzano", link: "https://github.com/BereniceHernandezA/Servidor-Coach-DB.git" }
    ],
    image: "/images/respaldo.png",
  },
];

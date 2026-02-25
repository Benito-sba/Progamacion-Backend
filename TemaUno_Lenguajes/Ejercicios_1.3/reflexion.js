
/* REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs') 
   y un módulo de NPM (como 'sillyname') en cuanto a su origen e 
   instalación?

   Los módulos nativos forman parte del núcleo de NodeJS y vienen 
   incluidos automáticamente cuando se instala Node, por lo que no 
   requieren descarga ni instalación adicional. Ejemplos son 'fs', 
   'http' o 'path'. En cambio, los módulos de NPM son librerías creadas 
   por desarrolladores externos y deben instalarse manualmente mediante 
   el gestor de paquetes NPM usando comandos como "npm install". Estos 
   paquetes se almacenan dentro de la carpeta node_modules del proyecto.


2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' 
   (CommonJS) y 'import' (ES Modules)? Considera el momento en que se 
   cargan los módulos.

   'require' pertenece al sistema CommonJS y carga los módulos de forma 
   dinámica en tiempo de ejecución, es decir, cuando el programa llega a 
   esa línea de código. Por otro lado, 'import' pertenece a ES Modules y 
   realiza la carga de módulos de forma estática antes de ejecutar el 
   programa, lo que permite una mejor optimización, análisis del código 
   y compatibilidad con estándares modernos de JavaScript.


3. Sobre el archivo 'package.json':

   a) ¿Por qué es vital compartir este archivo pero NO la carpeta 
      'node_modules' al subir a un repositorio?

      El archivo package.json contiene la información del proyecto y la 
      lista de dependencias necesarias para ejecutarlo. Compartirlo permite 
      que cualquier desarrollador pueda reconstruir el entorno fácilmente. 
      En cambio, la carpeta node_modules puede ser muy pesada porque contiene 
      todos los paquetes descargados, por lo que subirla al repositorio 
      aumentaría innecesariamente el tamaño del proyecto y duplicaría 
      archivos que pueden instalarse nuevamente.

   b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo 
      tiene el package.json?

      NPM leerá el archivo package.json, descargará automáticamente todas 
      las dependencias especificadas y recreará la carpeta node_modules junto 
      con el archivo package-lock.json, dejando el proyecto listo para 
      ejecutarse correctamente.

*/
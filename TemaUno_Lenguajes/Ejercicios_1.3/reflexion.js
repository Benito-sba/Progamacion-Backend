/* REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs') 
   y un módulo de NPM (como 'sillyname') en cuanto a su origen e 
   instalación?

   Los módulos nativos ya vienen incluidos con NodeJS, por lo que no se 
   necesitan instalar. Solo se importan y se usan. por otro lado, los módulos 
   de NPM son creados por otros desarrolladores y debemos instalarlos 
   usando npm install antes de poder utilizarlos.


2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' 
   (CommonJS) y 'import' (ES Modules)? Considera el momento en que se 
   cargan los módulos.

   en pocas palabras 'require' es la forma antigua de importar módulos en NodeJS, esto carga 
   cuando el programa se está ejecutando. por otro lado 'import' es la forma moderna de 
   JavaScript y los módulos se cargan desde el inicio del programa, con estas nueva version ayuda a
   realizar  código más organizado y compatible con estándares actuales.


3. Sobre el archivo 'package.json':

   a) ¿Por qué es vital compartir este archivo pero NO la carpeta 
      'node_modules' al subir a un repositorio?

      seria inecesario porque el package.json guarda la lista de dependencias del proyecto,
      la carpeta en si pesaria mucho y con el comando npm se vuelve a intalar todo de nuevo


   b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo 
      tiene el package.json?

      bueno cuando ejecutamos el comando npm install en esa carpeta solo instalará 
      automáticamente todas las dependencias necesarias, con eso se creara de nuevo la 
      carpeta node_modules para que el proyecto funcione correctamente.

*/

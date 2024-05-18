version de node: 12.0.0
version de Angular: 11.0.1
version de bootstrap: 5.0.0

MONGODB atlas
https://cloud.mongodb.com/v2/6646f5d5c8508342262b4ef7#/security/database/users
variables.env
DB_MONGO=mongodb+srv://jorge:12345@cluster0.hkjxosf.mongodb.net/meaninforme
user: jorge
password: 12345
descargar mongodb compass minuto 1:09:00
Network access
IP Address
200.118.80.162/32

npm run dev: coore nodemon
npm install cors
npm install --save-dev jest @types/jest jest-preset-angular = Jest pruebas unitarias
npm install dotenv@8.2.0 express@4.17.1 mongoose@5.11.13: instala esas dependencias
Shift + Alt + A = cierra lienas en js /* */

1. Creamos un directorio para el proyecto lo llame "covid19"
2. Abrimos terminal cmd y cogemos la ruta del directorio yo la tengo aca "C:\Users\JorgeGaitan\Desktop\Periferia\covid19"
2.1. Escribimos en la terminal de cmd cd C:\Users\JorgeGaitan\Desktop\Periferia\covid19 para entrar a la ruta del directorio.
3. Verificamos que este instalado nodeJS y Angular
3.1. Para instalar Angular de manera global ponemos esto en la terminal "npm install -g @angular/cli".
4. Creamos el proyecto con este comando "ng new cliente" este es para el front.
4.1. Le damos a la hoja de estilo CSS y en YES para el modo estricto y nos configure el ruteo por defecto.
5. Abrimos la carpeta de cliente en el VSCode
5.1. Vamos a la terminal integrada de VSCODE "git bash" y aejecutamos nuestro proyecto con "ng serve --o" el --o es para abrir el explorador por defecto. (si a todo).
6. Instalamos Bootstrap vamos a la url "https://getbootstrap.com/docs/5.3/getting-started/download/" e instalamos la version actual. En este caso es "npm install bootstrap@5.3.3" y lo colocamos en la terminal de bash
6.1. Buscamos la ruta donde esta bootstrap.min.css y la digitamos en la carpeta angular.json en la seccion "styles" para tomar por default bootstrap de esta manera:
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],
7. Creamos a la altura de "app" tres direcorios "components", "services" los servicios en angular se utilizan para tres cosas para hacer peticiones http, para reutilizar codigo en angular y comunicacion entre componentes
8. Vamos a crear un componente con este coamndo abrinedo otra terminal de bash para no cerrar el localhost de angular
8.1. En la terminal escribimos g = generate y c = componente "ng g c components/crear-dato-covid" "crear producto" y se crean las carpetas en components css, html, spec.ts y ts


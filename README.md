# Journal APP 📑
Es una aplicación para guardar y organizar tus notas.
En la aplicación podrás crear notas, verlas, editarlas, eliminarlas.

Es una aplicación sencilla pero en la cual estan implementados conceptos y tecnologías muy interesantes como:

* Redux
* React-Router-Dom V6
* TailwindCSS
* React-Hooks-Form
* Firebase V9 Modular
* Carga de imágenes a Cloudinary

Existen muchisimas cosas por mejorar, pero para tener un acercamiento a estas tecnologías está genial.
# Ejecutar localmente
## Paso 1.

Crear un archivo e```.env.local``` en la raiz del proyecto con las siguientes variables de entorno para la configuración de Firebase y Cloudinary.
```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID

REACT_APP_CLOUD_URL
REACT_APP_CLOUD_UPLOAD_PRESET
```
## Paso 2.

Ejecutar la linea de comando ```npm install```


## Paso 3.
Ejecutar ```npm run start```, la aplicación correrá en ```http://localhost:3000```.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

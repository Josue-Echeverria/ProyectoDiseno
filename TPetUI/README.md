# BoilerPlate 

### **Carpeta __tests__**:

- **App.test.tsx**: Contiene las pruebas unitarias para la aplicación. Aquí es donde se escriben las pruebas para tus componentes (como el renderizado e interacción) utilizando Jest.

### **Carpeta .bundle**:

- **config**: Almacena archivos de configuración necesarios para empaquetar la aplicación. Esto incluye configuraciones relacionadas con la construcción para garantizar un correcto empaquetado para su despliegue.

### **Carpeta .expo**:

- **README.md**: Contiene información relacionada con la configuración de Expo para la app.
- **settings.json**: Archivo de configuración de Expo, que gestiona configuraciones como el ID del proyecto, variables de entorno y configuraciones específicas para el servidor de desarrollo.

### **Carpeta .vscode**:

- **react**: Configuración relacionada con el uso de React dentro del editor de VS Code. Puede incluir configuraciones del editor para mejorar la experiencia de desarrollo.

### **Carpeta android**:

Contiene todos los archivos necesarios para construir y ejecutar la aplicación en dispositivos Android. Esto incluye configuraciones de Gradle y archivos del proyecto Android.

- **build.gradle**: Un archivo de configuración que gestiona las dependencias y configuraciones de compilación para la plataforma Android.
- **gradlew/gradlew.bat**: Estos archivos son scripts que gestionan el sistema de compilación Gradle para entornos Unix y Windows.
- **settings.gradle**: Configura los ajustes de Gradle para el proyecto Android.

### **Carpeta assets**:

Contiene los activos estáticos del proyecto, como imágenes e íconos (por ejemplo, **Agendar.jpg**, **mascotas.png**, **LogoVetDefault.png**). Estos se utilizan en toda la aplicación para el renderizado de la interfaz de usuario.

### **Carpeta components**:

#### Carpeta **atoms**: Contiene pequeños componentes reutilizables que son los bloques básicos en el diseño atómico.

- **Boton.jsx**: Un componente de botón para uso general en toda la app.
- **Calendario.jsx**: Componente utilizado para renderizar un calendario para programar citas.
- **RateEstrellas.jsx**: Componente para renderizar un sistema de calificación con estrellas.
- **NavItem.jsx**: Un componente que representa un elemento de navegación para la aplicación.

#### Carpeta **molecules**: Componentes que están formados por átomos y representan elementos de UI más complejos.

- **BlueContainer.jsx**: Un componente de contenedor utilizado para agrupar contenido con un fondo azul y una flecha opcional para volver.
- **NavBar.jsx**: Un componente de barra de navegación en la parte superior de las pantallas.
- **RatingBar.jsx**: Utilizado para mostrar calificaciones en formato de barra.
- **ContainerDescuento.jsx**: Componente que muestra información sobre descuentos.

#### Carpeta **organisms**: Organismos son secciones más grandes de la interfaz de usuario compuestas por átomos y moléculas.

- **Reviews.jsx**: Muestra una lista de reseñas para servicios veterinarios.
- **TarjetaVeterinaria.jsx**: Una tarjeta detallada que muestra información sobre veterinarios, su horario y especialidades.

### **Carpeta ios**:

Contiene la configuración y los archivos del proyecto para ejecutar la aplicación en iOS. Similar a la carpeta android, pero adaptada para el desarrollo en iOS con Xcode y CocoaPods.

### **Carpeta node_modules**:

Contiene todas las dependencias y paquetes del proyecto instalados a través de npm o yarn. Estos son necesarios para ejecutar y construir el proyecto.

### **Carpeta templates**:

Contiene las plantillas principales de las pantallas utilizadas en la aplicación.

- **PantallaAgendar.jsx**: La pantalla de programación donde los usuarios pueden reservar citas.
- **PantallaPrincipal.jsx**: La pantalla principal de la aplicación que muestra los servicios clave u opciones.
- **PantallaReviews.jsx**: Una pantalla dedicada a mostrar las reseñas de los usuarios para los servicios.

# Instrucciones default para correr el proyecto
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

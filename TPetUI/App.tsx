import React, { useState } from 'react';
import PantallaPrincipal from './components/templates/PantallaPrincipal.jsx';
import PantallaVeterinarias from './components/templates/PantallaVeterinarios.jsx'; 
import PantallaAgendar from './components/templates/PantallaAgendar.jsx';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('PantallaPrincipal');
  const [veterinarioSeleccionado, setVeterinarioSeleccionado] = useState({ nombre: '', precio: '', especialidad: ''});

  // Función para renderizar la pantalla actual basada en el estado
  const renderScreen = () => {
    if (currentScreen === 'PantallaPrincipal') {
      return (
        <PantallaPrincipal
          goToVeterinarias={() => setCurrentScreen('PantallaVeterinarias')}
          goToAgendar={() => setCurrentScreen('PantallaAgendar')}
          goToPantallaPrincipal={() => setCurrentScreen('PantallaPrincipal')} 
        />
      );
    } else if (currentScreen === 'PantallaVeterinarias') {
      return (
        <PantallaVeterinarias
          goToPantallaPrincipal={() => setCurrentScreen('PantallaPrincipal')}
          goBack={() => setCurrentScreen('PantallaPrincipal')}
          goToAgendar={(nombre: string, precio: string, especialidad: string) => {
            setVeterinarioSeleccionado({ nombre, precio, especialidad });
            setCurrentScreen('PantallaAgendar');
          }}
        />
      );
    } else if (currentScreen === 'PantallaAgendar') {
      return (
        <PantallaAgendar
          goToPantallaPrincipal={() => setCurrentScreen('PantallaPrincipal')} 
          goBack={() => setCurrentScreen('PantallaVeterinarias')}
          nombre={veterinarioSeleccionado.nombre}
          precio={veterinarioSeleccionado.precio}
          especialidad={veterinarioSeleccionado.especialidad}
        />
      );
    }
  };

  return (
    <React.Fragment>
      {renderScreen()}
    </React.Fragment>
  );
}

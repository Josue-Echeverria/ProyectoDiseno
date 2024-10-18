import React, { useState } from 'react';
import PantallaPrincipal from './components/templates/PantallaPrincipal.jsx';
import PantallaVeterinarias from './components/templates/PantallaVeterinarias.jsx'; // Importa la pantalla de veterinarias

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('PantallaPrincipal');

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


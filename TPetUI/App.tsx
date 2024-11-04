import React, { useState } from 'react';
import PantallaPrincipal from './templates/PantallaPrincipal.jsx';
import PantallaAgendar from './templates/PantallaAgendar.jsx';
import PantallaReviews from './templates/PantallaReviews.jsx';
import PantallaCitaFinalizada from './templates/PantallaCitaFinalizada.jsx';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('PantallaCitaFinalizada');
  
  // Añadido cantEstrellas para pasarlo también
  const [veterinarioSeleccionado, setVeterinarioSeleccionado] = useState({
    nombre: '',
    precio: '',
    especialidad: '',
    descripcion: '',
    cantEstrellas: 0,  // Añadido para manejar la calificación
  });

  // Función para renderizar la pantalla actual basada en el estado
  const renderScreen = () => {
    if (currentScreen === 'PantallaPrincipal') {
      return (
        <PantallaPrincipal
          goToPantallaPrincipal={() => setCurrentScreen('PantallaPrincipal')} 
          goToAgendar={(nombre: string, precio: string, especialidad: string, descripcion: string, cantEstrellas: number) => {
            // Incluyendo cantEstrellas en el estado seleccionado
            setVeterinarioSeleccionado({ nombre, precio, especialidad, descripcion, cantEstrellas });
            setCurrentScreen('PantallaAgendar');
          }}
          goToReviews={(nombre: string, precio: string, especialidad: string, descripcion: string, cantEstrellas: number) => {
            // Incluyendo cantEstrellas en el estado seleccionado
            setVeterinarioSeleccionado({ nombre, precio, especialidad, descripcion, cantEstrellas });
            setCurrentScreen('PantallaReviews');
          }}
        />
      );
    } else if (currentScreen === 'PantallaAgendar') {
      return (
        <PantallaAgendar
          goToPantallaPrincipal={() => setCurrentScreen('PantallaPrincipal')}
          goToCitaFinalizada={() => setCurrentScreen('PantallaCitaFinalizada')}
          goToAgendar={() => setCurrentScreen('PantallaAgendar')}
          nombre={veterinarioSeleccionado.nombre}
          precio={veterinarioSeleccionado.precio}
          especialidad={veterinarioSeleccionado.especialidad}
        />
      );
    } else if (currentScreen === 'PantallaReviews') {
      return (
        <PantallaReviews
          goBack={() => setCurrentScreen('PantallaPrincipal')}
          goToAgendar={() => setCurrentScreen('PantallaAgendar')}
          nombre={veterinarioSeleccionado.nombre}
          precio={veterinarioSeleccionado.precio}
          especialidad={veterinarioSeleccionado.especialidad}
          descripcion={veterinarioSeleccionado.descripcion}
          cantEstrellas={veterinarioSeleccionado.cantEstrellas}
        />
      );
    } else if (currentScreen === 'PantallaCitaFinalizada') {
      return (
        <PantallaCitaFinalizada
          goBack={() => setCurrentScreen('PantallaPrincipal')}
          goToAgendar={() => setCurrentScreen('PantallaAgendar')}
          nombre={veterinarioSeleccionado.nombre}
          precio={veterinarioSeleccionado.precio}
          especialidad={veterinarioSeleccionado.especialidad}
          descripcion={veterinarioSeleccionado.descripcion}
          cantEstrellas={veterinarioSeleccionado.cantEstrellas}
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

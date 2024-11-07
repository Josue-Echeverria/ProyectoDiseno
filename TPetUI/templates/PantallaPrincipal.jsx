import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NavBar from '../components/molecules/NavBar.jsx';
import TarjetaVet from '../components/organisms/TarjetaVeterinaria.jsx';
import imagen1 from '../assets/LogoVetDefault.png';  
import BlueContainer from '../components/molecules/BlueContainer.jsx';
import DescuentoInfo from '../components/molecules/ContainerDescuento.jsx';
import RatingBar from '../components/molecules/RatingBar.jsx';

const PantallaPrincipal = ({ goToPantallaPrincipal, goToMascotas, goToNotificaciones, goToAgendar, goToReviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);  // Estado para controlar la tarjeta actual
  const [veterinarias, setVeterinarias] = useState([]);

  const horarios = ['L-V 8:00am - 5:00pm', 'L-D 24/7', 'L-S 3:00pm - 7:00pm', 'L-V 7:00am - 5:00pm', 'L-S 1:00pm - 7:00pm','L-V 8:00am - 5:00pm', 'L-D 24/7', 'L-S 3:00pm - 7:00pm', 'L-V 7:00am - 5:00pm', 'L-S 1:00pm - 7:00pm']
  const precios = [25000, 30000, 20000, 35000,25000, 30000, 20000, 35000]
  const cantEstrellas = [5, 4, 3, 5, 4, 3, 5, 4, 3]
  const totalReviews = [1000, 2000, 3000,1000, 2000, 3000,1000, 2000, 3000]
  useEffect(() => {
    fetch('https://oyster-robust-ghost.ngrok-free.app/api/vets')
      .then((response) => response.json())
      .then((json) => {
        setVeterinarias(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  // Función para avanzar a la siguiente tarjeta
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % veterinarias.length);
  };

  // Función para retroceder a la tarjeta anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + veterinarias.length) % veterinarias.length);
  };
  
  return (
    <View style={styles.container}>
      <BlueContainer text="TPet" showBackArrow={false} />
      <View style={styles.vetCardContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>
        {veterinarias.length === 0 ? <Text>Cargando...</Text> : 
        <TarjetaVet
          nombre={veterinarias[currentIndex].usuario}
          especialidad={veterinarias[currentIndex].especialidad}
          horario={horarios[currentIndex]}
          descripcion={veterinarias[currentIndex].descripcion}
          precio={precios[currentIndex]}
          imagen={imagen1}
          cantEstrellas={cantEstrellas[currentIndex]}
          goToAgendar={goToAgendar}
        />
        }
        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerRate}>
      {veterinarias.length === 0 ? <Text>Cargando...</Text> : 
        <RatingBar
          totalReviews={`+ ${totalReviews[currentIndex]}`}
          ratingsDistribution={[0.7, 0.2, 0.05, 0.03, 0.02]} 
          goToReviews={goToReviews}
          goToAgendar={goToAgendar}
          goback={goToPantallaPrincipal}
          cantEstrellas={cantEstrellas[currentIndex]}
          nombre={veterinarias[currentIndex].usuario}
          precio={veterinarias[currentIndex].precio}  
          especialidad={veterinarias[currentIndex].especialidad}
          descripcion={veterinarias[currentIndex].descripcion}
        />
      }
      </View>

      <DescuentoInfo goToReviews={goToReviews}/>
      <NavBar 
        goToPantallaPrincipal={goToPantallaPrincipal} 
        goToMascotas={goToMascotas}
        goToNotificaciones={goToNotificaciones}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0FA3B1',
    justifyContent: 'center',
  },
  containerRate: {
    backgroundColor: '#FFFFFF',
    top: 340,
  },
  vetCardContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: 100,
    marginBottom: 170,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    borderRadius: 15,
  },
  arrowButton: {
    padding: 5,
  },
  arrowText: {
    fontSize: 24,
    color: '#000000',
  },
});

export default PantallaPrincipal;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NavBar from '../components/molecules/NavBar.jsx';
import Boton from '../components/atoms/Boton.jsx';
import TarjetaVet from '../components/organisms/TarjetaVeterinaria.jsx';
import imagen1 from '../assets/LogoVetDefault.png';  
import BlueContainer from '../components/molecules/BlueContainer.jsx';
import DescuentoInfo from '../components/molecules/ContainerDescuento.jsx';
import RatingBar from '../components/molecules/RatingBar.jsx';

const PantallaPrincipal = ({ goToPantallaPrincipal, goToAgendar, goToReviews }) => {

  const [modalVisible, setModalVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);  // Estado para controlar la tarjeta actual

  const veterinarias = [ //simulación de datos del backend
    {   
        nombre: 'Josue Echeverría',
        horario: 'L-V 8:00am - 5:00pm',
        especialidad: 'Cirujano',
        descripcion: 'Especialista en cirugías de alta complejidad.',
        precio:  20000,
        imagen: imagen1,
        cantEstrellas: 4
    },
    {
        nombre: 'Harlen Quirós',
        horario: 'L-D 24/7',
        especialidad: 'Animales Exóticos',
        descripcion: 'Especialista en animales exóticos y silvestres.',
        precio:  15000,
        imagen: imagen1,
        cantEstrellas: 3
    },
    {
        nombre: 'Luany Masís',
        horario: 'L-S 3:00pm - 7:00pm',
        especialidad: 'Análisis Clínico',
        descripcion: 'Especialista en análisis clínicos y diagnósticos.',
        precio:  25000,
        imagen: imagen1,
        cantEstrellas: 5
    },
    {
        nombre: 'Rodrigo Nuñez',
        horario: 'L-V 7:00am - 5:00pm',
        especialidad: 'Medicina General',
        descripcion: 'Especialista en medicina general y preventiva.',
        precio:  25000,
        imagen: imagen1,
        cantEstrellas: 5
    }
  ];

  const closeModal = () => {
    setModalVisible(false);
  };

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

      {/* Mostrar tarjeta de veterinario actual */}
      <View style={styles.vetCardContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>

        <TarjetaVet
          nombre={veterinarias[currentIndex].nombre}
          especialidad={veterinarias[currentIndex].especialidad}
          horario={veterinarias[currentIndex].horario}
          descripcion={veterinarias[currentIndex].descripcion}
          precio={veterinarias[currentIndex].precio}
          imagen={veterinarias[currentIndex].imagen}
          cantEstrellas={veterinarias[currentIndex].cantEstrellas}
          goToAgendar={goToAgendar}
        />

        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerRate}>
        <RatingBar
          totalReviews={3654252}
          ratingsDistribution={[0.7, 0.2, 0.05, 0.03, 0.02]} 
          goToReviews={goToReviews}
          goToAgendar={goToAgendar}
          goback={goToPantallaPrincipal}
          cantEstrellas={veterinarias[currentIndex].cantEstrellas}
          nombre={veterinarias[currentIndex].nombre}
          precio={veterinarias[currentIndex].precio}  
          especialidad={veterinarias[currentIndex].especialidad}
          descripcion={veterinarias[currentIndex].descripcion}
        />
      </View>

      <DescuentoInfo goToReviews={goToReviews}/>
      <NavBar goToPantallaPrincipal={goToPantallaPrincipal} />
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

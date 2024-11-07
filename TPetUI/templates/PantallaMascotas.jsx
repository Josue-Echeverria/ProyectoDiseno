import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import NavBar from '../components/molecules/NavBar.jsx';
import TarjetaMascota from '../components/atoms/TarjetaMascota.jsx';
import labrador from '../assets/labrador.jpeg';
import labrador2 from '../assets/labrador2.jpeg';
import mainCoon from '../assets/mainCoon.jpeg';
import shortHair from '../assets/shortHair.jpg';
import TarjetaUsuario from '../components/atoms/TarjetaUsuario.jsx';

const PantallaMascotas = ({ goToPantallaPrincipal, goToMascotas, goToNotificaciones}) => {
    const [mascotas, setMascotas] = useState([]);
    useEffect(() => {
        fetch('https://oyster-robust-ghost.ngrok-free.app/api/pets/8')
          .then((response) => response.json())
          .then((json) => {
            setMascotas(json);
            console.log(json);

          })
          .catch((error) => {
            console.error(error);
          });
      }, [])
    
    const usuario = {
        nombre: 'Juan Pérez',
        apellido: 'González',
        email: 'juanperez@gmail.com',
    };

    const getImageBreed = (raza) => {
        switch(raza) {
            case 'Labrador':
                return labrador;
            case 'Maine Coon':
                return mainCoon;
            case 'British Shorthair':
                return shortHair;
            default:
                return labrador2;
        }
    }
    return (
        <View style={styles.container}>
            <TarjetaUsuario user={usuario}/>
            <View style={styles.mascotasContainer}>
                <Text style={styles.title}>Mis mascotas</Text>
                <TouchableOpacity style={styles.agregarMascota}>
                    <Text style={styles.agregarMascotaText}>
                        Agregar mascota
                    </Text>

                </TouchableOpacity>
                <ScrollView style={styles.scrollView}>
                    {mascotas.length === 0 ? <Text>Cargando...</Text> : 
                        mascotas.map((mascota, index) => (
                            <>
                            <TarjetaMascota
                                key={index}
                                nombre={mascota.nombre}
                                edad={mascota.edad}
                                raza={mascota.raza}
                                foto={getImageBreed(mascota.raza)}
                            />
                            </>
                        ))
                    }
                </ScrollView>
            </View>
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
    },
    mascotasContainer: {
        borderRadius: 15,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        height: '64%',
    },
    title: {        
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 6,
        marginHorizontal: 20,
        padding: 10,
    },
    scrollView: {
        marginBottom: 0,
    },
    agregarMascota: {
        right: 20,
        top: 15,
        width: 170,
        height: 50,
        backgroundColor: '#0FA3B1',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    agregarMascotaText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PantallaMascotas;

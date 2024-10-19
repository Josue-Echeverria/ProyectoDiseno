import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import NavBar from '../organisms/NavBar.jsx';
import TarjetaVet from '../organisms/TarjetaVeterinaria.jsx';
import imagen1 from '../assets/LogoVetDefault.jpg';
import BlueContainer from '../molecules/BlueContainer.jsx';

const PantallaVeterinarios = ({ goToPantallaPrincipal, goBack, goToAgendar}) => {
    const [currentScreen, setCurrentScreen] = useState('PantallaPrincipal');

    const [veterinarias] = useState([ //simulación de datos del backend
        {   
            nombre: 'Josue Echeverría',
            horario: 'L-V 8:00am - 5:00pm',
            especialidad: 'Cirujano',
            descripcion: 'Especialista en cirugías de alta complejidad.',
            precio:  '₡20000',
            imagen: imagen1,
            cantEstrellas: 4
        },
        {
            nombre: 'Harlen Quirós',
            horario: 'L-D 24/7',
            especialidad: 'Animales Exóticos',
            descripcion: 'Especialista en animales exóticos y silvestres.',
            precio:  '₡15000',
            imagen: imagen1,
            cantEstrellas: 3
        },
        {
            nombre: 'Luany Masís',
            horario: 'L-S 3:00pm - 7:00pm',
            especialidad: 'Análisis Clínico',
            descripcion: 'Especialista en análisis clínicos y diagnósticos.',
            precio:  '₡25000',
            imagen: imagen1,
            cantEstrellas: 5
        },
        {
            nombre: 'Rodrigo Nuñez',
            horario: 'L-V 7:00am - 5:00pm',
            especialidad: 'Medicina General',
            descripcion: 'Especialista en medicina general y preventiva.',
            precio:  '₡25000',
            imagen: imagen1,
            cantEstrellas: 5
        }
      ]);

    return (
        <View style={styles.container}>
            <BlueContainer text="Veterinarios" onBackPress={goBack} showBackArrow={true} />
            <View style={styles.container2}>
            <ScrollView>
                {veterinarias.map((vet, index) => (
                    <TarjetaVet
                        key={index}
                        nombre={vet.nombre}
                        especialidad={vet.especialidad}
                        horario={vet.horario}
                        descripcion={vet.descripcion}
                        precio={vet.precio}
                        imagen={vet.imagen}
                        cantEstrellas={vet.cantEstrellas}
                        goToAgendar={goToAgendar}
                    />
                ))}
            </ScrollView>
            </View>
            <NavBar goToPantallaPrincipal={goToPantallaPrincipal} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        justifyContent: 'center', 
        paddingTop: 80,
        paddingBottom: 70, 
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#007BFF',
        padding: 10,
        position: 'absolute',  
        bottom: 0,             
        width: '100%',        
    },
});

export default PantallaVeterinarios;
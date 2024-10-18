import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import NavBar from '../organisms/NavBar.jsx';
import TarjetaVet from '../organisms/TarjetaVeterinaria.jsx';
import LogoVet from '../atoms/LogoVet.jsx';

const PantallaVeterinarias = () => {
    const [currentScreen, setCurrentScreen] = useState('PantallaPrincipal');

    const [veterinarias] = useState([ //simulación de datos del backend
        {   
            nombre: 'Veterinaria PetCare',
            descripcion: 'Especialistas en el cuidado de tus mascotas por más de 20 años',
            precio:  '₡20000',
            imagen: require('../assets/LogoVetDefault.jpg'),
            cantEstrellas: 4
        },
        {
            nombre: 'Veterinaria Mundo Animal',
            descripcion: 'Tu tienda de confianza para el bienestar de tus animales',
            precio:  '₡15000',
            imagen: require('../assets/LogoVetDefault.jpg'),
            cantEstrellas: 3
        },
        {
            nombre: 'Clínica Veterinaria Los Pinos',
            descripcion: 'Tratamiento especializado para todo tipo de mascotas',
            precio:  '₡25000',
            imagen: require('../assets/LogoVetDefault.jpg'),
            cantEstrellas: 5
        }
      ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Veterinarias</Text>
            {/* <ScrollView>
            {veterinarias.map((vet, index) => (
                <TarjetaVet
                    key={index}
                    nombre={vet.nombre}
                    descripcion={vet.descripcion}
                    precio={vet.precio}
                    imagen={vet.imagen}
                    cantEstrellas={vet.cantEstrellas}
                />
            ))}
            </ScrollView>  */}
            <NavBar goToPantallaPrincipal={() => setCurrentScreen('PantallaPrincipal')}/>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default PantallaVeterinarias;
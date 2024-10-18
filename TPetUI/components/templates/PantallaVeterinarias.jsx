import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import NavBar from '../organisms/NavBar.jsx';
import TarjetaVet from '../organisms/TarjetaVeterinaria.jsx';
import imagen1 from '../assets/LogoVetDefault.jpg';
import BlueContainer from '../molecules/BlueContainer.jsx';

const PantallaVeterinarias = ({ goToPantallaPrincipal, goBack, goToAgendar}) => {
    const [currentScreen, setCurrentScreen] = useState('PantallaPrincipal');

    const [veterinarias] = useState([ //simulación de datos del backend
        {   
            nombre: 'Veterinaria PetCare',
            horario: 'L-V 8:00am - 5:00pm',
            precio:  '₡20000',
            imagen: imagen1,
            cantEstrellas: 4
        },
        {
            nombre: 'Veterinaria Mundo Animal',
            horario: 'L-D 24/7',
            precio:  '₡15000',
            imagen: imagen1,
            cantEstrellas: 3
        },
        {
            nombre: 'Clínica Veterinaria Los Pinos',
            horario: 'L-S 3:00pm - 7:00pm',
            precio:  '₡25000',
            imagen: imagen1,
            cantEstrellas: 5
        },
        {
            nombre: 'Clínica Veterinaria Guau Guau',
            horario: 'L-V 7:00am - 5:00pm',
            precio:  '₡25000',
            imagen: imagen1,
            cantEstrellas: 5
        }
      ]);

    return (
        <View style={styles.container}>
            <BlueContainer text="Veterinarias" onBackPress={goBack} showBackArrow={true} />
            <View style={styles.container2}>
            <ScrollView>
                {veterinarias.map((vet, index) => (
                    <TarjetaVet
                        key={index}
                        nombre={vet.nombre}
                        horario={vet.horario}
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

export default PantallaVeterinarias;
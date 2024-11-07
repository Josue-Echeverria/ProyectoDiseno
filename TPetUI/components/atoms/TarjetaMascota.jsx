import React from 'react';
import Boton from './Boton';
import { View, Text, Image, StyleSheet,  } from 'react-native';
import pencil from '../../assets/pencil.png';

const TarjetaMascota = ({ nombre, raza, foto }) => {
    return (
        <View style={styles.card}>
            <Image 
                source={typeof foto === 'number' ? foto : { uri: foto }} 
                style={styles.foto} 
            />
            <View style={styles.info}>
                <View style={styles.nameEdit}>
                    <Text style={styles.nombre}>{nombre}</Text>
                    <Image 
                        source={typeof pencil === 'number' ? pencil : { uri: pencil }} 
                        style={styles.pencil} 
                    />
                </View>
                <Text style={styles.raza}>{raza}</Text>
                <Boton 
                    style={styles.botonSusCitas} 
                    text="Sus citas" 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginHorizontal: 16,
        padding : 16,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderWidth: 2,
        marginTop: 10,
    },
    foto: {
        width: 90, // Tamaño ajustado para imagen más compacta
        height: 90,
        borderRadius: 45, // Hacer la imagen circular
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 15,
        flex: 1,
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    raza: {
        fontSize: 16,
        color: '#555',
    },
    edad: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
    },
    botonSusCitas: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#0FA3B1',
        borderRadius: 8,
        color: 'white',
        textAlign: 'center',
        width: '100%',
    },
    pencil: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    nameEdit:{
        display: 'flex',
        flexDirection: 'row',
    }
});

export default TarjetaMascota;
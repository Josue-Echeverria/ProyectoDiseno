import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import NavBar from '../components/molecules/NavBar.jsx';
import TarjetaNotificacion from '../components/atoms/TarjetaNotificacion.jsx';
import noNotificacion from '../assets/noNotificacion.png';

const PantallaNotificaciones = ({ goToNotificaciones, goToPantallaPrincipal, goToMascotas }) => {
    const [data, setData] = useState([]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            
                <Text style={styles.text}>Todas</Text>
                <Text style={styles.text}>Importantes</Text>
                <Text style={styles.text}>Leídas</Text>
                <Text style={styles.text}>No leídas</Text>
                <Text style={styles.text}>Recordatorios</Text>
            </View>
            {data.length > 0 ? (
                data.map((item) => (
                    <TarjetaNotificacion key={item.id} title={item.title} message={item.body} />
                ))
            ) : (
                <View style={styles.notificacionesContainer}>
                    <Image 
                        source={typeof noNotificacion === 'number' ? noNotificacion : { uri: noNotificacion }} 
                        style={styles.noNotificacion} 
                    />
                    <Text style={styles.title}>No tienes notificaciones</Text>
                </View>
            )}
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
    vetCardContainer: {
        marginTop: 70,
        marginBottom: 0,
        borderRadius: 15,
    },
    notificacionesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 40,
        marginBottom: 80,
    },
    noNotificacion: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
    },
    header: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        padding: 15,
        width: '100%',
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    text: {
        color: 'grey',
        fontSize: 13,
        fontWeight: 'bold',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
});

export default PantallaNotificaciones;

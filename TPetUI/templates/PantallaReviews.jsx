import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BlueContainer from '../components/molecules/BlueContainer.jsx';
import NavBar from '../components/molecules/NavBar.jsx';
import Reviews from '../components/organisms/Reviews.jsx';
import TarjetaVet from '../components/organisms/TarjetaVeterinaria.jsx';
import imagen1 from '../assets/LogoVetDefault.png';

const PantallaReviews = ({ goBack, goToAgendar, nombre, precio, especialidad, descripcion, cantEstrellas }) => {
    const reviews = [ // Simulación de datos del backend
        {
            userName: 'Juan Pérez',
            rating: 5,
            review: 'Excelente servicio, muy recomendado.',
        },
        {
            userName: 'María Rodríguez',
            rating: 4,
            review: 'Muy buen trato y atención, volvería a visitar.',
        },
        {
            userName: 'Carlos Sánchez',
            rating: 3,
            review: 'Buen servicio, pero la espera fue un poco larga.',
        },
    ];

    return (
        <View style={styles.container}>
            <BlueContainer text="Reseñas de Usuarios" onBackPress={goBack} showBackArrow={true} />

            <View style={styles.vetCardContainer}>
                <TarjetaVet
                    nombre={nombre}          
                    especialidad={especialidad}        
                    rating={cantEstrellas}
                    descripcion={descripcion}         
                    imagen={imagen1}     
                    //precio={precio}  
                    goToAgendar={goToAgendar} // Pasamos el precio al agendar sin mostrarlo
                    
                />
            </View>

            {/* Lista de comentarios */}
            <ScrollView style={styles.reviewsContainer}>
                {reviews.map((review, index) => (
                    <Reviews 
                        key={index}
                        userName={review.userName}
                        reviewText={review.review}
                        rating={review.rating}
                    />
                ))}
            </ScrollView>

            <NavBar goToPantallaPrincipal={goBack} />
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
    reviewsContainer: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 40,
        marginBottom: 80,
    },
});

export default PantallaReviews;

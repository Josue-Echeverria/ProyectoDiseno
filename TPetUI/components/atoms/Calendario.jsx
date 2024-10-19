import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

const Calendario = ({ onDayPress, selectedDay }) => {
  // Marca el día seleccionado con un círculo azul
  const markedDates = selectedDay
    ? {
        [selectedDay]: {
          selected: true,
          selectedColor: '#66AAFF', // Cambia el color a azul
        },
      }
    : {};

  return (
    <Calendar
      onDayPress={onDayPress}
      markedDates={markedDates} // Aplica los días marcados
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 10,
      }}
      theme={{
        todayTextColor: '#00adf5',
      }}
    />
  );
};

export default Calendario;

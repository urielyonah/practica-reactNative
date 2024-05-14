import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';


const Ejercicio3 = () => {
  const [monto, setMonto] = useState('');
  const [descuento, setDescuento] = useState('');


  const calcularDescuento = () => {
    const montoNum = parseFloat(monto);

    if (montoNum >= 100) {
      const descuentoCalculado = ((montoNum * 10) / 100);
      setDescuento(descuentoCalculado.toString());
    } else if (montoNum < 100) {
      const descuentoCalculado = ((montoNum * 2) / 100);
      setDescuento(descuentoCalculado.toString());
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Dado un monto, calcular el descuento considerando que por
        encima de 100 el descuento es el 10% y por debajo de 100
        el descuento es el 2%.
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Monto"
          value={monto}
          onChangeText={setMonto}
        />
      </View>
      <Button
        title="Calcular Descuento"
        onPress={calcularDescuento}
        buttonStyle={styles.button}
      />
      {descuento !== '' && (
        <Text style={styles.resultText}>Descuento: ${descuento}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  inputContainer: {
    marginBottom: 20,
    width: 200,
  },
  texto: {
    margin: 10,
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    width: 200,
    borderRadius: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Ejercicio3;
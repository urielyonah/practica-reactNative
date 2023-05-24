import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';


const Ejercicio2 = () => {
  const [sueldo, setSueldo] = useState('');
  const [descuento, setDescuento] = useState('');
  const [sueldoNeto, setSueldoNeto] = useState('');

 

  const calcularDescuento = () => {
    const sueldoNum = parseFloat(sueldo);

    if (sueldoNum <= 1000) {
      const descuentoCalculado = sueldoNum * 0.1;
      const sueldoNetoCalculado = sueldoNum - descuentoCalculado;
      setDescuento(descuentoCalculado.toString());
      setSueldoNeto(sueldoNetoCalculado.toString());
    } else if (sueldoNum > 1000 && sueldoNum <= 2000) {
      const descuentoCalculado = ((sueldoNum - 1000) * 0.05) + (1000 * 0.1);
      const sueldoNetoCalculado = sueldoNum - descuentoCalculado;
      setDescuento(descuentoCalculado.toString());
      setSueldoNeto(sueldoNetoCalculado.toString());
    } else if (sueldoNum > 2000) {
      const descuentoCalculado = ((sueldoNum - 2000) * 0.03) + (1000 * 0.15);
      const sueldoNetoCalculado = sueldoNum - descuentoCalculado;
      setDescuento(descuentoCalculado.toString());
      setSueldoNeto(sueldoNetoCalculado.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        A un trabajador le descuentan de su sueldo el 10% si su sueldo
        es menor o igual a 1000, por encima de 1000 y hasta 2000 el 5%
        del adicional, y por encima de 2000 el 3% del adicional.
        Calcular el descuento y sueldo neto que recibe el trabajador dado
        su sueldo.
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Sueldo"
          value={sueldo}
          onChangeText={setSueldo}
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
      {sueldoNeto !== '' && (
        <Text style={styles.resultText}>Sueldo Neto: ${sueldoNeto}</Text>
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

export default Ejercicio2;

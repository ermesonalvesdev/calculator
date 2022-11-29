import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App () {

  const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '+/-', '=']

  const [current, setCurrent] = useState('');
  const [last, setLast] = useState('');

  
  function calculator(){
    const splitNumbers = current.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const setLast = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setCurrent((fistNumber + setLast).toString())
        return
      case '-': 
        setCurrent((fistNumber - setLast).toString())
        return
      case '*':
        setCurrent((fistNumber * setLast).toString())
        return
      case '/': 
        setCurrent((fistNumber / setLast).toString())
        return
    }
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
      setCurrent(current + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrent(current.substring(0, (current.length -1)))
        return
      case 'AC':
        setLast("")
        setCurrent("")
        return
      case '=':
        setLast(current + " = ")
        calculator()
        return
      case '+/-':
        return
    }

    setCurrent(current + buttonPressed)
  }

    return (
      <View style={styles.container}>
        
        <View style={styles.screen}>
          <Text style={styles.history}> {last} </Text>
          <Text style={styles.result}> {current} </Text>
        </View>
  
        <View style={styles.box}>
        {buttons.map((button) => 
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.btn}>
          <Text style={styles.textBtn}>{button}</Text>
        </TouchableOpacity>
        )}
        </View>

        <StatusBar style="light" />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  screen: {
    height: 200,
    width: '90%',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  history: {
    alignSelf: 'flex-end',
    fontSize: 22,
    color: '#FFD'
  },
  result: {
    textAlign: 'right', 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    fontSize: 60,
    color: '#FFD',
    margin: 10,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    backgroundColor: '#f69906',
    width: 90,
    height: 90,
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5
  },
  textBtn: {
    color: '#FFD',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
//color: #f69906 #FFD
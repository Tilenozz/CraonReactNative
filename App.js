import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import IncrementButton from './src/component/IncrementButton'
import DecrementButton from './src/component/DecrementButton'
import ResetButton from './src/component/ResetButton'
import CurrentValue from './src/component/CurrentValue'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      color: 'white'
    };
  }

  componentDidMount = () => {
    // Appena il componente viene compilato parte la funzione di controllo del valore
    // per assegnargli il colore iniziale
    this.colorCheck()
  };


  colorCheck = () => {
    // Funzione di assegnazione colore
    if (this.state.value == 0) {
      this.setState({ color: 'black' })
    }
    else if (this.state.value % 2 == 0) {
      this.setState({ color: 'red' })
    } else {
      this.setState({ color: 'green' })
    }
  };


  incrementFunction = () => {
    // Funzione di incremento del valore e assegnazione colore
    this.setState({ value: this.state.value + 1 },
      () => {                        //callback
        this.colorCheck() // Funzione di controllo e assegnazione Colore
      })

  }
  decrementFunction = () => {
    // Funzione di decremento del valore , con controllo valori negativi e assegnazione colore
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 },
        () => {                        //callback
          this.colorCheck() // Funzione di controllo e assegnazione Colore
        })


    } else {
      Alert.alert(
        "Errore",
        "Il valore non può essere negativo",
        [
          // {
          //   text: "Cancella",
          //   onPress: () => console.log("Cancel Pressed"),
          //   style: "cancel"
          // },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }

  }
  resetFunction = () => {
    // Funzione di reset del valore e assegnazione colore
    this.setState({ value: 0 },
      () => {                        //callback
        this.colorCheck() // Funzione di controllo e assegnazione Colore
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <CurrentValue color={this.state.color}>{this.state.value}</CurrentValue>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 30 }}>
          <IncrementButton onPress={() => this.incrementFunction()} />
          <DecrementButton onPress={() => this.decrementFunction()} />
          <ResetButton onPress={() => this.resetFunction()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7fffd4',
    justifyContent: "center",
  },

})
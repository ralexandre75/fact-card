import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends React.Component {
  componentWillMount(){
    this.position = new Animated.ValueXY(0,0);
    Animated.spring(this.position, {
      toValue: { x:200, y:300 }
    }).start();
    /* Animated.spring(this.position, {
      toValue: { x: 200, y: 300 }
    }).start(); */
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.square} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  }
});

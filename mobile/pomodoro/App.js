import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Clock from "./components/Clock"
import Controllers from './components/Controllers'

export default function App() {
  const [paused, setPaused] = useState(true)
  const [initialMinutes, setInitialMinutes] = useState(null)
  const [restart, setRestart] = useState(false)
  return (
    <View style={styles.container}>
      <Clock paused={paused} restart={restart} changeRestart={setRestart}/>
      <Controllers paused={paused} changePaused={setPaused} changeRestart={setRestart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fc0f03",
    paddingVertical: 50
  }
});

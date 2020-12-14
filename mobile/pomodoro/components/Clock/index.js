import React, {useRef, useEffect, useState} from "react"
import {View, Text, StyleSheet, Animated} from 'react-native'
import timer from "react-native-timer"
import {styles, animationClock} from "./styles"

const Clock = (props) => {
  const [working, setWorking] = useState(true)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const borderWidth = useRef(new Animated.Value(0)).current

  styles.container.borderWidth = borderWidth
  useEffect(() => {
   animationClock(borderWidth).start()
   if(props.restart){
      setMinutes(25)
      setSeconds(0)
      props.changeRestart(false)
  }
  }, [borderWidth, props])

  if(!props.paused){
      timer.setInterval("clock", () => {
      if(minutes === 0 && seconds === 0){
       setWorking(!working)
       working === true ? setMinutes(25):setMinutes(5)
      }
      else if(seconds === 0){
       setSeconds(59)
       setMinutes(minutes-1)
      }
      else{
       setSeconds(seconds-1)
      }
    }, 1000)
  }
  
  return(
    <Animated.View style={StyleSheet.compose(styles.container, {borderWidth})}>
      <Text style={styles.clock}>{minutes.toString().length === 2?(minutes):("0"+minutes)}:{
        seconds.toString().length === 2?(seconds):("0"+seconds)
      }</Text>
    </Animated.View>
  )
}

export default Clock
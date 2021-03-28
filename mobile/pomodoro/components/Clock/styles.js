import React, {useRef, useEffect} from "react"
import {StyleSheet, Animated} from "react-native"

export const animationClock = (borderWidth) => {
    return Animated.loop(Animated.timing(
      borderWidth,
      {
        toValue: 7,
        duration: 3000
      }
    )
    )
}

export const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    borderRadius: 100,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 5
  },
  clock: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 30,
    position: "absolute"    
  }
})
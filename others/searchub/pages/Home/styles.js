import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000"
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 50
  },
  input: {
    height: 34,
    padding: 4,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: "#fff",
    outlineWidth: 0,
    width: 178
  },
  icon: {
    backgroundColor: "#aaa",
    padding: 4,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  button: {
    marginTop: 20,
    borderRadius: 3
  },
  touchable: {
    paddingVertical: 8,
    paddingHorizontal: 68,
  },
  textButton: {
    color: "#fff"
  },
  copy: {
    color: "#fff",
    position: "absolute",
    bottom: 30
  }
})

export default styles
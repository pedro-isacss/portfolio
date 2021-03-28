import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 30
  },
  logoutBtn: {
    position: "absolute",
    top: 30,
    right: 20
  },
  profileContainer:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10
  },
  profileImg: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#bc1888"
  },
  profileName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10
  },
  profileUser: {
    color: "#aaa",
    fontSize: 12
  },
  profileBio: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  btnProfile: {
    backgroundColor: "#fff",
    borderRadius: 3
  },
  textBtnProfileTouchable: {
    height: 30,
    paddingHorizontal: 15,
    justifyContent: "center"
  },
  textBtnProfile: {
    color: "#fff"
  },
  btnTwitter: {
    backgroundColor: "#fff",
    marginLeft: 5,
    borderRadius: 3,
    padding: 3
  },
  repoContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#bc1888",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 3,
    width: 230
  },
  repoName: {
    color: "#fff"
  },
  starContainer: {
    flexDirection: "row"
  },
  starText: {
    color: "#fff",
    marginLeft: 5
  }
})

export default styles
import { StyleSheet } from "react-native";

const onBordingStyle = StyleSheet.create({
  container: {
    paddingTop: 33,
    flex: 1,
    backgroundColor: "#fff",
  },
  navbarStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  navbarTxtStyle: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Arial",
  },
  gradientAndBtnStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 35,
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: -90,
    marginRight: 40,
  },
  arrowImage: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
});

export default onBordingStyle;

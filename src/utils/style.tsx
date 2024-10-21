import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    padding: 20,
    borderColor: "black",
    borderRadius: 10,
    elevation: 5,
    textAlign: "center",
  },
  container: {
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 200,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  heading: {
    fontSize: 50,
    fontWeight: "800",
  },
  subHeadingStyle: {
    fontFamily: "Arial",
    fontSize: 18,
    color: "gray",
    fontStyle: "italic",
  },
  buttonStyle: {
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styles;

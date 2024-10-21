import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../utils/style";

const Cards = () => {
  const userName = "WAQAS RAJPOOT";
  const btnTxt = "Contact Me";
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../assets/theManager.jpg")}
      />
      <Text style={styles.heading}>The Manager</Text>
      <Text style={styles.subHeadingStyle}>" {userName} "</Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>{btnTxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cards;

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const image = { uri: "https://reactjs.org/logo-og.png" };

function GradientExample() {
  return (
    <View styles={styles.container}>
      <ImageBackground
        source={require("./assets/1.jpg")}
        style={styles.imgBackground}
      >
        <LinearGradient
          colors={["#09203f", "#537895"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
          <Text style={styles.text}>Linear Gradient</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default function App() {
  let abc;
  console.log("App Executed");
  //abc.toString();
  return (
    <ImageBackground
      source={require("./assets/1.jpg")}
      //source={image}
      style={styles.imgBackground}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["#09203f", "#537895"]}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <Text style={styles.text}>Linear Gradient</Text>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});

import React from "react";
import { View, Image, StyleSheet } from "react-native";
import config from "../../../config";

const iconBar = ({ sourceHeart }) => {
  return (
    <View style={styles.iconBar}>
      <Image style={styles.icon} source={sourceHeart} />
      <Image style={styles.icon} source={config.icons.comment} />
      <Image style={styles.icon} source={config.icons.send} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBar: {
    height: 50,
    width: "100%",
    flexDirection: "row"
  },
  icon: {
    width: 40,
    height: 40,
    margin: 7
  }
});

export default iconBar;

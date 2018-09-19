import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";

const likesCount = ({ likes }) => {
  return (
    <View style={styles.commentBar}>
      <Text style={styles.likesText}>{likes} likes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentBar: {
    width: "100%"
  },
  likesText: {
    color: "#000",
    fontWeight: "bold",
    marginLeft: 15
  }
});

likesCount.propTypes = {
  likes: PropTypes.number.isRequired
};

export default likesCount;

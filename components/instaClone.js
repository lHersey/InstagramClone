import React, { Component } from "react";
import Post from "./presentation/Post";
import { StyleSheet, View, Text } from "react-native";
import config from "../config";

class instaClone extends Component {
  state = {
    liked: false
  };

  postPhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCCxIriso4TVdSGS-imbyWoJy5ViPkjM-jTJQvXnN003M6qu9";
  profilePhoto =
    "https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg";

  handleLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  };

  render() {
    const sourceHeart = this.state.liked
      ? config.icons.heartLiked
      : config.icons.heart;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Instagram</Text>
        </View>
        <Post
          sourceHeart={sourceHeart}
          handleLike={this.handleLike}
          profilePhoto={this.profilePhoto}
          postPhoto={this.postPhoto}
          likes={45}
          name="Scarllet Johanson"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 15
  }
});

export default instaClone;

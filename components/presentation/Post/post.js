import React from "react";
import PropTypes from "prop-types";
import PostPhoto from "./postPhoto";
import IconBar from "./iconBar";
import LikesCount from "./likesCount";
import UserBar from "./userBar";

const post = ({
  name,
  profilePhoto,
  postPhoto,
  handleLike,
  sourceHeart,
  likes
}) => {
  return (
    <React.Fragment>
      <UserBar name={name} profilePhoto={profilePhoto} />
      <PostPhoto postPhoto={postPhoto} handleLike={handleLike} />
      <IconBar sourceHeart={sourceHeart} />
      <LikesCount likes={likes} />
    </React.Fragment>
  );
};

post.propTypes = {
  name: PropTypes.string.isRequired,
  profilePhoto: PropTypes.string.isRequired,
  postPhoto: PropTypes.string.isRequired,
  sourceHeart: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  handleLike: PropTypes.func.isRequired
};

export default post;

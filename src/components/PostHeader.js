import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { name, time, avatar } = props;
  return (
    <div className="post-header">
      <img src={avatar} alt="Avatar" />
      <p className="name">{name}</p>
      <p className="time">{time}</p>
    </div>
  );
};

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PostHeader;

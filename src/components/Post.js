import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = (props) => {
  const { data } = props;
  return (
    <div className="post">
      <PostHeader name={data.name} time={data.time} avatar={data.avatar} />
      <div className="post-text">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;

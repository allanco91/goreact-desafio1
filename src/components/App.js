import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'https://avatars3.githubusercontent.com/u/25056167?s=460&v=4',
        name: 'Allan Caetano',
        time: 'há 5 min',
        content:
          'Olá sou o Allan, texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post ',
      },
      {
        id: 2,
        avatar: 'img/deadpool.jpg',
        name: 'Deadpool',
        time: 'há 14 min',
        content:
          'Olá sou o deadpool, texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post texto do post ',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="content">
        <Header />
        {posts && posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    );
  }
}

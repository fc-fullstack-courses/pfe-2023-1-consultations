import React, { Component } from 'react';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [
        {
          id: 1,
          title: 'Best video ever',
          views: 1513213,
          likes: 12321,
          dislikes: null,
        },
        {
          id: 2,
          title: 'Mid video',
          views: 4004,
          likes: 42,
          dislikes: null,
        },
        {
          id: 3,
          title: 'Who filmed this monstrosity',
          views: 452545,
          likes: 0,
          dislikes: 15257,
        },
      ],
    };
  }

  mapVideo = (video) => (
    <article key={video.id}>
      <h2>{video.title}</h2>
      <p>{video.views} views</p>
      <div>
        <button>{video.likes} Likes</button>
        <button>
          {video.dislikes !== null ? video.dislikes : 0} Dislikes
        </button>
      </div>
    </article>
  )

  render() {
    const { videos } = this.state;

    const videoElems = videos.map(this.mapVideo);

    return <div>
      {videoElems}
    </div>;
  }
}

export default VideoList;

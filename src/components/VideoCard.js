import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img alt="videos thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({adProps}) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={adProps}/>
    </div>
  );
};
export default VideoCard;

import React from "react";
import {useNavigate} from "react-router-dom";
import { formatAgo } from "../util/date";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function VideoCard({video}) {
  const navigate = useNavigate();
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  // if (typeof(video.id) !== 'string' && video.id.kind === 'youtube#channel')
  //   return;
  const videoId = typeof(video.id) === 'string' ? video.id : video.id.videoId;
  return (
    <Card 
    onClick={() => {
      navigate(`/videos/watch/${videoId}`, {state: {video} })}}
    >
      <CardContent>
        <img src={thumbnails.medium.url} alt={title} />
        <div>
          <Typography sx={{fontSize: 16, fontWeight: 'bold'}}>{title}</Typography>
          <Typography>{channelTitle}</Typography>
          <Typography>{formatAgo(publishedAt, 'ko')}</Typography>
          {/* <p>{title}</p>
          <p>{channelTitle}</p>
          <p>{formatAgo(publishedAt, 'ko')}</p> */}
        </div>
      </CardContent>
    </Card>
  )
}
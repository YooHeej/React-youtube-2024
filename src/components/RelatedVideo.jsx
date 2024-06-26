import React from "react";
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import Stack from '@mui/material/Stack';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SmallVideoCard from "./SmallVideoCard";
import { useRelatedVideo } from "../api/youtube";


export default function RelatedVideo({ id, name }) {
  const {isLoading, error, videos} = useRelatedVideo(id);
  console.log(videos);
  // const uri = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=25&part=snippet&channelId=${id}`;
  // const {isLoading, error, data: videos} = useQuery({
  //   queryKey: ['relatedVideo', id],
  //   queryFn: async () => {
  //     return axios
  //               .get('/data/searchChannel.json')
  //               // .get(uri)
  //               .then(res => res.data.items);
  //   },
  //   staleTime: 1000 * 60 * 1,         // 1분
  // });

  return(
    <>
      {isLoading && <p><HourglassTopIcon /> Loading...</p>}
      {error && <p><WarningAmberIcon /> Something is wrong !</p>}
      {videos && (
        <Stack direction={'column'} spacing={1} sx={{texAlign: 'center'}}>
          <h4>이 채널의 다른 영상들</h4>
          {videos.map(video => (<SmallVideoCard video={video} />))}
        </Stack>
      )}
    </>
  )
}
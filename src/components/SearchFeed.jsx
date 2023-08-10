import React , { useState , useEffect} from 'react';
import { Box , Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';


const SearchFeed = () => {


  
  const [videos, setVideos] = useState([]);

  useEffect(() => { 
    fetchFromApi(`search?part=snippet&q=`)
      .then((data) => setVideos(data.items))
  }, []);

  return (

      <Box p={2} sx={{overflowY: 'auto', height: '90vh',flex: 2}} >
        <Typography variant="h4" fontweight="bold" mb={2} sx={{color:'white'}}>
            Search results for: <span style={{color: '#F31503'}}>
            videos
          </span>
        </Typography>

        <Videos videos={videos} />

      </Box>
      
  );
}

export default SearchFeed
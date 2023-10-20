import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

   const renderGalleryData = () =>(
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
            <Card>
              <CardMedia
                component="img"
                height="140"
                alt={item.title}
                src={item.thumbnailUrl} // Assuming 'thumbnailUrl' contains the image URL
              />
              <CardContent>
                <h2>{item.title}</h2>
                <p>{item.id}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
   )
   const renderLoaderSpinner = () =>(
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex',flexDirection:"row",justifyContent:'center',alignItems:"center" ,height:"90vh" }}>
          <CircularProgress  color="inherit" size={40} disableShrink/>
        </Box>
      </Grid>
    </Grid>
   )

  return (
    <Container>
      {
        isLoading ? renderLoaderSpinner() : renderGalleryData()
      }
    </Container>
  );
};

export default Gallery;

import React, { useState } from 'react';
import { Container, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, 
  Typography, Avatar, Collapse, Grid,TablePagination } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import data from './Data.json'
import '../css/Cs.css'

// images from courses
import MathsImg from '../images/courses/maths1.jpeg';
import ChemistryImg from '../images/courses/chemistry.webp';
import PhysicsImg from '../images/courses/cs.webp';
import StatImg from '../images/courses/statistics.jpeg';

const Cs = () => {
  const [expanded, setExpanded] = useState(false);
  const [search,setSearch] = useState('')
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
 
  const filteredData = data.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.title.toLowerCase().includes(search.toLowerCase()) 
);
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};
const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  return (
    <Container>
        <TextField
        style={{width:"100%"}}
        label="Search Courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
         
      <Grid container spacing={2} >
        {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((course,index)=> 
        (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: '100%'}}>
              <CardHeader 
              style={{height:"100px"}}
                avatar={
                  <Avatar style={{fontSize:11}} sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {course.name}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings" style={{margin:"15px"}}>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={course.name}
                subheader={course.title}
              />
              <CardMedia objectFit="contain"
                style={{padding:10}}
                component="img"
                height="200"
                image={course.img}
                alt={course.name}
                className='image-card'
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {course.desc}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  aria-label="show more"
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    {course.desc}
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        )
        )}
      </Grid>
      <Grid direction="row" justifyContent='center'>
      <TablePagination
        rowsPerPageOptions={[6, 12, 18]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Grid>
    </Container>
  );
};

export default Cs;

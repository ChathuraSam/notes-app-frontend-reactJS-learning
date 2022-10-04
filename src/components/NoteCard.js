import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function NoteCard({ title, description }) {
  return (
    <Card sx={{ minWidth: 275, m:2 }} variant="outlined">
      <CardContent>
        
        <Typography variant="h5" component="div">
          {title}
        </Typography>
       
        <Typography variant="body2">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" startIcon={<DeleteIcon/>}>
  Delete
</Button>
      </CardActions>
    </Card>
  );
}

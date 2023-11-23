import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" size='small' sx={{bgcolor: 'red'}}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" size='medium'>
        <EditIcon />
      </Fab>
      <Fab variant="extended" size='large'>
        <NavigationIcon sx={{ mr: 1 }} />
        <DeleteIcon sx={{color:'green'}} />
        <AccessAlarmIcon/>
        <AirplanemodeActiveIcon/>
        Navigate
      </Fab>
      <Fab  aria-label="like" sx={{color: 'red', bgcolor: 'yellow'}}>
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
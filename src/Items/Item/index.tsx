import React from 'react';
import { Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export type ItemProp = {
  name: string;
  description: string;
};

// TODO: The only reason for manage these if's is because the Icon.
// So change that icon for an image, and the component will be simplified
// To avoid the choose of these images in this momement, I will let this ifs
export function Item({ name, description }: ItemProp) {
  if (name === 'Hotels')
    return (
      <>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ApartmentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={description} />
        </ListItem>
      </>
    );
  if (name === 'Tours')
    return (
      <>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={description} />
        </ListItem>
      </>
    );
  if (name === 'Flights')
    return (
      <>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AirplanemodeActiveIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={description} />
        </ListItem>
      </>
    );
  return <></>;
}

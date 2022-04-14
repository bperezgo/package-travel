import React from 'react';
import { Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { deepPurple } from '@mui/material/colors';

export type ItemProp = {
  id: string;
  name: string;
  description: string;
  onClick: (id: string) => void;
  selected: boolean;
};

export function Item({ id, name, description, onClick, selected }: ItemProp) {
  return (
    <>
      <ListItem onClick={() => onClick(id)}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={description} />
      </ListItem>
    </>
  );
}

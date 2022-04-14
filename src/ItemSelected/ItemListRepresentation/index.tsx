import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IItemSelected } from '../model';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export function ItemListRepresentation({ description, items }: IItemSelected) {
  return (
    <AccordionDetails>
      <Typography>
        {description}{' '}
        {items.map((item, idx) => (
          <p key={idx}>{item.name}</p>
        ))}
      </Typography>
    </AccordionDetails>
  );
}

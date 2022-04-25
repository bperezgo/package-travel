import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { IItemSelected } from '../model';
import { Accordion } from '../Accordion';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export function ItemListRepresentation({ description, items }: IItemSelected) {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<string>('');
  const onClickHandler = (id: string) => {
    if (id === expanded) {
      return setExpanded('');
    }
    setExpanded(id);
  };
  return (
    <AccordionDetails>
      <div className="Accordion-container">
        {items.map((item, key) => (
          <Accordion
            key={key}
            expanded={expanded}
            setExpanded={onClickHandler}
            {...item}
          />
        ))}
      </div>
    </AccordionDetails>
  );
}

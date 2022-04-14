import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { ItemSummary } from './ItemSummary';
import { ItemListRepresentation } from './ItemListRepresentation';
import { RootState } from '../store';
import { fetchItemsFortheItemSelected } from './useCases';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

export function ItemSelected() {
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const itemSelected = useSelector((state: RootState) => state.itemSelected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemSelected.itemType) {
      dispatch(fetchItemsFortheItemSelected(itemSelected.itemType));
    }
  }, [itemSelected.itemType]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  if (itemSelected.id === '' || itemSelected.itemType === '') {
    return <div></div>;
  }

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ItemSummary {...itemSelected} />
        <ItemListRepresentation {...itemSelected} />
      </Accordion>
    </div>
  );
}

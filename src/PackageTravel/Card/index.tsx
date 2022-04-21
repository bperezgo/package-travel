import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { formatPrice } from '../../shared/utils';

type CustomCardProps = {
  id: string;
  type: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  onClick: (id: string) => void;
};

// This kind of message can come with configuration, thinking in internationalization
const removeMessage = 'Remove';

export function CustomCard({
  id,
  description,
  type,
  name,
  price,
  currency,
  onClick,
}: CustomCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {type}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">{formatPrice(price, currency)}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClick(id)}>
          {removeMessage}
        </Button>
      </CardActions>
    </Card>
  );
}

import {useTranslation} from 'react-i18next';
import {useSnackbar} from 'notistack';
import {format} from 'date-fns';

import {
  Badge,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';

import {ApiProduct} from '~/api-client/types';

//
//

export const ProductsTable = ({data}: {data?: ApiProduct[]; isLoading: boolean}) => {
  //
  //

  return (
    <Stack gap={2} direction="column">
      {data?.map(row => (
        <Card key={row.productId}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={row.image ?? '/product.jpg'}
              alt={row.productId ?? 'image'}
            />
            <CardContent>
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography gutterBottom variant="body1" component="div">
                  {row.title.en}
                </Typography>
                {row.isActive && <Chip size="small" label="Actived" color="primary" />}
              </Stack>
              <Typography gutterBottom variant="h6" component="div">
                ${row.price}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Created: {format(new Date(row.createdAt), 'yyyy-MM-dd HH:mm')}
              </Typography>
              {row.updatedAt && (
                <Typography gutterBottom variant="body2" component="div">
                  Updated: {format(new Date(row.updatedAt), 'yyyy-MM-dd HH:mm')}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
};

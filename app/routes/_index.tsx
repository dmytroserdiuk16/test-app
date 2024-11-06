import {useTranslation} from 'react-i18next';
import type {MetaFunction} from '@remix-run/node';
import {ClientLoaderFunctionArgs} from '@remix-run/react';

import {Grid2, Typography} from '@mui/material';

import {useQueryProfile} from '~/services/auth';

import {AppLink} from '~/global/components/app-link';

import {ApiResponse, ApiUser} from '~/api-client/types';
import {Language} from '~/localization/resource';

//
//

export const meta: MetaFunction = () => [{title: 'Remix App'}];

//
//
export const clientLoader = async ({params}: ClientLoaderFunctionArgs) => {
  const lang = (params?.lang as Language) || 'en';

  return {lang, dir: lang === 'ar' ? 'rtl' : 'ltr'};
};

clientLoader.hydrate = true;

export default function Index() {
  const {t} = useTranslation();
  const {data} = useQueryProfile({enabled: !!window.localStorage.getItem('_at')});

  return (
    <Grid2
      container
      direction="column"
      spacing={6}
      alignContent="center"
      alignItems="center"
      mt="15%"
    >
      <Typography variant="h3" align="center" sx={{fontWeight: 500}}>
        {t('hello')}
      </Typography>

      <AppLink
        to={(data as unknown as ApiResponse<ApiUser>)?.result?.userId ? '/products' : '/sign-in'}
      >
        <Typography variant="h5">Get Started</Typography>
      </AppLink>
    </Grid2>
  );
}

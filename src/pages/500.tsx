// pages/500.tsx
import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import Link from 'next/link';
import { mainRoutes } from '@/routes/routes';

const ServerError: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h1" color="error" sx={{ fontSize: '6rem' }}>
          500
        </Typography>
        <Typography variant="h4" color="textSecondary" sx={{ mb: 4 }}>
          Error del servidor
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Ocurrió un error interno del servidor. Intenta nuevamente más tarde.
        </Typography>
        <Link href={mainRoutes.home} passHref>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Ir a la página de inicio
          </Button>
        </Link>
      </Container>
    </Grid>
  );
};

export default ServerError;

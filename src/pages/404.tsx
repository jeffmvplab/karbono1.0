// pages/404.tsx
import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import Link from 'next/link';
import { mainRoutes } from '@/routes/routes';

const NotFoundPage: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h1" color="primary" sx={{ fontSize: '6rem' }}>
          404
        </Typography>
        <Typography variant="h4" color="textSecondary" sx={{ mb: 4 }}>
          Página no encontrada
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          La página que estás buscando no existe.
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

export default NotFoundPage;

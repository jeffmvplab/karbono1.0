// @mui
import { bgGradient } from '@/styles/cssStyles';
import { Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
// utils


// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
}));

export const StyledSection = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const StyledSectionBg = styled(Box)(({ theme }) => ({
  ...bgGradient({
    // color: alpha('#F1F5F54B', theme.palette.mode === 'light' ? 0.9 : 0.94),
    color:'transparent',
    imgUrl: '/illustrations/sign-up.png',
  }),
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: -1,
  width: '75%',
  height: '100%',
  position: 'absolute',
  transform: 'scaleX(-1)',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '0vh',
  justifyContent: 'center',
  padding: theme.spacing(10, 2),
  [theme.breakpoints.up('md')]: {
    flexShrink: 0,
    padding: theme.spacing(0, 8, 0, 8),
  },
}));

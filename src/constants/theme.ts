import { createTheme } from '@mui/material/styles';


export const colorsKarbono = {
  primary: '#2FC5C6',//'#08A2B7', // verde // '#00393F',
  text: '#111000', // verde oscuro
  secundary: '#372FC6',
  secundary2: '#D1DCFA',
  secundary3: '#DDFDFA', // verde claro
  color1gradient: 'rgba(221,252,250,1)',
  buttons: '#00393F',
  content: '#F6F6F6',
  grey: '#A5A7AA',
  errorMssg: '#FAE2DD',
  okMssg: '#CEFAD4',
  warningMssg: '#eee8aa',
  background: '#CFD1D2',
  leftMenu: '#373D43',
  error: '#921C34',
  OK: '#066454',
  // warning: 'red',
  warning: '#daa520',
  gradient: 'linear-gradient(90deg, rgba(221,252,250,1) 0%, rgba(217,216,246,1) 35%, rgba(184,184,236,1) 100%)',
  appbar: 'white',
  companyCard: '#EBEDF1',
  filtrePrimary: 'invert(18%) sepia(28%) saturate(2069%) hue-rotate(144deg) brightness(92%) contrast(106%)',
  filtreGray: 'invert(70%) sepia(9%) saturate(96%) hue-rotate(177deg) brightness(95%) contrast(87%)',
  filtreIconsGreen: 'invert(10%) sepia(20%) saturate(477%) hue-rotate(131deg) brightness(91%) contrast(86%)',
  filtreWhite: 'invert(100%) sepia(100%) saturate(1%) hue-rotate(343deg) brightness(102%) contrast(101%)',
  grey2: '#ECECEC',

}

const fontFamily1 = 'Raleway';

/*
Se debe declarar esta variable aqui para poder realizar el responsive de las pantallas ultra grandes
Para mas detalles ver el siguiente link:  https://mui.com/material-ui/customization/breakpoints/
*/
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colorsKarbono.primary
    },
    secondary: {
      main: colorsKarbono.secundary
    },
    text: {
      primary: '#3f444c',
      secondary: 'gray',
      disabled: '#CFD1D2',
    },
    info: {
      main: '#A5A7AA'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1600,
    },
  },
  /*
  Enciam de este comentario se agrega el sigueinte breakpoint, el cual sera usado para realizar el diseno de 
  pantallas extra largas con resolucion objetivo de 1920 x 1080
  Para mas detalles ver el siguiente link:  https://mui.com/material-ui/customization/breakpoints/
  */

  typography: {
    fontFamily: [fontFamily1, 'CCBGradual'].join(','),

    allVariants: {
      textTransform: 'none',
      fontSize: 16,
      // color: colorsInfostore.text,
    },
    h1: {                        // Titlulo superior
      textTransform: 'none',
      fontSize: 48,
      fontWeight: 'bold'
    },
    h2: {                        // 2do Titlulo (headers)
      textTransform: 'none',
      fontSize: 36,
      fontWeight: 'bold'
    },
    h3: {
      textTransform: 'none',      // 3er Titlulo 
      fontSize: 20,
      fontWeight: 'bold'
    },
    h4: {
      textTransform: 'none',      // Parrafos, botones
      fontSize: 16,
      color: '#3f444c',

    },
    h5: {
      textTransform: 'none',      // Parrafos
      fontSize: 14,

    },
    h6: {
      textTransform: 'none',    // // Parrafos, botones (movil)
      fontSize: 12,

    },
    body1: {
      textTransform: 'none',
      fontSize: 16,
      // fontWeight:'bold'
    },
    button: {
      textTransform: 'none',
      fontSize: 16,
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: "black"
        },
      }
    },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     colorPrimary: colorsInfostore.text,
    //     checked: {
    //       color: colorsInfostore.text,
    //     }
    //   }
    // },

    MuiRadio: {

      styleOverrides: {
        colorPrimary: {
          '&$checked': {
            color: 'red'
          },
          checked: {
            color: colorsKarbono.text,
            backgroundColor: colorsKarbono.text,

          }

        }
      }
    }
  }


});
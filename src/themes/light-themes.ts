import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";


export const lightThemes = createTheme({
    palette:{
        mode: 'light',
        background: {
            default: '#fff'
        },
        primary:{
            main: '#2fc5c6'
        }, 
        secondary:{
            main: '#372fc6'
        },
        error:{
            main: '#fff'
        },
    },

    components: {
        MuiAppBar: {
            defaultProps:{},
            styleOverrides:{
                root:{
                    backgroundColor: '#fff',
                },

            }
        },
        MuiTextField:{
            defaultProps:{},
            styleOverrides:{
                root:{
                    backgroundColor:'#fff',
                    ':hover':'#000'
                    
                }
            }
        },
        MuiButton:{
            defaultProps:{},
            styleOverrides:{
                root:{
                    ':hover' : '#2FC5C6'
                }
            }
        }
        
        
    }
})
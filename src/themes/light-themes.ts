import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { loadDefaultErrorComponents } from "next/dist/server/load-components";


export const lightThemes = createTheme({
    palette:{
        mode: 'light',
        background: {
            default: grey[300]
        },
        primary:{
            main: '#2fc5c6'
        }, 
        secondary:{
            main: '#372fc6'
        },
        error:{
            main: '#1f1e2c'
        },
    },

    components: {
        MuiAppBar: {
            defaultProps:{},
            styleOverrides:{
                root:{
                    backgroundColor: '#fff'
                }
            }
        }
        
    }
})
import { colors, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { colorsKarbono } from "./colors";


export const lightThemes = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#fff'
        },
        primary: {
            main: '#2fc5c6'
        },
        secondary: {
            main: '#372fc6'
        },
        error: {
            main: '#fff'
        },
    },

    components: {

        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                },

            }
        },

        MuiTypography: {

            defaultProps: {
                fontFamily: ["Roboto", "Outfit,sans-serif",].join(",")
                //   variantMapping: {
                //     h1: 'h1',
                //     h2: 'h2',
                //     h3: 'div',
                //     h4: 'div',
                //     h5: 'div',
                //     h6: 'div',
                //     subtitle1: 'div',
                //     subtitle2: 'div',
                //     body1: 'div',
                //     body2: 'div'
                //   }
                // },
                // styleOverrides: {
                //   gutterBottom: {
                //     marginBottom: 4
                //   },
                //   paragraph: {
                //     fontSize: 17,
                //     lineHeight: 1.7
                //   }
            }
        },

        MuiFormLabel: {
            defaultProps: {
            },
            styleOverrides: {

                root: {
                    color:colorsKarbono.primary,
                    ':hover':colorsKarbono.secundary,
                }
            }
        },

        MuiInputBase: {
            defaultProps: {

            },
            styleOverrides: {
                root: {
                    fontFamily: "Outfit,sans-serif",
                }
            }
        },

        MuiTextField: {
            defaultProps: {
            },
            styleOverrides: {

                root: {
                    backgroundColor: '#fff',
                    ':hover': '#000'

                }
            }
        },

        MuiMenuItem: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    fontFamily: "Outfit,sans-serif",
                    display: 'block',
                    background: 'red'
                }
            },
        },

        MuiButton: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    fontFamily: "Outfit,sans-serif",
                    ':hover': '#2FC5C6'
                }
            }
        },

        // MuiDataGrid: {
        //     defaultProps: {},
        //     styleOverrides: {
        //         root: {
        //             fontFamily: "Outfit,sans-serif",
        //         }
        //     }
        // },

    }
})
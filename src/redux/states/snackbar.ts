import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface SnackbarState {
    message: string,
    open: boolean,
    alertColor?: AlertColor | undefined,
}



export const SnackbarInitialState: SnackbarState = {
    message: '',
    open: false,
    alertColor: 'info',
};



export const snackbarSlice = createSlice({
    name: 'snackbar_slice',
    initialState: SnackbarInitialState,
    reducers: {
        showSnackbar: (state: SnackbarState, { payload }: PayloadAction<SnackbarState>) => {
            console.log(payload);
            return {
                message: payload.message,
                alertColor: payload.alertColor,
                open: true,
            }
        },

        closeSnackbar: (state: SnackbarState) => {
            state.open = false;
        }
    }
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;

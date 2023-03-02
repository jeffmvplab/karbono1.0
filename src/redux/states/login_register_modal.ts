import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface LoginRegisterModalState {
    open?: boolean,
    lastUrl?: string
}



export const LoginRegisterModalInitialState: LoginRegisterModalState = {
    open: false,
};



export const loginRegisterModalSlice = createSlice({
    name: 'loginRegisterModal_slice',
    initialState: LoginRegisterModalInitialState,
    reducers: {
        showLoginRegisterModal: (state: LoginRegisterModalState, { payload }: PayloadAction<LoginRegisterModalState>) => {
            return {
                open: true,
                lastUrl: payload.lastUrl,
            }
        },

        closeLoginRegisterModal: (state: LoginRegisterModalState) => {
            state.open = false;
        }
    }
});

export const { showLoginRegisterModal, closeLoginRegisterModal } = loginRegisterModalSlice.actions;

export default loginRegisterModalSlice.reducer;

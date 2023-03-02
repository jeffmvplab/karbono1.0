import { configureStore } from '@reduxjs/toolkit';
import { AuthState, authSlice } from './states/auth';
import { cartSlice, CartState } from './states/cart';
import { companySelectSlice, CompanySelectState } from './states/company_select';
import { CountActionsUserState, countActionsUserSlice } from './states/count_actions_user';
import { SnackbarState, snackbarSlice } from './states/snackbar';
import { loginRegisterModalSlice, LoginRegisterModalState } from './states/login_register_modal';



export interface AppStore {
  auth: AuthState,
  cart: CartState,
  countActionsUser: CountActionsUserState,
  companySelect: CompanySelectState,
  snackbar: SnackbarState,
  loginRegisterModal: LoginRegisterModalState,
  // allowCookiesModal: 

}

export default configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    countActionsUser: countActionsUserSlice.reducer,
    companySelect: companySelectSlice.reducer,
    snackbar: snackbarSlice.reducer,
    loginRegisterModal: loginRegisterModalSlice.reducer,
  }
});


import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { UserUseCases } from '@/domain/usecases';
import { CookiesKeysEnum } from '@/utilities/enums/cookies_keys.enum';
import { StorageKeysEnum } from '@/utilities/enums';
import { IUser } from '@/domain/models/user.model';
import { useRouter } from 'next/router';
import { verumRoutes } from '../../web_services/verum/routes/verum_routes';

export interface AuthState {
  loading: boolean,
  userInfo: IUser | null,
  userToken: string | null,
  error: string | null,
  succes: boolean,

}

const localStorage = new LocalStorageProtocol();

export function getCartFormLocalStorage(): AuthState {
  const jwt = Cookies.get(CookiesKeysEnum.token);
  if (!jwt) return {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    succes: false,
  };
  const user = localStorage.get(StorageKeysEnum.user);
  return {
    loading: false,
    userInfo: user,
    userToken: null,
    error: null,
    succes: true,
  };
}


export const AuthInitialState: AuthState = getCartFormLocalStorage();



export const authSlice = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  reducers: {
    updateAvatar: (state: AuthState, { payload }: PayloadAction<string>) => {
      state.userInfo!.avatar = payload;
    },
  },
  extraReducers: (builder) => {
    // ---------Login-------------------------
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.succes = true // Login successful
      if (payload) {
        state.userInfo = payload;
      }
    })

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    })

    // -------- Register ----------------------------

    // builder.addCase(registerUser.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // builder.addCase(registerUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.succes = true // registration successful
    // })

    // builder.addCase(registerUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message as string;
    // })

    // --------------------Logout---------------------
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = null;
      state.error = null;
      state.succes = false;
      // navegar al inicio
      window.location.href = 'https://info-store.vercel.app';
    })
  },

});


export const {updateAvatar } = authSlice.actions;

export default authSlice.reducer;


export const loginUser = createAsyncThunk(
  'auth/login',
  // callback function
  async (toekMauc: string, { rejectWithValue }) => {
    const userUsecases = new UserUseCases();

    try {
      const authResp = await userUsecases.auth(toekMauc);
      console.log('user redux');
      console.log(authResp.user);
      localStorage.set(StorageKeysEnum.user, authResp.user);

      ///Guardar isAuth en los cookies///
      if (authResp.user) {
        Cookies.set(CookiesKeysEnum.token, authResp.jwt, { sameSite: 'Strict', secure: process.env.NODE_ENV === 'production' })
      }
      //  response.headers.set('cookies','true')
      ///////////////////////////////////////////

      return authResp.user;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
)

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.delete(StorageKeysEnum.user);
  Cookies.remove(CookiesKeysEnum.token);
  ///////////////////////////////////////////
  return null;
});

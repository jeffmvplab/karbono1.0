import { IAuthResponse } from '../../domain/models/auth_response.model';
import { userAdapter } from './user.adapater';

export const authResponseAdapter = (authResponse: any): IAuthResponse => ({
    jwt: authResponse.acess_token,
    user: userAdapter(authResponse.user),
});
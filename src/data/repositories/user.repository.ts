import { UnexpectedError } from '../../domain/errors';
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';
import { IUser } from '@/domain/models';
import { HttpStatusCode } from '@/protocols/http/http_utilities';
import { ApiUrlsEnum } from '@/utilities/enums';


export interface IUserRepository {
    login(email: string, password: string): Promise<IUser>;
    register(name: string, phone: string, email: string, password: string): Promise<any>;
}


export class UserRepository implements IUserRepository {

    private axiosHttpClient: AxiosHttpClient;

    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }
    /////////////////////////////////LOGIN////////////////////////////////////////////////
    async login(email: string, password: string,): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.login,
            method: 'post',
            body: {
                "email": email,
                "password": password
            },
        });

        if (axiosRequest.statusCode === HttpStatusCode.ok) {
            // const users = axiosRequest.body as User[];
            // const user: IUser = axiosRequest.body;
            // console.log(JSON.stringify(user));
            return axiosRequest.body;

        } else if (axiosRequest.statusCode === HttpStatusCode.created) {
            const user: IUser = axiosRequest.body;
            // console.log(JSON.stringify(user));
            return user;
        } else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
            return axiosRequest.statusCode;
        } else {
            return axiosRequest.statusCode;
        }

    }
    /////////////////////////////////REGISTER///////////////////////////////////////////////////
    async register(name: string, phone: string, email: string, password: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.register,
            method: 'post',
            body: {
                'name':name,
                'phone':phone,
                "email": email,
                "password": password
            },
        });

        if (axiosRequest.statusCode === HttpStatusCode.ok) {
            // const users = axiosRequest.body as User[];
            // const user: IUser = axiosRequest.body;
            // console.log(JSON.stringify(user));
            return axiosRequest.body;

        } else if (axiosRequest.statusCode === HttpStatusCode.created) {
            const user: IUser = axiosRequest.body;
            // console.log(JSON.stringify(user));
            return user;
        } else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
            return axiosRequest.statusCode;
        } else {
            return axiosRequest.statusCode;
        }

    }


}
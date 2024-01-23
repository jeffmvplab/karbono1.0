
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';
import { IUser } from '@/domain/models';
import { HttpStatusCode } from '@/protocols/http/http_utilities';
import { ApiUrlsEnum } from '@/utilities/enums';


export interface IUserRepository {
    login(email: string, password: string,entidad_de_salud: string[],central_de_mezclas:string): Promise<IUser>;
    register(  roles:string[],
        nombre_apellidos:string,
        primer_nombre: string, 
        primer_apellido: string, 
        registro_medico: string, 
        entidad_de_salud:string[],
        central_de_mezclas:string,
        phone: string, 
        email: string, 
        password: string,
        he_leido:boolean): Promise<any>;
}


export class UserRepository implements IUserRepository {

    private axiosHttpClient: AxiosHttpClient;

    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }
    /////////////////////////////////LOGIN////////////////////////////////////////////////
    async login(email: string, password: string,entidad_de_salud: string[],central_de_mezclas:string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.login,
            method: 'post',
            body:{
                "email": email,
                "password":password,
                "entidad_de_salud": entidad_de_salud,
                "central_de_mezclas": central_de_mezclas
              }
        });

        // if (axiosRequest.statusCode === HttpStatusCode.ok) {
        //     // const users = axiosRequest.body as User[];
        //     // const user: IUser = axiosRequest.body;
        //     // console.log(JSON.stringify(user));
        //     return axiosRequest.body;

        // } else if (axiosRequest.statusCode === HttpStatusCode.created) {
        //     const user: IUser = axiosRequest.body;
        //     // console.log(JSON.stringify(user));
        //     return user;
        // } else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
        //     return axiosRequest.statusCode;
        // } else {
        return axiosRequest;
        // }

    }
    /////////////////////////////////REGISTER///////////////////////////////////////////////////
    async register(

        roles:string[],
        nombre_apellidos:string,
        primer_nombre: string, 
        primer_apellido: string, 
        registro_medico: string, 
        entidad_de_salud:string[],
        central_de_mezclas:string,
        phone: string, 
        email: string, 
        password: string,
        he_leido:boolean
        ): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.register,
            method: 'post',
            body: {
                "nombre_apellidos":nombre_apellidos,
                "email": email,
                "telefono": phone,
                "password":password,
                "roles": roles,
                "registro_medico":registro_medico,
                "primer_nombre": primer_nombre,
                "primer_apellido": primer_apellido,
                "entidad_de_salud":entidad_de_salud,
                "central_de_mezclas":central_de_mezclas,
                "he_leido":  he_leido
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
        } else {
            return axiosRequest;
        }

    }


}
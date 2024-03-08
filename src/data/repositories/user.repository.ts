
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';
import { IUser } from '@/domain/models';
import { IUserEquipo } from '@/domain/models/equipo_user.model';
import { HttpStatusCode } from '@/protocols/http/http_utilities';
import { ApiUrlsEnum } from '@/utilities/enums';


export interface IUserRepository {
    login(email: string, password: string, entidad_de_salud: string[], central_de_mezclas: string): Promise<IUser>;

    register(roles: string[],
        nombre_apellidos: string,
        primer_nombre: string,
        primer_apellido: string,
        registro_medico: string,
        entidad_de_salud: string[],
        central_de_mezclas: string,
        phone: string,
        email: string,
        password: string,
        he_leido: boolean): Promise<any>;

    invitarUsuarios(
        roles: string,
        // central_de_mezclas: string,
        email: string,
        nombre_apellidos:string
    ): Promise<any>;

    aceptarInvitacion(token: string): Promise<any>;

    registerByInvitation(
        id: string,
        email: string,
        nombre_apellidos: string,
        telefono: string,
        password: string,
        registro_medico: string,
        primer_nombre: string,
        primer_apellido: string,
        entidad_de_salud: [string],
        he_leido: boolean,): Promise<any>;

    recuperarPassword(email: string): Promise<any>;
    verificarCodigoRecuperacion(email: string, verificationCode: string, password: string): Promise<any>;
    getUserByRol(rol: string): Promise<any>;

    getMe(): Promise<any>;
    upadateMe(user: any): Promise<any>;
    getMeGrup(): Promise<any>;
    upadateMeGrup(email: string, roles: string, group_admin: string): Promise<any>;

}


export class UserRepository implements IUserRepository {

    private axiosHttpClient: AxiosHttpClient;

    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }
    /////////////////////////////////LOGIN////////////////////////////////////////////////
    async login(email: string, password: string, entidad_de_salud: string[], central_de_mezclas: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.login,
            method: 'post',
            body: {
                "email": email,
                "password": password,
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

        roles: string[],
        nombre_apellidos: string,
        primer_nombre: string,
        primer_apellido: string,
        registro_medico: string,
        entidad_de_salud: string[],
        central_de_mezclas: string,
        phone: string,
        email: string,
        password: string,
        he_leido: boolean
    ): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.register,
            method: 'post',
            body: {
                "nombre_apellidos": nombre_apellidos,
                "email": email,
                "telefono": phone,
                "password": password,
                "roles": roles,
                "registro_medico": registro_medico,
                "primer_nombre": primer_nombre,
                "primer_apellido": primer_apellido,
                "entidad_de_salud": entidad_de_salud,
                "central_de_mezclas": central_de_mezclas,
                "he_leido": he_leido
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




    async invitarUsuarios(
        roles: string,
        // central_de_mezclas: string,
        email: string,
        nombre_apellidos:string
    ): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.invitarUsuarios,
            method: 'post',
            body: {
                "nombre_apellidos":nombre_apellidos,
                "email": email,
                // "central_de_mezclas": central_de_mezclas,
                "roles":[roles],
            },
        });

        return axiosRequest.body;
    }


    async aceptarInvitacion(token: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.aceptarInvitacion}/${token}`,
            method: 'get',
            body: {},
        });

        return axiosRequest.body;
    }

    async recuperarPassword(email: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.forgotPassword,
            method: 'post',
            body: {
                "email": email
            },
        });

        return axiosRequest.body;
    }

    async verificarCodigoRecuperacion(email: string, verificationCode: string, password: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.verifyCodeAndUpdatePassword,
            method: 'post',
            body: {
                "email": email,
                "verificationCode": verificationCode,
                "password": password
            },
        });

        return axiosRequest.body;
    }


    async registerByInvitation(
        id: string,
        email: string,
        nombre_apellidos: string,
        telefono: string,
        password: string,
        registro_medico: string,
        primer_nombre: string,
        primer_apellido: string,
        entidad_de_salud: [string],
        he_leido: boolean,
    ): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.registerByInvitation,
            method: 'post',
            body: {
                id: id,
                email: email,
                nombre_apellidos: nombre_apellidos,
                telefono: telefono,
                password: password,
                registro_medico: registro_medico,
                primer_nombre: primer_nombre,
                primer_apellido: primer_apellido,
                entidad_de_salud: [entidad_de_salud],
                he_leido: he_leido
            },
        });

        return axiosRequest.body;
    }

    async getUserByRol(rol: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.getUserByRol}/${rol}`,
            method: 'get',
            body: {},
        });

        return axiosRequest.body;
    }

    async getMe(): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getMe,
            method: 'get',
            body: {},
        });

        return axiosRequest.body;
    }

    async upadateMe(user: any): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getMe,
            method: 'patch',
            body: {
                "nombre_apellidos":user.nombre_apellidos,
                "email": user.email,
                "telefono": user.phone,
                // "password": user.password,
                "roles": user.roles,
                "registro_medico": user.registro_medico,
                "primer_nombre": user.primer_nombre,
                "primer_apellido": user.primer_apellido,
                "entidad_de_salud": user.entidad_de_salud,
                "central_de_mezclas": user.central_de_mezclas,
                "he_leido": user.he_leido
            },
        });

        return axiosRequest.body;
    }


    async getMeGrup(): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getMeGroup,
            method: 'get',
            body: {},
        });

        return axiosRequest.body;
    }

    async upadateMeGrup(email: string, roles: string, group_admin: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getMeGroup,
            method: 'patch',
            body: {
                email: email,
                roles: [roles],
                group_admin: group_admin
            }
        });

        return axiosRequest.body;
    }



}
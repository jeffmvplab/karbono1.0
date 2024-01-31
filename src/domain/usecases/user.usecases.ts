
import { UserRepository, IUserRepository } from '../../data/repositories/user.repository';

export interface IUserUseCase {
    login(email: string, password: string, entidad_de_salud: string[], central_de_mezclas: string): Promise<any>;
    register(
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
        he_leido: boolean): Promise<any>;

    invitarUsuarios(
        roles: string[],
        central_de_mezclas: string,
        email: string,
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
        he_leido: boolean,
    ): Promise<any>;

    recuperarPassword(email: string): Promise<any>;
    verificarCodigoRecuperacion(email: string,verificationCode:string,password:string): Promise<any>;
}


export class UserUseCases implements IUserUseCase {

    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    login(email: string, password: string, entidad_de_salud: string[], central_de_mezclas: string): Promise<any> {
        return this.userRepository.login(email, password, entidad_de_salud, central_de_mezclas);
    }

    register(
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
        he_leido: boolean): Promise<any> {

        return this.userRepository.register(
            roles,
            nombre_apellidos,
            primer_nombre,
            primer_apellido,
            registro_medico,
            entidad_de_salud,
            central_de_mezclas,
            phone,
            email,
            password,
            he_leido
        );
    }

    invitarUsuarios(
        roles: string[],
        central_de_mezclas: string,
        email: string,
    ): Promise<any> {
        return this.userRepository.invitarUsuarios(
            roles,
            central_de_mezclas,
            email,
        );
    };

    aceptarInvitacion(token: string): Promise<any> {
        return this.userRepository.aceptarInvitacion(token);
    };

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
        he_leido: boolean,): Promise<any> {
        return this.userRepository.registerByInvitation(
            id,
            email,
            nombre_apellidos,
            telefono,
            password,
            registro_medico,
            primer_nombre,
            primer_apellido,
            entidad_de_salud,
            he_leido,
        );
    };

    recuperarPassword(email: string): Promise<any>{
        return this.userRepository.recuperarPassword(email);
    };
    
    verificarCodigoRecuperacion(email: string,verificationCode:string,password:string): Promise<any>{
        return this.userRepository.verificarCodigoRecuperacion(email,verificationCode,password); 
    };
}


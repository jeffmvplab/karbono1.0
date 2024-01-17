
import { UserRepository, IUserRepository } from '../../data/repositories/user.repository';
import { IUser } from '../models/user.model';

export interface IUserUseCase {
    login(email: string, password: string,entidad_de_salud: string,central_de_mezclas:string): Promise<any>;
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
}


export class UserUseCases implements IUserUseCase {

    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    login(email: string, password: string,entidad_de_salud: string,central_de_mezclas:string): Promise<any> {
        return this.userRepository.login(email, password,entidad_de_salud,central_de_mezclas);
    }

    register(
        roles: string[],
        nombre_apellidos: string,
        primer_nombre: string,
        primer_apellido: string,
        registro_medico: string,
        entidad_de_salud: string[],
        central_de_mezclas:string,
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
}


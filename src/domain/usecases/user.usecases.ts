
import { UserRepository, IUserRepository } from '../../data/repositories/user.repository';
import { IUser } from '../models/user.model';

export interface IUserUseCase {
    login(email:string,password:string): Promise<any>;
    register(name:string,phone:string,email:string,password:string): Promise<any>;
}


export class UserUseCases implements IUserUseCase {
    
    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

   login(email:string,password:string): Promise<any> {
        return this.userRepository.login(email,password);
    }

    register(name:string,phone:string,email:string,password:string): Promise<any> {
        return this.userRepository.register(name,phone,email,password);
    }
}


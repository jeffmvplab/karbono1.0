
import { IPrescriptionsRepository, PrescriptionsRepository } from '@/data/repositories/prescriptions.repository';
import { UserRepository, IUserRepository } from '../../data/repositories/user.repository';
import { IPrescriptions } from '../models/prescriptions.model';
import { IUser } from '../models/user.model';

export interface IPrescriptionsUseCase {
    savePrescripcions(prescriptions: IPrescriptions): Promise<any>;
}


export class PrescriptionsUseCases implements IPrescriptionsUseCase {
    
    private prescriptionsRepository: IPrescriptionsRepository;

    constructor() {
        this.prescriptionsRepository = new PrescriptionsRepository();
    }

    savePrescripcions(prescriptions: IPrescriptions): Promise<any>{
        return this.prescriptionsRepository.savePrescripcions(prescriptions);
    }

}


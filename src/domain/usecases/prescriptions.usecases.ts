
import { IPrescriptionsRepository, PrescriptionsRepository } from '@/data/repositories/prescriptions.repository';
import { UserRepository, IUserRepository } from '../../data/repositories/user.repository';
import { IPrescriptions } from '../models/prescriptions.model';
import { IUser } from '../models/user.model';

export interface IPrescriptionsUseCase {
    savePrescripcions(prescriptions: IPrescriptions): Promise<any>;
    prescripcionsByNumber(number:string): Promise<any>;
    prescripcionsByName(name:string): Promise<any>;
    prescripcionsById(id:string): Promise<any>;
    prescripcionsByIps(ips:string): Promise<any>;
    prescripcionsAll(): Promise<any>;
}


export class PrescriptionsUseCases implements IPrescriptionsUseCase {
    
    private prescriptionsRepository: IPrescriptionsRepository;

    constructor() {
        this.prescriptionsRepository = new PrescriptionsRepository();
    }

    savePrescripcions(prescriptions: IPrescriptions): Promise<any>{
        return this.prescriptionsRepository.savePrescripcions(prescriptions);
    }
    
    prescripcionsAll(): Promise<any>{
        return this.prescriptionsRepository.getPrescripcionsAll();
    }

    prescripcionsByNumber(number:string): Promise<any>{
        return this.prescriptionsRepository.getPrescripcionsByNumber(number);
    }

    prescripcionsByName(name:string): Promise<any>{
        return this.prescriptionsRepository.getPrescripcionsByName(name);
    }

    prescripcionsById(id:string): Promise<any>{
        return this.prescriptionsRepository.getPrescripcionsById(id);
    }

    prescripcionsByIps(ips:string): Promise<any>{
        return this.prescriptionsRepository.getPrescripcionsByIps(ips);
    }

}


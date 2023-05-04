
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';
import { IUser } from '@/domain/models';
import { IPrescriptions } from '@/domain/models/prescriptions.model';
import { HttpStatusCode } from '@/protocols/http/http_utilities';
import { ApiUrlsEnum } from '@/utilities/enums';


export interface IPrescriptionsRepository {
    savePrescripcions(prescriptions: IPrescriptions): Promise<any>;
    getPrescripcionsByNumber(number:string): Promise<any>;
    getPrescripcionsByName(name:string): Promise<any>;
    getPrescripcionsById(id:string): Promise<any>;
    getPrescripcionsByIps(ips:string): Promise<any>;
    getPrescripcionsAll(limit:number): Promise<any>;
    updatePrescripcions(prescriptions: IPrescriptions,number:string): Promise<any>
}

export class PrescriptionsRepository implements IPrescriptionsRepository {

    private axiosHttpClient: AxiosHttpClient;

    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }
    /////////////////////////////////Guardar Prescripcion////////////////////////////////////////////////
    async savePrescripcions(prescriptions: IPrescriptions): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.savePrescriptions,
            method: 'post',
            body: {
                "no_orden":prescriptions.no_orden,
                "tipo_prescripcion":prescriptions.tipo_prescripcion,
                "fecha": prescriptions.fecha,
                "ips": prescriptions.ips,
                "no_identificacion": prescriptions.no_identificacion,
                "nombre_paciente": prescriptions.nombre_paciente,
                "servicio": prescriptions.servicio,
                "ubicacion": prescriptions.ubicacion,
                "cama": prescriptions.cama,
                "peso": prescriptions.peso,
                "tipo_edad": prescriptions.tipo_edad,
                "edad": prescriptions.edad,
                "volumen": prescriptions.volumen,
                "purga": prescriptions.purga,
                "tiempo_infusion": prescriptions.tiempo_infusion,
                "overfill": prescriptions.overfill,
                "filtro": prescriptions.filtro,
                "equipo_fotosensible": prescriptions.equipo_fotosensible,
                "tipo_paciente": prescriptions.tipo_paciente,
                "via_administracion": prescriptions.via_administracion,
                "diagnostico": prescriptions.diagnostico,
                "flujo_metabolico": prescriptions.flujo_metabolico,
                "aminoacidos": prescriptions.aminoacidos,
                "dextrosa": prescriptions.dextrosa,
                "req_dextrosa": '',
                "req_aminoacidos": prescriptions.req_aminoacidos,
                "lipidos": prescriptions.lipidos,
                "req_lipidos": prescriptions.req_lipidos,
                "omegaven": prescriptions.omegaven,
                "dipeptiven": prescriptions.dipeptiven,
                "sodio_total": prescriptions.sodio_total,
                "potasio_total": prescriptions.potasio_total,
                "fosfato": prescriptions.fosfato,
                "req_fosfato": prescriptions.req_fosfato,
                "calcio": prescriptions.calcio,
                "req_calcio": prescriptions.req_calcio,
                "magnesio": prescriptions.magnesio,
                "req_magnesio": prescriptions.req_magnesio,
                "elementos_traza": prescriptions.elementos_traza,
                "req_elementos_traza": prescriptions.req_elementos_traza,
                "vit_hidrosolubles": prescriptions.vit_hidrosolubles,
                "req_vit_hidrosolubles": prescriptions.req_vit_hidrosolubles,
                "req_vit_liposolubles": prescriptions.req_vit_liposolubles,
                "vit_C": prescriptions.vit_C,
                "acido_folico": prescriptions.acido_folico
            },
        });

        return axiosRequest;
        // if (axiosRequest.statusCode === HttpStatusCode.ok) {
        //     // const users = axiosRequest.body as User[];
        //     // const user: IUser = axiosRequest.body;
        //     // console.log(JSON.stringify(user));
        //     return axiosRequest.statusCode;

        // } else if (axiosRequest.statusCode === HttpStatusCode.created) {
        //     // console.log(JSON.stringify(user));
        //     return axiosRequest.statusCode;
        // } else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
        //     return axiosRequest;
        // }else if (axiosRequest.statusCode === HttpStatusCode.badRequest) {
        //     return axiosRequest;
        // } else {
        //     return axiosRequest;
        // }

    }
    /////////////////////////////////Get Prescripcion By Number////////////////////////////////////////////////
    async updatePrescripcions(prescriptions: IPrescriptions,number:string): Promise<any>
    {
        const axiosRequest = await this.axiosHttpClient.request({
            url:`${ ApiUrlsEnum.savePrescriptions}/${number}`,
            method: 'patch',
            body: {
                "no_orden":prescriptions.no_orden,
                "tipo_prescripcion":prescriptions.tipo_prescripcion,
                "fecha": prescriptions.fecha,
                "ips": prescriptions.ips,
                "no_identificacion": prescriptions.no_identificacion,
                "nombre_paciente": prescriptions.nombre_paciente,
                "servicio": prescriptions.servicio,
                "ubicacion": prescriptions.ubicacion,
                "cama": prescriptions.cama,
                "peso": prescriptions.peso,
                "tipo_edad": prescriptions.tipo_edad,
                "edad": prescriptions.edad,
                "volumen": prescriptions.volumen,
                "purga": prescriptions.purga,
                "tiempo_infusion": prescriptions.tiempo_infusion,
                "overfill": prescriptions.overfill,
                "filtro": prescriptions.filtro,
                "equipo_fotosensible": prescriptions.equipo_fotosensible,
                "tipo_paciente": prescriptions.tipo_paciente,
                "via_administracion": prescriptions.via_administracion,
                "diagnostico": prescriptions.diagnostico,
                "flujo_metabolico": prescriptions.flujo_metabolico,
                "aminoacidos": prescriptions.aminoacidos,
                "dextrosa": prescriptions.dextrosa,
                "req_dextrosa": '',
                "req_aminoacidos": prescriptions.req_aminoacidos,
                "lipidos": prescriptions.lipidos,
                "req_lipidos": prescriptions.req_lipidos,
                "omegaven": prescriptions.omegaven,
                "dipeptiven": prescriptions.dipeptiven,
                "sodio_total": prescriptions.sodio_total,
                "potasio_total": prescriptions.potasio_total,
                "fosfato": prescriptions.fosfato,
                "req_fosfato": prescriptions.req_fosfato,
                "calcio": prescriptions.calcio,
                "req_calcio": prescriptions.req_calcio,
                "magnesio": prescriptions.magnesio,
                "req_magnesio": prescriptions.req_magnesio,
                "elementos_traza": prescriptions.elementos_traza,
                "req_elementos_traza": prescriptions.req_elementos_traza,
                "vit_hidrosolubles": prescriptions.vit_hidrosolubles,
                "req_vit_hidrosolubles": prescriptions.req_vit_hidrosolubles,
                "req_vit_liposolubles": prescriptions.req_vit_liposolubles,
                "vit_C": prescriptions.vit_C,
                "acido_folico": prescriptions.acido_folico
            },
        });

     return axiosRequest;
}
/////////////////////////////////Get Predscripcion By Number////////////////////////////////////////////////
   async getPrescripcionsByNumber(number:string): Promise<any> {

    const axiosRequest = await this.axiosHttpClient.request({
        url: `${ApiUrlsEnum.getPrescriptionsByNumber}/${number}`,
        method: 'get',
        // body: {},
    });
    return axiosRequest;
}

 /////////////////////////////////Get Predscripcion By Name////////////////////////////////////////////////
 async getPrescripcionsAll(limit:number): Promise<any> {

    const axiosRequest = await this.axiosHttpClient.request({
        url: `${ApiUrlsEnum.getAllPrescriptions}?limit=${limit}`,
        method: 'get',
        // body: {
        //     "nombre_paciente": name,
        // },
    });
    return axiosRequest;
}

 /////////////////////////////////Get Predscripcion By Name////////////////////////////////////////////////
 async getPrescripcionsByName(name:string): Promise<any> {

    const axiosRequest = await this.axiosHttpClient.request({
        url: ApiUrlsEnum.getPrescriptionsByName,
        method: 'post',
        body: {
            "nombre_paciente": name,
        },
    });
    return axiosRequest;
}


 /////////////////////////////////Get Predscripcion By Id////////////////////////////////////////////////
 async getPrescripcionsById(id:string): Promise<any> {

    const axiosRequest = await this.axiosHttpClient.request({
        url: ApiUrlsEnum.getPrescriptionsById,
        method: 'post',
        body: {
            "no_identificacion":id,
        },
    });
    return axiosRequest;
}


 /////////////////////////////////Get Predscripcion By Ips////////////////////////////////////////////////
 async getPrescripcionsByIps(ips:string): Promise<any> {

    const axiosRequest = await this.axiosHttpClient.request({
        url: ApiUrlsEnum.getPrescriptionsByIps,
        method: 'post',
        body: {
            "ips":ips,
        },
    });
    return axiosRequest;
}




}
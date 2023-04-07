
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';
import { IUser } from '@/domain/models';
import { IPrescriptions } from '@/domain/models/prescriptions.model';
import { HttpStatusCode } from '@/protocols/http/http_utilities';
import { ApiUrlsEnum } from '@/utilities/enums';


export interface IPrescriptionsRepository {
    savePrescripcions(prescriptions: IPrescriptions): Promise<any>;
}


export class PrescriptionsRepository implements IPrescriptionsRepository {

    private axiosHttpClient: AxiosHttpClient;

    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }
    /////////////////////////////////LOGIN////////////////////////////////////////////////
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
                // "dextrosa": prescriptions.dextrosa,
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
                "elementos_traza": prescriptions.req_elementos_traza,
                "req_elementos_traza": prescriptions.req_elementos_traza,
                "vit_hidrosolubles": prescriptions.vit_hidrosolubles,
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
    /////////////////////////////////REGISTER///////////////////////////////////////////////////



}

import { IComment } from '@/domain/models/observaciones.model';
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';
import { IUser } from '@/domain/models';
import { IPrescriptions } from '@/domain/models/prescriptions.model';
import { HttpStatusCode } from '@/protocols/http/http_utilities';
import { ApiUrlsEnum } from '@/utilities/enums';


export interface IPrescriptionsRepository {
    savePrescripcions(prescriptions: IPrescriptions): Promise<any>;
    deletePrescriptions(no: number): Promise<any>;
    getPrescripcionsByNumber(number: string): Promise<any>;
    getPrescripcionsByName(name: string): Promise<any>;
    getPrescripcionsById(id: string): Promise<any>;
    getPrescripcionsByDate(date: string): Promise<any>;
    getPrescripcionsByIps(ips: string): Promise<any>;
    getPrescripcionsProd(ips: string | undefined, fecha: any | null | undefined): Promise<any>;
    getPlainFile(prescriptionsId: string[]): Promise<any>;
    getPrescripcionsAll(limit: number): Promise<any>;
    updatePrescripcions(prescriptions: IPrescriptions, number: string): Promise<any>;
    getMaxNumberPres(): Promise<any>;
    createComments(comment: IComment): Promise<any>;
    getPrescripcionsByLab(): Promise<any>;
    setQuimicos(prescriptionId: string, preparador: string, controlador_de_calidad: string): Promise<any>;
    getLogs(number: string): Promise<any>;
    sendPDF(file: File, no_orden: string, nombre_paciente: string): Promise<any>;
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
            body: JSON.stringify(prescriptions)
        });

        return axiosRequest;


    }
    /////////////////////////////////Get Prescripcion By Number////////////////////////////////////////////////
    async updatePrescripcions(prescriptions: IPrescriptions, number: string): Promise<any> {
        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.savePrescriptions}/${number}`,
            method: 'patch',
            body: JSON.stringify(prescriptions)
        });

        return axiosRequest;
    }
    /////////////////////////////////Get Max Number Pres////////////////////////////////////////////////
    async getMaxNumberPres(): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getMaxNumPresc,
            method: 'get',
            // body: {},
        });
        return axiosRequest;
    }

    /////////////////////////////////Get Predscripcion By Number////////////////////////////////////////////////
    async getPrescripcionsByNumber(number: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.getPrescriptionsByNumber}/${number}`,
            method: 'get',
            // body: {},
        });
        return axiosRequest;
    }

    /////////////////////////////////Get Predscripcion By Name////////////////////////////////////////////////
    async getPrescripcionsAll(limit: number): Promise<any> {

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
    async getPrescripcionsByName(name: string): Promise<any> {

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
    async getPrescripcionsById(id: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getPrescriptionsById,
            method: 'post',
            body: {
                "no_identificacion": id,
            },
        });
        return axiosRequest;
    }
    /////////////////////////////////Get Predscripcion By Date////////////////////////////////////////////////
    async getPrescripcionsByDate(date: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getPrescriptionsByDate,
            method: 'post',
            body: {
                "date": date,
            },
        });
        return axiosRequest;
    }
    ////////////////////////////////Get Predscripcion By Lab////////////////////////////////////////////////
    async getPrescripcionsByLab(): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getPrescriptionsByLab,
            method: 'get',
        });
        return axiosRequest;
    }

    ////////////////////////////////Get Predscripcion By Lab////////////////////////////////////////////////
    async setQuimicos(
        prescriptionId: string,
        preparador: string,
        controlador_de_calidad: string,
    ): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.setQuimicos,
            method: 'get',
            body: {
                prescriptionId: prescriptionId,
                preparador: preparador,
                controlador_de_calidad: controlador_de_calidad
            },
        });
        return axiosRequest;
    }



    /////////////////////////////////Get Predscripcion By Ips////////////////////////////////////////////////
    async getPrescripcionsByIps(ips: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getPrescriptionsByIps,
            method: 'post',
            body: {
                "ips": ips,
            },
        });
        return axiosRequest;
    }

    async getPrescripcionsProd(ips: string | undefined, fecha: any | null | undefined): Promise<any> {

        if (ips === undefined && fecha === undefined) {
            const axiosRequest = await this.axiosHttpClient.request({
                url: ApiUrlsEnum.getPrescriptionsProd,
                method: 'post',
                body: {}
            });
            return axiosRequest;
        } else {

            const axiosRequest = await this.axiosHttpClient.request({
                url: ApiUrlsEnum.getPrescriptionsProd,
                method: 'post',
                body: {
                    "fecha": fecha,
                    "entidad_de_salud": ips
                },
            });
            return axiosRequest;
        }

    }

    async getPlainFile(prescriptionsId: string[]): Promise<any> {

        // console.log('LLLLLL:', [prescriptionsId]);

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getPlainFile,
            method: 'post',
            body: {
                "prescriptionsId": prescriptionsId
            },
        });
        return axiosRequest;
    }


    async deletePrescriptions(no: number): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.deletePrescriptions}/${no}`,
            method: 'delete',
            body: {},
        });
        return axiosRequest;
    }

    /////////////////////////////////Get Max Number Pres////////////////////////////////////////////////
    async createComments(comment: IComment): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.saveComments,
            method: 'post',
            body: JSON.stringify(comment)
        });
        return axiosRequest;
    }

    /////////////////////////////////Get Max Number Pres////////////////////////////////////////////////
    async getLogs(number: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.getLogs}/${number}`,
            method: 'get',
        });
        return axiosRequest;
    }
    /////////////////////////////////SET PDF////////////////////////////////////////////////
    async sendPDF(file: File, no_orden: string, nombre_paciente: string): Promise<any> {

        const formData = new FormData();

        // console.log('DATOS:',no_orden,nombre_paciente)

        formData.append("no_orden", no_orden);
        formData.append("nombre_paciente", nombre_paciente);
        formData.append("file", file);

        const axiosRequest = await this.axiosHttpClient.multipartFile({
            url: ApiUrlsEnum.sendPDF,
            method: 'post',
            formData: formData,
        });
        return axiosRequest;
    }
}
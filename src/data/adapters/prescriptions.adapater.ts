import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { newIUserTable } from "@/utilities/getnameByObject";


export const prescriptionsAdapter = (prescriptions: any): IPrescriptions => ({
  no_orden: prescriptions.no_orden,
  user: prescriptions.user?prescriptions.user:newIUserTable,
  createdAt: prescriptions.createdAt,
  updatedAt: prescriptions.updatedAt,

  estado: prescriptions.estado,

  dextrosa: prescriptions.dextrosa,
  req_dextrosa: prescriptions.req_dextrosa,
  tipo_dextrosa: prescriptions.tipo_dextrosa,

  tipo_prescripcion: prescriptions.tipo_prescripcion,
  fecha: prescriptions.fecha,
  ips: prescriptions.ips,
  no_identificacion: prescriptions.no_identificacion,
  nombre_paciente: prescriptions.nombre_paciente,
  servicio: prescriptions.servicio,
  ubicacion: prescriptions.ubicacion,
  cama: prescriptions.cama,
  peso: prescriptions.peso,
  tipo_edad: prescriptions.tipo_edad,
  edad: prescriptions.edad,
  volumen: prescriptions.volumen,
  purga: prescriptions.purga,
  tiempo_infusion: prescriptions.tiempo_infusion,
  overfill: prescriptions.overfill,
  filtro: prescriptions.filtro,
  equipo_fotosensible: prescriptions.equipo_fotosensible,
  tipo_paciente: prescriptions.tipo_paciente,
  via_administracion: prescriptions.via_administracion,
  diagnostico: prescriptions.diagnostico,
  flujo_metabolico: prescriptions.flujo_metabolico,
  aminoacidos: prescriptions.aminoacidos,
  req_aminoacidos: prescriptions.req_aminoacidos,
  lipidos: prescriptions.lipidos,
  req_lipidos: prescriptions.req_lipidos,
  omegaven: prescriptions.omegaven,
  dipeptiven: prescriptions.dipeptiven,
  sodio_total: prescriptions.sodio_total,
  potasio_total: prescriptions.potasio_total,
  fosfato: prescriptions.fosfato,
  req_fosfato: prescriptions.req_fosfato,
  calcio: prescriptions.calcio,
  req_calcio: prescriptions.req_calcio,
  magnesio: prescriptions.magnesio,
  req_magnesio: prescriptions.req_magnesio,
  elementos_traza: prescriptions.elementos_traza,
  req_elementos_traza: prescriptions.req_elementos_traza,
  vit_hidrosolubles: prescriptions.vit_hidrosolubles,
  req_vit_hidrosolubles: prescriptions.req_vit_hidrosolubles,
  req_vit_liposolubles: prescriptions.req_vit_liposolubles,
  soluvit_vitalip: prescriptions.soluvit_vitalip,
  vit_C: prescriptions.vit_C,
  acido_folico: prescriptions.acido_folico,
  observaciones: prescriptions.observaciones,
  preparador: prescriptions.preparador,
  controlador_de_calidad: prescriptions.controlador_de_calidad,
  por_clonacion:prescriptions.por_clonacion
});
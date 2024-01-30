
export enum ApiUrlsEnum {
    register = 'auth/register',
    login = 'auth/login',
    savePrescriptions='prescriptions',
    getAllPrescriptions='prescriptions/all',
    getPrescriptionsByNumber='prescriptions/no_orden',
    getPrescriptionsByName='prescriptions/name',
    getPrescriptionsById='prescriptions/no_identificacion',
    getPrescriptionsByIps='prescriptions/ips',
    getMaxNumPresc='prescriptions/me_max',

   invitarUsuarios = 'auth/inviteUser',
   aceptarInvitacion = 'auth/acceptInvitation',
   registerByInvitation = 'auth/registerByInvitation',
}

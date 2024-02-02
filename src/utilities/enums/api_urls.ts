
export enum ApiUrlsEnum {
    login = 'auth/login',
    register = 'auth/register',
    forgotPassword = 'auth/forgotPassword',
    verifyCodeAndUpdatePassword = 'auth/verifyCodeAndUpdatePassword',
    savePrescriptions = 'prescriptions',
    deletePrescriptions = 'prescriptions',
    getAllPrescriptions = 'prescriptions/all',
    getPrescriptionsByNumber = 'prescriptions/no_orden',
    getPrescriptionsByName = 'prescriptions/name',
    getPrescriptionsById = 'prescriptions/no_identificacion',
    getPrescriptionsByIps = 'prescriptions/ips',
    getMaxNumPresc = 'prescriptions/me_max',

    getUserByRol = 'auth/byRol',

    invitarUsuarios = 'auth/inviteUser',
    aceptarInvitacion = 'auth/acceptInvitation',
    registerByInvitation = 'auth/registerByInvitation',
}

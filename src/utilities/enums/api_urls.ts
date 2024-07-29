
export enum ApiUrlsEnum {
    login = 'auth/login',
    register = 'auth/register',
    forgotPassword = 'auth/forgotPassword',
    verifyCodeAndUpdatePassword = 'auth/verifyCodeAndUpdatePassword',
    savePrescriptions = 'prescriptions',
    saveComments = 'prescriptions/comment',
    deletePrescriptions = 'prescriptions',
    getAllPrescriptions = 'prescriptions/all',
    getPrescriptionsByNumber = 'prescriptions/no_orden',
    getPrescriptionsByName = 'prescriptions/name',
    getPrescriptionsById = 'prescriptions/no_identificacion',
    getPrescriptionsByIps = 'prescriptions/ips',
    getPrescriptionsProd = 'prescriptions/produccion',
    getPlainFile = 'prescriptions/get_plain_file',
    getPrescriptionsByDate = 'prescriptions/by_date',
    getPrescriptionsByLab = 'prescriptions/by_lab',
    setQuimicos = 'prescriptions/set_quimicos',
    getMaxNumPresc = 'prescriptions/me_max',
    sendPDF = 'prescriptions/upload_and_send',

    getUserByRol = 'auth/byRol',

    getMe = 'auth/me',
    updateMe = 'auth/me',

    getMeGroup = 'auth/my-group',
    updateMeGroup = 'auth/my-group',

    invitarUsuarios = 'auth/inviteUser',
    aceptarInvitacion = 'auth/acceptInvitation',
    registerByInvitation = 'auth/registerByInvitation',

    getLogs = 'prescriptions-logs'
}

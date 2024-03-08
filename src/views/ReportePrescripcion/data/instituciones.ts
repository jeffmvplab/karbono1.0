export const instituciones = [
    { value: '0', label: 'ARL SURA MONTERÍA', overfill: 0 },
    { value: '1', label: 'CLÍNICA ANTIOQUIA', overfill: 20 },
    { value: '2', label: 'CLÍNICA CARDIOVID', overfill: 30 },
    { value: '3', label: 'CLÍNICA DEL PRADO', overfill: 30 },
    { value: '4', label: 'CLINICA DEL SUR', overfill: 0 },
    { value: '5', label: 'CLÍNICA EL ROSARIO CENTRO', overfill: 30 },
    { value: '6', label: 'CLÍNICA EL ROSARIO TESORO', overfill: 30 },
    { value: '7', label: 'CLÍNICA LAS AMERICAS', overfill: 0 },
    { value: '8', label: 'CLÍNICA LAS VEGAS', overfill: 0 },
    { value: '9', label: 'CLÍNICA MATERNO INFANTIL CASA DEL NIÑO', overfill: 0 },
    { value: '10', label: 'CLÍNICA MEDELLÍN CENTRO', overfill: 0 },
    { value: '11', label: 'CLÍNICA MEDELLÍN OCCIDENTE', overfill: 0 },
    { value: '12', label: 'CLÍNICA MEDELLÍN POBLADO', overfill: 0 },
    { value: '13', label: 'CLÍNICA SAN JUAN DE DIOS LA CEJA', overfill: 0 },
    { value: '14', label: 'CLÍNICA SOMA', overfill: 20 },
    { value: '15', label: 'CLINICA VETERINARIA EVI', overfill: 0 },
    { value: '16', label: 'CLINICA VETERINARIA PUNTO VET', overfill: 0 },
    { value: '17', label: 'CLINICA VETERINARIA SAN LUCAS', overfill: 0 },
    { value: '18', label: 'CLÍNICA VITAL', overfill: 0 },
    { value: '19', label: 'CLÍNICA ZAYMA', overfill: 0 },
    { value: '20', label: 'COLSANITAS', overfill: 0 },
    { value: '21', label: 'ESE HOSPITAL VENANCIO DIAZ DIAZ', overfill: 0 },
    { value: '22', label: 'EVALUAMOS IPS', overfill: 0 },
    { value: '23', label: 'FUNDACIÓN SOMA CHIGORODO', overfill: 30 },

    { value: '24', label: 'HOSPITAL INFANTIL CONCEJO DE MEDELLÍN', overfill: 25 },
    { value: '25', label: 'HOSPITAL LA MARÍA', overfill: 0 },
    { value: '26', label: 'HOSPITAL MANUEL URIBE ÁNGEL', overfill: 30 },
    { value: '27', label: 'HOSPITAL MARCO FIDEL SUÁREZ', overfill: 0 },
    { value: '28', label: 'HOSPITAL SAN JUAN DE DIOS RIONEGRO', overfill: 30 },
    { value: '29', label: 'HOSPITAL SAN JUAN DE DIOS YARUMAL', overfill: 0 },
    { value: '30', label: 'HOSPITAL SAN VICENTE FUNDACIÓN RIONEGRO', overfill: 0 },
    { value: '31', label: 'HOSPITAL UNIVERSITARIO SAN VICENTE FUNDACION', overfill: 0 },
    { value: '32', label: 'NUMIXX', overfill: 0 },
    { value: '33', label: 'PROMEDAN', overfill: 0 },
    { value: '34', label: 'SALUD-TREC', overfill: 0 },
    { value: '35', label: 'SERVIUCIS', overfill: 30 },
    { value: '36', label: 'SURA', overfill: 0 },
    { value: '37', label: 'SURA RIONEGRO', overfill: 0 },
    { value: '38', label: 'UNIVERSIDAD CES', overfill: 0 }
];


export const centrales_de_mezclas = [
    { value: '0', label: 'Central de mezclas Corpaul' },
    { value: '1', label: 'Central de mezclas Clínica del Rosario'},
    { value: '2', label: 'Central de mezclas Clínica las Américas'},
    { value: '3', label: 'Central de mezclas Hospital Pablo Tobón Uribe'},
    { value: '4', label: 'Central de mezclas Hospital general'},
    { value: '5', label: 'Central de mezclas Cardiovid'},
    { value: '6', label: 'Central de mezclas San Vicente Medellín'},
    { value: '7', label: 'Central de mezclas San Vicente Rionegro'},
    { value: '8', label: 'Central de mezclas Hospital Manuel Uribe Angel'},
    { value: '9', label: 'Inversión en salud de Antioquia'},
    { value: '10', label: 'Unidosis'},
    { value: '11', label: 'Asisfarma'},
];


export const obtenerOverfillPorLabel = (label: string): number | null => {
    const institucion = instituciones.find(inst => inst.label === label);
    return institucion ? institucion.overfill : null;
};
import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  Divider,
  Alert
} from '@mui/material';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { ExtractedPrescriptionData } from '@/utilities/pdfExtractor';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export interface PDFPreviewModalProps {
  open: boolean;
  onClose: () => void;
  data: ExtractedPrescriptionData | null;
  onApply: (data: ExtractedPrescriptionData) => void;
}

const PDFPreviewModal: React.FC<PDFPreviewModalProps> = ({
  open,
  onClose,
  data,
  onApply
}) => {
  if (!data) return null;

  const handleApply = () => {
    onApply(data);
    onClose();
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 800,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
  };

  const DataSection = ({ title, data: sectionData }: { title: string; data: Record<string, any> }) => (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(sectionData).map(([key, value]) => (
            <Grid item xs={12} sm={6} key={key}>
              <Stack direction="row" spacing={1}>
                <Typography variant="body2" color="textSecondary" sx={{ minWidth: 120 }}>
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {value || '-'}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const patientData = {
    'Nombre del Paciente': data.nombrePaciente,
    'Identificación': data.numIdentificacion,
    'Edad': `${data.edad} ${data.tipoEdad}`,
    'Peso': `${data.peso} kg`,
    'IPS': data.ips,
    'Servicio': data.servicio,
    'Ubicación': data.ubicacion,
    'Cama': data.cama,
    'Tipo de Paciente': data.tipoPaciente,
    'Diagnóstico': data.diagnostico
  };

  const prescriptionData = {
    'Volumen Total': `${data.volumen} mL`,
    'Tiempo de Infusión': `${data.tiempoInfusion} horas`,
    'Velocidad de Infusión': `${data.velocidadInfusion} mL/h`,
    'Filtro': data.filtro,
    'Equipo Fotosensible': data.equipoFotosensible,
    'Vía de Administración': data.viaAdministracion,
    'Overfill': `${data.overfill}%`
  };

  const macronutrientsData = {
    'Aminoácidos': data.aminoacidos,
    'Requerimiento Aminoácidos': `${data.requerimientoAminoacidos} g/kg/día`,
    'Lípidos': data.lipidos,
    'Requerimiento Lípidos': `${data.requerimientoLipidos} g/kg/día`,
    'Dextrosa': data.dextrosa,
    'Requerimiento Dextrosa': `${data.requerimientoDextrosa} g/kg/día`,
    'Omegaven': `${data.omegaven} mL`,
    'Dipeptiven': `${data.dipeptiven} mL`
  };

  const micronutrientsData = {
    'Sodio Total': `${data.sodioTotal} mEq/kg`,
    'Potasio Total': `${data.potasioTotal} mEq/kg`,
    'Calcio': `${data.calcio} mg/kg/día`,
    'Magnesio': `${data.magnesio} mg/kg/día`,
    'Fosfato': data.fosfato,
    'Requerimiento Fosfato': `${data.requerimientoFosfato} mmol/kg`,
    'Elementos Traza': data.elementosTraza,
    'Requerimiento Elementos Traza': `${data.requerimientoElementosTraza} mL`,
    'Vitaminas Hidrosolubles': data.vitaminasHidrosolubles,
    'Requerimiento Vitaminas Hidrosolubles': `${data.requerimientoVitaminasHidrosolubles} mL`,
    'Vitaminas Liposolubles': data.vitaminasLiposolubles,
    'Requerimiento Vitaminas Liposolubles': `${data.requerimientoVitaminasLiposolubles} mL`,
    'Vitamina C': `${data.vitaminasC} mg`,
    'Ácido Fólico': `${data.acidoFolico} mg`
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Stack spacing={3}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Datos Extraídos del PDF
          </Typography>
          
          <Alert severity="info" sx={{ borderRadius: 2 }}>
            Revisa los datos extraídos del PDF antes de aplicarlos al formulario.
          </Alert>

          <DataSection title="Información del Paciente" data={patientData} />
          <DataSection title="Configuración de la Prescripción" data={prescriptionData} />
          <DataSection title="Macronutrientes" data={macronutrientsData} />
          <DataSection title="Micronutrientes" data={micronutrientsData} />

          <Divider />

          <Stack direction="row" spacing={2} justifyContent="center">
            <CustomButton
              onClick={handleApply}
              text="Aplicar Datos"
              startIcon={<CheckCircleIcon />}
              width="200px"
              height="44px"
              variant="contained"
              color="primary"
              fontSize="16px"
              textColor="white"
              sx={{ borderRadius: '10px' }}
            />
            
            <CustomButton
              onClick={onClose}
              text="Cancelar"
              startIcon={<CancelIcon />}
              width="200px"
              height="44px"
              variant="outlined"
              color="secondary"
              fontSize="16px"
              textColor={colorsKarbono.secundary}
              borderColor={colorsKarbono.secundary}
              sx={{ borderRadius: '10px' }}
            />
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default PDFPreviewModal; 
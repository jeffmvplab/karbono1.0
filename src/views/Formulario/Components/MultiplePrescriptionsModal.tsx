import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Chip,
  Divider,
  Alert,
  TextField,
  InputAdornment
} from '@mui/material';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { MultiplePrescriptionsData, PrescriptionSummary, ExtractedPrescriptionData } from '@/utilities/pdfExtractor';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScaleIcon from '@mui/icons-material/Scale';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export interface MultiplePrescriptionsModalProps {
  open: boolean;
  onClose: () => void;
  data: MultiplePrescriptionsData | null;
  onSelectPrescription: (prescription: ExtractedPrescriptionData) => void;
}

const MultiplePrescriptionsModal: React.FC<MultiplePrescriptionsModalProps> = ({
  open,
  onClose,
  data,
  onSelectPrescription
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState<string | null>(null);

  if (!data || !open) return null;

  const handleSelectPrescription = (prescriptionId: string) => {
    setSelectedPrescription(prescriptionId);
  };

  const handleApplySelection = () => {
    if (selectedPrescription) {
      const prescription = data.prescriptions.find((_, index) => 
        data.summaries[index].id === selectedPrescription
      );
      if (prescription) {
        onSelectPrescription(prescription);
        onClose();
      }
    }
  };

  const filteredSummaries = data.summaries.filter(summary =>
    summary.nombrePaciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    summary.numIdentificacion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    summary.diagnostico.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: 900,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
  };

  const PrescriptionCard = ({ summary, index }: { summary: PrescriptionSummary; index: number }) => (
    <Card 
      sx={{ 
        mb: 2, 
        border: selectedPrescription === summary.id ? `2px solid ${colorsKarbono.primary}` : '1px solid #e0e0e0',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          borderColor: colorsKarbono.primary,
          boxShadow: 2
        }
      }}
    >
      <CardActionArea onClick={() => handleSelectPrescription(summary.id)}>
        <CardContent>
          <Stack spacing={2}>
            {/* Header con información principal */}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Stack spacing={1} flex={1}>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  {summary.nombrePaciente}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Chip 
                    icon={<PersonIcon />} 
                    label={`ID: ${summary.numIdentificacion}`}
                    size="small"
                    variant="outlined"
                  />
                  <Chip 
                    icon={<ScaleIcon />} 
                    label={summary.peso}
                    size="small"
                    variant="outlined"
                  />
                  <Chip 
                    icon={<LocalHospitalIcon />} 
                    label={summary.edad}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
              
              {selectedPrescription === summary.id && (
                <CheckCircleIcon 
                  sx={{ 
                    color: colorsKarbono.primary, 
                    fontSize: 24 
                  }} 
                />
              )}
            </Stack>

            <Divider />

            {/* Información médica */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <Typography variant="body2" color="textSecondary">
                    <strong>IPS:</strong> {summary.ips}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Servicio:</strong> {summary.servicio}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Consecutivo:</strong> {summary.consecutivo}
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Diagnóstico:</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    wordBreak: 'break-word'
                  }}>
                    {summary.diagnostico}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            {/* Información adicional */}
            <Stack direction="row" spacing={1}>
              <Chip 
                label={`Prescripción ${index + 1}`}
                size="small"
                color="primary"
                variant="filled"
              />
              {summary.fechaCreacion && (
                <Chip 
                  label={`Fecha: ${summary.fechaCreacion}`}
                  size="small"
                  variant="outlined"
                />
              )}
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Stack spacing={3}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Múltiples Prescripciones Detectadas
          </Typography>
          
          <Alert severity="info" sx={{ borderRadius: 2 }}>
            Se detectaron {data.totalCount} prescripciones en el PDF. Selecciona la que deseas cargar en el formulario.
          </Alert>

          {/* Barra de búsqueda */}
          <TextField
            fullWidth
            placeholder="Buscar por nombre, identificación o diagnóstico..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
            }}
          />

          {/* Lista de prescripciones */}
          <Box sx={{ maxHeight: '60vh', overflow: 'auto' }}>
            {filteredSummaries.length > 0 ? (
              filteredSummaries.map((summary, index) => (
                <PrescriptionCard 
                  key={summary.id} 
                  summary={summary} 
                  index={index} 
                />
              ))
            ) : (
              <Alert severity="warning" sx={{ borderRadius: 2 }}>
                No se encontraron prescripciones que coincidan con la búsqueda.
              </Alert>
            )}
          </Box>

          <Divider />

          {/* Información de selección */}
          {selectedPrescription && (
            <Alert severity="success" sx={{ borderRadius: 2 }}>
              Prescripción seleccionada: {
                data.summaries.find(s => s.id === selectedPrescription)?.nombrePaciente
              }
            </Alert>
          )}

          {/* Botones de acción */}
          <Stack direction="row" spacing={2} justifyContent="center">
            <CustomButton
              onClick={handleApplySelection}
              disabled={!selectedPrescription}
              text="Cargar Prescripción Seleccionada"
              startIcon={<CheckCircleIcon />}
              width="300px"
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

          {/* Información adicional */}
          <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'center' }}>
            {filteredSummaries.length} de {data.totalCount} prescripciones mostradas
          </Typography>
        </Stack>
      </Box>
    </Modal>
  );
};

export default MultiplePrescriptionsModal; 
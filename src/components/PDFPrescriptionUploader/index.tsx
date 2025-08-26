import React, { useState, useCallback } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Typography,
  CircularProgress,
  Alert,
  Chip
} from '@mui/material';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { AIPDFExtractor } from '@/utilities/aiPdfExtractor';
import { ExtractedPrescriptionData, PrescriptionSummary } from '@/utilities/pdfExtractor';

interface PDFPrescriptionUploaderProps {
  onPrescriptionSelect: (prescription: ExtractedPrescriptionData) => void;
  open: boolean;
  onClose: () => void;
}

export const PDFPrescriptionUploader: React.FC<PDFPrescriptionUploaderProps> = ({
  onPrescriptionSelect,
  open,
  onClose
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [prescriptions, setPrescriptions] = useState<ExtractedPrescriptionData[]>([]);
  const [summaries, setSummaries] = useState<PrescriptionSummary[]>([]);
  const [selectedPrescription, setSelectedPrescription] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [processingStage, setProcessingStage] = useState<string>('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file || file.type !== 'application/pdf') {
      setError('Por favor selecciona un archivo PDF válido');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setPrescriptions([]);
    setSummaries([]);

    try {
      setProcessingStage('Extrayendo texto del PDF...');
      
      // Usar el extractor con IA
      const aiExtractor = new AIPDFExtractor({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
        model: 'gpt-4-vision',
        maxRetries: 3,
        confidenceThreshold: 0.8
      });

      const result = await aiExtractor.extractWithAI(file);
      
      if (result.totalCount === 0) {
        setError('No se encontraron prescripciones válidas en el PDF');
        return;
      }

      setPrescriptions(result.prescriptions);
      setSummaries(result.summaries);
      setProcessingStage('');
      
    } catch (error) {
      console.error('Error procesando PDF:', error);
      setError('Error al procesar el PDF. Intenta nuevamente.');
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  });

  const handleSelectPrescription = () => {
    if (selectedPrescription) {
      const index = parseInt(selectedPrescription.split('-')[1]) - 1;
      const prescription = prescriptions[index];
      onPrescriptionSelect(prescription);
      onClose();
      // Reset state
      setPrescriptions([]);
      setSummaries([]);
      setSelectedPrescription(null);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state
    setPrescriptions([]);
    setSummaries([]);
    setSelectedPrescription(null);
    setError(null);
    setIsProcessing(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={1}>
          <FileText size={24} />
          Cargar Prescripciones desde PDF
        </Box>
      </DialogTitle>
      
      <DialogContent>
        {/* Upload Area */}
        {prescriptions.length === 0 && !isProcessing && (
          <Box
            {...getRootProps()}
            sx={{
              border: '2px dashed',
              borderColor: isDragActive ? 'primary.main' : 'grey.300',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              bgcolor: isDragActive ? 'action.hover' : 'transparent',
              mb: 2
            }}
          >
            <input {...getInputProps()} />
            <Upload size={48} style={{ marginBottom: 16, opacity: 0.5 }} />
            <Typography variant="h6" gutterBottom>
              {isDragActive ? 'Suelta el archivo aquí' : 'Arrastra y suelta un PDF aquí'}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              o haz clic para seleccionar un archivo
            </Typography>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Formatos soportados: PDF
            </Typography>
          </Box>
        )}

        {/* Processing State */}
        {isProcessing && (
          <Box textAlign="center" py={4}>
            <CircularProgress size={60} sx={{ mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Procesando PDF con IA...
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {processingStage || 'Analizando contenido médico'}
            </Typography>
          </Box>
        )}

        {/* Error Display */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* Prescriptions List */}
        {summaries.length > 0 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Prescripciones encontradas ({summaries.length})
            </Typography>
            <List>
              {summaries.map((summary) => (
                <ListItem
                  key={summary.id}
                  button
                  onClick={() => setSelectedPrescription(summary.id)}
                  selected={selectedPrescription === summary.id}
                  sx={{
                    border: 1,
                    borderColor: selectedPrescription === summary.id ? 'primary.main' : 'grey.200',
                    borderRadius: 1,
                    mb: 1
                  }}
                >
                  <ListItemText
                    primary={
                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="subtitle1">
                          {summary.nombrePaciente || 'Sin nombre'}
                        </Typography>
                        <Chip 
                          size="small" 
                          label={summary.consecutivo} 
                          color="primary" 
                          variant="outlined" 
                        />
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2">
                          ID: {summary.numIdentificacion} | Edad: {summary.edad} | Peso: {summary.peso}
                        </Typography>
                        <Typography variant="body2">
                          Servicio: {summary.servicio} | IPS: {summary.ips}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {summary.diagnostico}
                        </Typography>
                      </Box>
                    }
                  />
                  <ListItemSecondaryAction>
                    <Checkbox
                      checked={selectedPrescription === summary.id}
                      onChange={() => setSelectedPrescription(summary.id)}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancelar
        </Button>
        {summaries.length > 0 && (
          <Button
            onClick={handleSelectPrescription}
            variant="contained"
            disabled={!selectedPrescription}
            startIcon={<CheckCircle size={20} />}
          >
            Cargar Prescripción Seleccionada
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

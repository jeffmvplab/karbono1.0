import React, { useState, useRef, useEffect } from 'react';
import { Button, Stack, Typography, Alert, CircularProgress, Chip, IconButton, Tooltip, Box } from '@mui/material';
import { Upload as UploadIcon, SmartToy as AIIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { useFormulariosContext } from '../context/FormulariosProvider';
import { ExtractedPrescriptionData, PDFExtractorSimple } from '../../../utilities/pdfExtractorSimple';
import { OptimizedAIPDFExtractor } from '../../../utilities/aiPdfExtractorOptimized';
import { pdfExtractionConfigManager } from '../../../utilities/pdfExtractionConfig';
import { AIConfigModal } from '../../../components/AIConfigModal';
import PDFPreviewModal from './PDFPreviewModal';
import MultiplePrescriptionsModal from './MultiplePrescriptionsModal';

const PDFUploadButton: React.FC = () => {
  const { fillFormWithExtractedData } = useFormulariosContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [multiplePrescriptionsData, setMultiplePrescriptionsData] = useState<any>(null);
  const [showMultiplePrescriptions, setShowMultiplePrescriptions] = useState(false);
  const [processingStage, setProcessingStage] = useState<string>('');
  const [usingAI, setUsingAI] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Verificar que estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validar tipo de archivo
    if (file.type !== 'application/pdf') {
      setError('Por favor seleccione un archivo PDF válido.');
      return;
    }

    // Validar tamaño de archivo
    const config = pdfExtractionConfigManager.getConfig();
    if (file.size > config.processing.maxFileSize) {
      setError(`El archivo es demasiado grande. Máximo ${config.processing.maxFileSize / (1024 * 1024)}MB.`);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);
    setProcessingStage('Iniciando procesamiento...');
    setUsingAI(false);

    try {
      let result;
      const startTime = Date.now();

      // Usar extracción tradicional mejorada con progreso detallado
      setUsingAI(false);
      setProcessingStage('Inicializando extracción...');
      
      try {
        setProcessingStage('Procesando PDF...');
        result = await PDFExtractorSimple.extractMultiplePrescriptionsFromPDF(file);
        setProcessingStage('');
      } catch (extractionError) {
        console.log('Error en extracción múltiple, intentando extracción simple:', extractionError);
        setProcessingStage('Intentando extracción simple...');
        
        // Intentar extracción simple como fallback
        const singleData = await PDFExtractorSimple.extractFromPDF(file);
        result = {
          prescriptions: [singleData],
          summaries: [{
            id: '1',
            nombrePaciente: singleData.nombrePaciente || 'Paciente',
            numIdentificacion: singleData.numIdentificacion || '',
            edad: singleData.edad || '',
            peso: singleData.peso || '',
            ips: singleData.ips || '',
            servicio: singleData.servicio || '',
            diagnostico: singleData.diagnostico || '',
            volumen: singleData.volumen || ''
          }],
          totalCount: 1
        };
        setProcessingStage('');
      }

      const processingTime = Date.now() - startTime;

      if (result.totalCount > 1) {
        // Múltiples prescripciones detectadas
        setMultiplePrescriptionsData(result);
        setShowMultiplePrescriptions(true);
        setSuccess(`Se detectaron ${result.totalCount} prescripciones en el PDF. (Procesado con extracción mejorada)`);
      } else if (result.totalCount === 1) {
        // Una sola prescripción
        setExtractedData(result.prescriptions[0]);
        setShowPreview(true);
        setSuccess(`Se detectó 1 prescripción en el PDF. (Procesado con extracción mejorada)`);
      } else {
        // Intentar extracción simple
        setProcessingStage('Intentando extracción simple...');
        const singleData = await PDFExtractorSimple.extractFromPDF(file);
        setExtractedData(singleData);
        setShowPreview(true);
        setSuccess('Datos extraídos del PDF exitosamente.');
        setProcessingStage('');
      }
    } catch (error) {
      console.error('Error procesando PDF:', error);
      setError(`Error al procesar el PDF: ${(error as Error).message}`);
      setProcessingStage('');
    } finally {
      setLoading(false);
    }
  };

  const handleApplyData = (data: any) => {
    try {
      fillFormWithExtractedData(data);
      setShowPreview(false);
      setSuccess('Datos aplicados al formulario exitosamente.');
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      setError(`Error al aplicar los datos: ${(error as Error).message}`);
    }
  };

  const handleSelectPrescription = (prescription: any) => {
    setExtractedData(prescription);
    setShowMultiplePrescriptions(false);
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setExtractedData(null);
  };

  const handleCloseMultiple = () => {
    setShowMultiplePrescriptions(false);
    setMultiplePrescriptionsData(null);
  };

  // No renderizar en el servidor
  if (!isClient) {
    return null;
  }

  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button
          variant="outlined"
          startIcon={loading ? <CircularProgress size={20} /> : <UploadIcon />}
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
          sx={{ minWidth: 200 }}
        >
          {loading ? 'Procesando...' : 'Cargar PDF'}
        </Button>
        
        <Chip
          icon={<AIIcon />}
          label="Extracción Mejorada"
          color="success"
          variant="outlined"
          size="small"
        />
        
        <Tooltip title="Configurar IA">
          <IconButton 
            onClick={() => setShowConfig(true)}
            size="small"
            sx={{ ml: 1 }}
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip>
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </Stack>

      {processingStage && (
        <Alert severity="info" sx={{ mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={16} />
            <Typography variant="body2">{processingStage}</Typography>
          </Box>
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mt: 1 }}>
          {success}
        </Alert>
      )}

      {!loading && (
        <Alert severity="info" sx={{ mt: 1 }}>
          <Typography variant="body2">
            Sistema de extracción mejorado activo. Carga tu PDF para procesar automáticamente.
          </Typography>
        </Alert>
      )}

      {showPreview && extractedData && (
        <PDFPreviewModal
          data={extractedData}
          onApply={() => handleApplyData(extractedData)}
          onClose={handleClosePreview} open={false}        />
      )}

      {showMultiplePrescriptions && multiplePrescriptionsData && (
        <MultiplePrescriptionsModal
          data={multiplePrescriptionsData}
          onClose={handleCloseMultiple} open={false} onSelectPrescription={function (prescription: ExtractedPrescriptionData): void {
            throw new Error('Function not implemented.');
          } }        />
      )}

      {showConfig && (
        <AIConfigModal
          open={showConfig}
          onClose={() => setShowConfig(false)}
        />
      )}
    </>
  );
};

export default PDFUploadButton; 
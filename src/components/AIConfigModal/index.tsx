import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  Typography,
  Box,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider
} from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { pdfExtractionConfigManager } from '../../utilities/pdfExtractionConfig';

interface AIConfigModalProps {
  open: boolean;
  onClose: () => void;
}

export const AIConfigModal: React.FC<AIConfigModalProps> = ({
  open,
  onClose
}) => {
  const [config, setConfig] = useState(pdfExtractionConfigManager.getConfig());
  const [hasChanges, setHasChanges] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleConfigChange = (path: string, value: any) => {
    const newConfig = { ...config };
    const keys = path.split('.');
    let current: any = newConfig;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setConfig(newConfig);
    setHasChanges(true);
  };

  const handleSave = () => {
    const validation = pdfExtractionConfigManager.validateConfig();
    if (validation.isValid) {
      pdfExtractionConfigManager.updateConfig(config);
      setHasChanges(false);
      setValidationErrors([]);
      onClose();
    } else {
      setValidationErrors(validation.errors);
    }
  };

  const handleReset = () => {
    pdfExtractionConfigManager.resetToDefaults();
    setConfig(pdfExtractionConfigManager.getConfig());
    setHasChanges(false);
    setValidationErrors([]);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={1}>
          <SettingsIcon />
          <Typography variant="h6">Configuración de IA</Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        {validationErrors.length > 0 && (
          <Alert severity="error" sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Errores de validación:</Typography>
            {validationErrors.map((error, index) => (
              <Typography key={index} variant="body2">• {error}</Typography>
            ))}
          </Alert>
        )}

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Configuración de IA
          </Typography>
          
          <FormControlLabel
            control={
              <Switch
                checked={config.ai.enabled}
                onChange={(e) => handleConfigChange('ai.enabled', e.target.checked)}
              />
            }
            label="Habilitar IA"
          />
          
          <TextField
            label="API Key de OpenAI"
            type="password"
            value={config.ai.apiKey}
            onChange={(e) => handleConfigChange('ai.apiKey', e.target.value)}
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            helperText="Obtén tu API key en platform.openai.com"
          />

          <FormControl fullWidth size="small" sx={{ mt: 2 }}>
            <InputLabel>Modelo de IA</InputLabel>
            <Select
              value={config.ai.model}
              onChange={(e) => handleConfigChange('ai.model', e.target.value)}
              label="Modelo de IA"
            >
              <MenuItem value="gpt-4-vision">GPT-4 Vision (Recomendado)</MenuItem>
              <MenuItem value="gpt-4o">GPT-4o (Más económico)</MenuItem>
              <MenuItem value="claude-3-sonnet">Claude 3 Sonnet</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Máximo de reintentos"
            type="number"
            value={config.ai.maxRetries}
            onChange={(e) => handleConfigChange('ai.maxRetries', parseInt(e.target.value))}
            size="small"
            sx={{ mt: 2 }}
          />

          <TextField
            label="Timeout (ms)"
            type="number"
            value={config.ai.timeoutMs}
            onChange={(e) => handleConfigChange('ai.timeoutMs', parseInt(e.target.value))}
            size="small"
            sx={{ mt: 2 }}
          />

          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom>Umbral de confianza</Typography>
            <Slider
              value={config.ai.confidenceThreshold}
              onChange={(_, value) => handleConfigChange('ai.confidenceThreshold', value)}
              min={0}
              max={1}
              step={0.1}
              marks
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Configuración de Procesamiento
          </Typography>
          
          <TextField
            label="Tamaño máximo (MB)"
            type="number"
            value={config.processing.maxFileSize / (1024 * 1024)}
            onChange={(e) => handleConfigChange('processing.maxFileSize', parseInt(e.target.value) * 1024 * 1024)}
            size="small"
            sx={{ mt: 1 }}
          />

          <FormControlLabel
            control={
              <Switch
                checked={config.cache.enabled}
                onChange={(e) => handleConfigChange('cache.enabled', e.target.checked)}
              />
            }
            label="Habilitar caché"
            sx={{ mt: 1 }}
          />
        </Box>

        <Alert severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Nota:</strong> Para usar la IA, necesitas una API key válida de OpenAI o Anthropic.
            Los costos varían según el modelo y el uso.
          </Typography>
        </Alert>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleReset} color="warning">
          Restablecer
        </Button>
        <Button onClick={onClose}>Cancelar</Button>
        <Button 
          onClick={handleSave} 
          variant="contained" 
          disabled={!hasChanges}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}; 
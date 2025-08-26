import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { FileText, Upload } from 'lucide-react';
import { PDFPrescriptionUploader } from '@/components/PDFPrescriptionUploader';
import { ExtractedPrescriptionData } from '@/utilities/pdfExtractor';

interface PDFUploadIntegrationProps {
  onDataLoaded: (data: ExtractedPrescriptionData) => void;
  disabled?: boolean;
}

export const PDFUploadIntegration: React.FC<PDFUploadIntegrationProps> = ({
  onDataLoaded,
  disabled = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrescriptionSelect = (prescription: ExtractedPrescriptionData) => {
    onDataLoaded(prescription);
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleOpenModal}
        disabled={disabled}
        startIcon={<Upload size={20} />}
        sx={{
          borderRadius: 2,
          textTransform: 'none',
          py: 1.5,
          px: 3,
          borderStyle: 'dashed',
          '&:hover': {
            borderStyle: 'solid',
          }
        }}
      >
        Cargar desde PDF
      </Button>

      <PDFPrescriptionUploader
        open={isModalOpen}
        onClose={handleCloseModal}
        onPrescriptionSelect={handlePrescriptionSelect}
      />
    </Box>
  );
};

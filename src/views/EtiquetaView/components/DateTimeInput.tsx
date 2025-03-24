// components/DateTimeInput.tsx
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { colorsKarbono } from '@/themes/colors'; // Ajusta la ruta según tu proyecto
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/es'; // Localización en español

interface DateTimeInputProps {
  title: string;
  initialValue?: string; // Valor inicial en formato ISO o similar
  onChange: (value: string) => void; // Callback para manejar el cambio
  isPdfMode?: boolean; // Para modo PDF, solo muestra el valor
  color?: string;
  sizeTitle?: number;
  sizeText?: number;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({
  title,
  initialValue,
  onChange,
  isPdfMode = false,
  sizeText = 14,
  sizeTitle = 14,
  color = colorsKarbono.primary,
}) => {
  const [value, setValue] = useState<Dayjs | null>(
    initialValue ? dayjs(initialValue) : null
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    if (newValue) {
      onChange(newValue.toISOString()); // Devuelve el valor en formato ISO
    } else {
      onChange(''); // Si se borra, devuelve cadena vacía
    }
  };

  return (
    <Stack direction="column" spacing={1} width="100%">
      <Typography
        style={{
          color: color,
          fontSize:sizeTitle,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>

      {isPdfMode ? (
        <Typography fontSize={sizeText} fontWeight={700}>
          {value ? value.format('DD/MM/YYYY HH:mm') : '-'}
        </Typography>
      ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DateTimePicker
            value={value}
            onChange={handleChange}
            slotProps={{
              textField: {
                size: 'small',
                sx: {
                  '& .MuiInputBase-root': {
                    backgroundColor: '#EDF1F1',
                    borderRadius: '20px',
                    '& fieldset': { borderColor: '#EDF1F1' },
                    '&:hover fieldset': { borderColor: color },
                    '& .MuiInputBase-input': {
                      fontSize: `${sizeText}px`,
                      padding: '8px 12px',
                    },
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      )}
    </Stack>
  );
};

export default DateTimeInput;
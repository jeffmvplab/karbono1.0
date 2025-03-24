import { useState } from "react";
import { Stack, TextField, Chip, Typography } from "@mui/material";
import { colorsKarbono } from "@/themes/colors";

interface TagInputProps {
  title: string;
  sizeTitle?: number;
  sizeText?: number;
  initialValues?: string[];
  color?: string;
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  isPdfMode?: boolean; // Nueva prop para modo PDF
}

const TagInput: React.FC<TagInputProps> = ({
  title,
  initialValues = [],
  color = colorsKarbono.primary,
  sizeText = 14,
  sizeTitle = 14,
  direction="column" as "column" | "row" | "row-reverse" | "column-reverse",
  isPdfMode = false, // Por defecto, no está en modo PDF
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>(initialValues);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputValue.trim()) {
      event.preventDefault();
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (tagToDelete: string) => () => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Stack direction={`${direction}`} spacing={1} width="100%">
      <Typography
        style={{
          color: color,
          fontSize:sizeTitle, // Reducimos tamaño para PDF
          fontWeight: "semibold",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>

      {/* Solo mostrar TextField si no está en modo PDF */}
      {!isPdfMode && (
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nombre y apellidos, presiona Enter"
          variant="outlined"
          size="small"
          sx={{
            bgcolor: "#EDF1F1",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              "& fieldset": { borderColor: "#EDF1F1" },
              "&:hover fieldset": { borderColor: color },
            },
          }}
        />
      )}

      {/* Lista de tags */}
      <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={!isPdfMode ? handleDelete(tag) : undefined} // Sin eliminación en modo PDF
              sx={{
                bgcolor: "#EDF1F1",
                fontWeight: "semibold",
                fontSize:sizeText, // Tamaño menor para PDF
                borderRadius: "20px",
              }}
            />
          ))
        ) : (
          <Typography fontSize={sizeText} color="textSecondary">
            -
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default TagInput;

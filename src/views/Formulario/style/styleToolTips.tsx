import { colorsKarbono } from "@/themes/colors";
import styled from "@emotion/styled";
import { TooltipProps, Tooltip, tooltipClasses } from "@mui/material";

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (

    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: colorsKarbono.primary,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: colorsKarbono.primary,
        color: 'white',
        fontSize: 16,

    },
}));
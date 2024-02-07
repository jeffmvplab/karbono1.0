import { colorsKarbono } from '@/themes/colors'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FormulariosContext } from '../context/FormulariosContext';
import { LightTooltip } from '../style/styleToolTips';
import { getPotacioTotal, getSodioTotal } from '@/views/ReportePrescripcion/data/functionsParams';


const Observaciones = () => {

    const {
        tipoPrescripcion, tipoPaciente,
        stateAcordion3, setStateAcordion3, matches, handleAcordion3,
        prescriptionSave,
        sodioTotal, handleSodioTotal,
        potacioTotal, handlePotacioTotal,
        fosfato, handleFosfato,
        requerimientoFosfato, handleRequerimientoFosfato,
        calcio, handleCalcio,
        reqCalcio, handleReqCalcio,
        magnesio, handleMagnesio,
        reqMagnesio, handleReqMagnesio,
        elementosTraza, handleElementosTraza,
        reqTraza, handleReqTraza,
        vitaminasHidrosolubles, handleVitaminasHidrosolubles,
        reqVitHidrosolubles, handleReqVitHidrosolubles,
        vitaminasLiposolubles, handleVitaminasLiposolubles,
        vitaminasC, handleVitaminasC,
        acidoFolico, handleAcidoFolico,
        getPrescriptions
    } = useContext(FormulariosContext)

    useEffect(() => {
        setStateAcordion3(matches);
    }, [matches])

    // console.log('Magnesio:', magnesio)
    /////////////////////////////////////////////////////////////////////

    return (

        <Stack direction={'column'} bgcolor={'green'}>
            <h1>Observaciones</h1>

        </Stack>
    )
}

export default Observaciones

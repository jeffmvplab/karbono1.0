import { colorsKarbono } from '@/themes/colors'
import { Stack } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CustomTextField from './CustomTextField'
import { FormulariosContext } from '../context/FormulariosContext';
import { CustomButton } from '@/components/CustomButton';
import SendIcon from '@mui/icons-material/Send';
import { IComment } from '@/domain/models/observaciones.model';
import { ContainerComments } from '@/views/ReportePrescripcion/ReportePrescripcionView';
import { formatearFechaEsp } from '@/utilities/get_String_from_Date';

const Observaciones = () => {

    const {
        saveComments,
        prescriptionCharge,
        getPrescriptionsByNumber
    } = useContext(FormulariosContext)


    const [isNew, setIsNew] = useState<boolean>(false);
    const [newObs, setnewObs] = useState<string>();
    // console.log('Magnesio:', magnesio)
    /////////////////////////////////////////////////////////////////////

    // console.log('PRESCRIP BY NUM:', prescriptionCharge)

    return (

        <Stack direction={'column'} minHeight={200} justifyContent={'end'}>

            <Stack direction={'row'} justifyContent={'flex-end'} paddingY={2}>
                <CustomButton
                    // disabled={!valOKAlert}
                    onClick={
                        (!isNew)
                            ? () => { setIsNew(true) }
                            : async () => {
                                const newComment: IComment = {
                                    prescriptionId: prescriptionCharge?._id!,
                                    comentario: newObs!,
                                    // estado:' ',
                                    // estado: StatePrescriptionKeysEnum.pendiente,
                                }
                                await saveComments(newComment)
                                await getPrescriptionsByNumber()
                                setIsNew(false)
                            }
                    }
                    width={220}
                    height={50}
                    text={(isNew) ? 'Guardar' : 'Crear Observacion'}
                    sx={{ borderRadius: '10px' }}
                    color={colorsKarbono.primary}
                    textColor='white'
                    endIcon={(!isNew) ? <SendIcon sx={{ color: 'white' }} /> : <></>}
                />
            </Stack>

            {isNew
                && <Stack direction={'row'} padding={4} >
                    <CustomTextField
                        onChange={(e) => setnewObs(e.target.value)}
                        id='Observacion'
                        label='Agrega una observación o comentario.'
                        type='text'
                        value={newObs}
                    // defaulValue={numIden!}
                    // helperText={messageErrorNumIden}
                    />
                </Stack>
            }
            <Stack direction={'row'} padding={4} >

                <Stack direction={'column'} spacing={3} width={'100%'}>
                    {prescriptionCharge?.observaciones?.map((item, index) => {
                        return (

                            // <CustomTextField
                            //     key={index}
                            //     // onChange={handleNumIden}
                            //     id='Observacion'
                            //     label='Observaciones'
                            //     type='text'
                            //     value={item}
                            // // defaulValue={numIden!}
                            // // helperText={messageErrorNumIden}
                            // />
                            <ContainerComments
                                key={index}
                                user={item.usuario}
                                rol={item.rol![0]}
                                date={formatearFechaEsp(item.fecha!.toString())}
                                content={item.comentario}
                            />
                        )
                    })
                    }
                </Stack>
            </Stack>

        </Stack>
    )
}

export default Observaciones

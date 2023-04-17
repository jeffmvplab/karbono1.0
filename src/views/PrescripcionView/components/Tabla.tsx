import React, { useContext, useEffect } from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { Hidden } from '@mui/material';
import { PrescripcionContext } from '../context/PrescripcionContext';





const Tabla = () => {

  const columns = []


  const data = [
    { paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
    { paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
    { paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
    { paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
    { paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
    { paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
    { paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
    { paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
  ];
  
	const {getAll} = useContext(PrescripcionContext)

  useEffect(() => {
    getAll(2);
  },[])
  

  return (
    <>
      <TableContainer style={{ margin: '0 20px' }}>
        <Table style={{ margin: '0' }}>
          <TableHead style={{}}>
            <TableRow style={{ backgroundColor: '#372FC6', borderRadius: '10 0 10 0' }}>
              <TableCell style={{ color: '#fff', justifyContent: 'center' }}>Paciente</TableCell>
              <TableCell style={{ color: '#fff', justifyContent: 'center' }}>Identificación</TableCell>
              <Hidden smDown>
              <TableCell style={{ color: '#fff', justifyContent: 'center' }}>Ips</TableCell>
                <TableCell style={{ color: '#fff', justifyContent: 'center' }}>Tipo Prescripción</TableCell>
                <TableCell style={{ color: '#fff', justifyContent: 'center' }}>Creación</TableCell>
                <TableCell style={{ color: '#fff', justifyContent: 'center' }}>Usuario</TableCell>
                <TableCell style={{ color: '#fff', justifyContent: 'center' }}>Acciones</TableCell>
              </Hidden>
            </TableRow>
          </TableHead>

          <TableBody >
            {data.map(casilla => (
              // eslint-disable-next-line react/jsx-key
              <TableRow >
                <TableCell>{casilla.paciente}</TableCell>
                <TableCell>{casilla.identificación}</TableCell>
                <Hidden smDown>
                <TableCell>{casilla.ips}</TableCell>
                  <TableCell>{casilla.tipo}</TableCell>
                  <TableCell>{casilla.creación}</TableCell>
                  <TableCell>{casilla.usuario}</TableCell>
                  <TableCell><PictureAsPdfOutlinedIcon sx={{ marginRight: '10px' }} /><ModeEditOutlineOutlinedIcon /></TableCell>
                </Hidden>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  )
}

export default Tabla

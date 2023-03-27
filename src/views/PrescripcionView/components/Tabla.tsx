import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';





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



  return (
    <>
      <TableContainer style={{margin: '0 20px' }}>
        <Table>
          <TableHead  style={{ }}>
            <TableRow style={{backgroundColor:'#372FC6', borderRadius:'10 0 10 0'}}>
              <TableCell style={{color:'#fff', justifyContent:'center'}}>Paciente</TableCell>
              <TableCell style={{color:'#fff', justifyContent:'center'}}>Identificación</TableCell>
              <TableCell style={{color:'#fff', justifyContent:'center'}}>Ips</TableCell>
              <TableCell style={{color:'#fff', justifyContent:'center'}}>Tipo Prescripción</TableCell>
              <TableCell style={{color:'#fff', justifyContent:'center'}}>Creación</TableCell>
              <TableCell style={{color:'#fff', justifyContent:'center'}}>Usuario</TableCell>
              <TableCell style={{color:'#fff', justifyContent:'center'}}>Acciones</TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(celda=>(
              // eslint-disable-next-line react/jsx-key
              <TableRow>
                <TableCell>{celda.paciente}</TableCell>
                <TableCell>{celda.identificación}</TableCell>
                <TableCell>{celda.ips}</TableCell>
                <TableCell>{celda.tipo}</TableCell>
                <TableCell>{celda.creación}</TableCell>
                <TableCell>{celda.usuario}</TableCell>
                <TableCell><PictureAsPdfOutlinedIcon sx={{marginRight:'10px'}} /><ModeEditOutlineOutlinedIcon /></TableCell>  
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  )
}

export default Tabla

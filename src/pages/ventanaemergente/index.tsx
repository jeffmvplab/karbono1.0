
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import ReportePrescripcionView from '@/views/ReportePrescripcion/ReportePrescripcionView'
import ReportePrescripcionLayout from '@/layouts/ReportePrescripcionLayout copy/ReportePrescripcionLayout'

import VentanaEmergenteView from '@/views/VentanaEmergente/VentanaEmergenteView'



const VentanaEmergentePages: NextPageWithLayout = () => {


  return (
    
       <VentanaEmergenteView/>
  
  )
}
VentanaEmergentePages.getLayout = function getLayout(page: ReactElement) {

  return ( 
    <ReportePrescripcionLayout>   
        {page}
    </ReportePrescripcionLayout>
  )
}

export default VentanaEmergentePages


import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import ReportePrescripcionView from '@/views/ReportePrescripcion/ReportePrescripcionView'
import ReportePrescripcionLayout from '@/layouts/ReportePrescripcionLayout copy/ReportePrescripcionLayout'


const ReportePrescripcionPages: NextPageWithLayout = () => {


  return (
    
       <ReportePrescripcionView/>
  
  )
}
ReportePrescripcionPages.getLayout = function getLayout(page: ReactElement) {

  return ( 
    <ReportePrescripcionLayout>   
        {page}
    </ReportePrescripcionLayout>
  )
}

export default ReportePrescripcionPages

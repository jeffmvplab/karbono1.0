
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { PrescripcionView } from '@/views/PrescripcionView'
import { PrescripcionProvider } from '@/views/PrescripcionView/context/PrescripcionProvider'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'


const PrescripcionPages: NextPageWithLayout = () => {


  return (
    
       <PrescripcionView/>
  
  )
}
PrescripcionPages.getLayout = function getLayout(page: ReactElement) {

  return ( 
    <PrescripcionLayout>   
        {page}
    </PrescripcionLayout>
  )
}

export default PrescripcionPages

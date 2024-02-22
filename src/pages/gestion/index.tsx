
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import { AuditoriaView } from '@/views/AuditoriaView'
import GestionPrescripcionesView from '@/views/GestionDePrescripcionesView/GestionPrescripcionesView'


const GestionPages: NextPageWithLayout = () => {


  return (
    // <AuditoriaProvider>
      <GestionPrescripcionesView />
    // </AuditoriaProvider>

  )
}
GestionPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <PrescripcionLayout>
      {page}
    </PrescripcionLayout>
  )
}


export default GestionPages

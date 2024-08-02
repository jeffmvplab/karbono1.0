
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { PrescripcionView } from '@/views/PrescripcionView'
import { PrescripcionProvider } from '@/views/PrescripcionView/context/PrescripcionProvider'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import { MainLayout } from '@/layouts/MainLayout'
import { AyudaView } from '@/views/AyudaView'
import { EtiquetaView } from '@/views/EtiquetaView'
import PlanProduccionView from '../../../public/assets/PlanProduccionView'
import { ReportesProvider } from '@/views/ReportePrescripcion/context/ReportesProvider'


const PlanProduccionPages: NextPageWithLayout = () => {


  return (
    <ReportesProvider>
      <PlanProduccionView />
    </ReportesProvider>

  )
}

PlanProduccionPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default PlanProduccionPages

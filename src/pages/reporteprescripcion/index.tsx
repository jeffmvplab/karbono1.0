
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import ReportePrescripcionView from '@/views/ReportePrescripcion/ReportePrescripcionView'
import ReportePrescripcionLayout from '@/layouts/ReportePrescripcionLayout copy/ReportePrescripcionLayout'
import { ReportesProvider } from '@/views/ReportePrescripcion/context/ReportesProvider'


const ReportePrescripcionPages: NextPageWithLayout = () => {


  return (
    <ReportesProvider>
      <ReportePrescripcionView />
    </ReportesProvider>

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

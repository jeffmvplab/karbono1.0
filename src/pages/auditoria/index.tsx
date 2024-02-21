
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import { AuditoriaView } from '@/views/AuditoriaView'


const AuditoriaPages: NextPageWithLayout = () => {


  return (
    // <AuditoriaProvider>
      <AuditoriaView />
    // </AuditoriaProvider>

  )
}
AuditoriaPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <PrescripcionLayout>
      {page}
    </PrescripcionLayout>
  )
}


export default AuditoriaPages

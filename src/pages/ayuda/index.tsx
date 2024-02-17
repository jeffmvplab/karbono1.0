
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { PrescripcionView } from '@/views/PrescripcionView'
import { PrescripcionProvider } from '@/views/PrescripcionView/context/PrescripcionProvider'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import { MainLayout } from '@/layouts/MainLayout'
import { AyudaView } from '@/views/AyudaView'


const AyudaPages: NextPageWithLayout = () => {


  return (
    // <PrescripcionProvider>
      <AyudaView />
    // </PrescripcionProvider>

  )
}

AyudaPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default AyudaPages

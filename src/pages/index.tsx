
import { MainLayout } from '@/layouts/MainLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { HomeView } from '@/views/HomeView'


const HomeMain: NextPageWithLayout = () => {


  return < HomeView />
}


HomeMain.getLayout = function getLayout(page: ReactElement) {

  return (
    <MainLayout >
      {page}
    </MainLayout>
  )
}

export default HomeMain

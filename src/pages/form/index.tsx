
import { MainLayout } from '@/layouts/MainLayout'
import { ReactElement } from 'react'
import { HomeView } from '@/views/HomeView'
import { NextPageWithLayout } from '@/pages/_app'
import { FormView } from '@/views/FormView'


const FormPages: NextPageWithLayout = () => {


  return <FormView/>
}
FormPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default FormPages

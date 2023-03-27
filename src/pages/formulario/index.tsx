
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { MainLayout } from '@/layouts/MainLayout'
import FormView from '@/views/Formulario/FormView'
import { FormMovilLayout } from '@/layouts/FormMovilLayout'


const FormPages: NextPageWithLayout = () => {


  return (
    <FormMovilLayout>
      <FormView />
    </FormMovilLayout>
  )
}
FormPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default FormPages

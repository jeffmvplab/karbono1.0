
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { MainLayout } from '@/layouts/MainLayout'
import FormView from '@/views/Formulario/FormView'
import { FormMovilLayout } from '@/layouts/FormMovilLayout'
import { FormulariosProvider } from '@/views/Formulario/context/FormulariosProvider'


const FormPages: NextPageWithLayout = () => {


  return (
    <FormulariosProvider>
      <FormMovilLayout>
        <FormView />
      </FormMovilLayout>
    </FormulariosProvider>
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

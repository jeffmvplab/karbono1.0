
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { MainLayout } from '@/layouts/MainLayout'
import FormView from '@/views/Formulario/FormView'


const FormPages: NextPageWithLayout = () => {


  return (
    
       <FormView/>
  
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

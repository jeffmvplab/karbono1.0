
import { MainLayout } from '@/layouts/components'
import { ReactElement } from 'react'
import { HomeView } from '@/views/HomeView'
import { NextPageWithLayout } from '@/pages/_app'
import { RegisterView } from '@/views/RegisterView'


const RegisterPage: NextPageWithLayout = () => {


  return <RegisterView />
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {

  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default RegisterPage

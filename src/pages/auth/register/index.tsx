
import { MainLayout } from '@/layouts/MainLayout'
import { ReactElement } from 'react'
import { HomeView } from '@/views/HomeView'
import { NextPageWithLayout } from '@/pages/_app'
import { AuthLayout } from '@/layouts/AuthLayout'
import { RegisterView } from '@/views/auth/RegisterView'


const RegisterPage: NextPageWithLayout = () => {


  return <RegisterView />
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <AuthLayout>
        {page}
      </AuthLayout>
  )
}

export default RegisterPage

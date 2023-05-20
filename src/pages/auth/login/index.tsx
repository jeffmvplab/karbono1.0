
import { MainLayout } from '@/layouts/MainLayout'
import { ReactElement } from 'react'
import { HomeView } from '@/views/HomeView'
import { NextPageWithLayout } from '@/pages/_app'
import { LoginView } from '@/views/auth/LoginView'
import { AuthLayout } from '@/layouts/AuthLayout'


const LoginPage: NextPageWithLayout = () => {


  return <LoginView />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <AuthLayout>
        {page}
      </AuthLayout>
  )
}

export default LoginPage

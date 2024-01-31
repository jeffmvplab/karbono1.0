
import { MainLayout } from '@/layouts/MainLayout'
import { ReactElement } from 'react'
import { HomeView } from '@/views/HomeView'
import { NextPageWithLayout } from '@/pages/_app'
import { LoginView } from '@/views/auth/LoginView'
import { AuthLayout } from '@/layouts/AuthLayout'
import { RecuperarPasswordView } from '@/views/auth/ReuperarPasswordView'


const RecuperarPasswordPage: NextPageWithLayout = () => {


  return <RecuperarPasswordView/>
}

RecuperarPasswordPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <AuthLayout>
        {page}
      </AuthLayout>
  )
}

export default RecuperarPasswordPage

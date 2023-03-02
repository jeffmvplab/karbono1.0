
import { MainLayout } from '@/layouts/components'
import { ReactElement } from 'react'
import { HomeView } from '@/views/HomeView'
import { NextPageWithLayout } from '@/pages/_app'
import { LoginView } from '@/views/LoginView'


const LoginPage: NextPageWithLayout = () => {


  return <LoginView />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {

  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default LoginPage

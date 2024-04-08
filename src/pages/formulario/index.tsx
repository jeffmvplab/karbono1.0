
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { MainLayout } from '@/layouts/MainLayout'
import FormView from '@/views/Formulario/FormView'
import { FormMovilLayout } from '@/layouts/FormMovilLayout'
import { FormulariosProvider } from '@/views/Formulario/context/FormulariosProvider'
import { mainRoutes } from '@/routes/routes'
import { CookiesKeysEnum } from '@/utilities/enums'
import { GetServerSideProps } from 'next'
import { PrescripcionProvider } from '@/views/PrescripcionView/context/PrescripcionProvider'


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


//////////////////////////////////////////////////////////

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {


  const jwt: string | undefined = req.cookies[CookiesKeysEnum.token];

  // console.log('KK:',jwt)

  if (!jwt) {
    return {
      props: { user: null },

      redirect: {
        destination: mainRoutes.home,
      },
    }
  }

  return {
    props: { user: null }
  }


}

export default FormPages

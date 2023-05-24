
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { PrescripcionView } from '@/views/PrescripcionView'
import { PrescripcionProvider } from '@/views/PrescripcionView/context/PrescripcionProvider'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import { mainRoutes } from '@/routes/routes'
import { CookiesKeysEnum } from '@/utilities/enums'
import { GetServerSideProps } from 'next'


const PrescripcionPages: NextPageWithLayout = () => {


  return (
    // <PrescripcionProvider>
      <PrescripcionView />
    // </PrescripcionProvider>

  )
}
PrescripcionPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <PrescripcionLayout>
      {page}
    </PrescripcionLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req,res }) => {


  const jwt: string | undefined = req.cookies[CookiesKeysEnum.token];
 
   console.log('KK:',jwt)

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
export default PrescripcionPages

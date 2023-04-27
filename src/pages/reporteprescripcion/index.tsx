
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'
import ReportePrescripcionView from '@/views/ReportePrescripcion/ReportePrescripcionView'
import ReportePrescripcionLayout from '@/layouts/ReportePrescripcionLayout copy/ReportePrescripcionLayout'
import { ReportesProvider } from '@/views/ReportePrescripcion/context/ReportesProvider'
import { GetServerSideProps } from 'next'
import { LocalStorageProtocol } from '@/protocols/cache/local_cache'
import { CookiesKeysEnum, StorageKeysEnum } from '@/utilities/enums'
import { mainRoutes } from '@/routes/routes'


const ReportePrescripcionPages: NextPageWithLayout = () => {


  return (
    <ReportesProvider>
      <ReportePrescripcionView />
    </ReportesProvider>

  )
}
ReportePrescripcionPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <ReportePrescripcionLayout>
      {page}
    </ReportePrescripcionLayout>
  )
}


//////////////////////////////////////////////////////////

export const getServerSideProps: GetServerSideProps = async ({ req,res }) => {


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

export default ReportePrescripcionPages

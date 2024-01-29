
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import ReportePrescripcionView from '@/views/ReportePrescripcion/ReportePrescripcionView'
import ReportePrescripcionLayout from '@/layouts/ReportePrescripcionLayout copy/ReportePrescripcionLayout'
import { ReportesProvider } from '@/views/ReportePrescripcion/context/ReportesProvider'
import { GetServerSideProps } from 'next'
import { MainLayout } from '@/layouts/MainLayout'
import { GlobalProvider } from '@/context/GlobalProvider'
import { MiCuentaView } from '@/views/MiCuentaView'


const MiCuentaPages: NextPageWithLayout = () => {


  return (
    <GlobalProvider>
      <MiCuentaView />
    </GlobalProvider>

  )
}
MiCuentaPages.getLayout = function getLayout(page: ReactElement) {

  return (
    //  <MiCuentaLayout>
    <MainLayout>
      {page}
    </MainLayout>
    //  </MiCuentaLayout>
  )
}


//////////////////////////////////////////////////////////

// export const getServerSideProps: GetServerSideProps = async ({ req,res }) => {


//   const jwt: string | undefined = req.cookies[CookiesKeysEnum.token];

//    console.log('KK:',jwt)

//   if (!jwt) {
//     return {
//       props: { user: null },

//       redirect: {
//         destination: mainRoutes.home,
//       },
//     }
//   }

//   return {
//     props: { user: null }
//   }


// }

export default MiCuentaPages

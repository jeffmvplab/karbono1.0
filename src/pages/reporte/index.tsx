
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import ReportePrescripcionView from '@/views/ReportePrescripcion/ReportePrescripcionView'
import ReportePrescripcionLayout from '@/layouts/ReportePrescripcionLayout copy/ReportePrescripcionLayout'
import { ReportesProvider } from '@/views/ReportePrescripcion/context/ReportesProvider'
import { GetServerSideProps } from 'next'
import { MainLayout } from '@/layouts/MainLayout'


const ReportePrescripcionPages: NextPageWithLayout = () => {


  return (
    <ReportesProvider>
      <ReportePrescripcionView />
    </ReportesProvider>

  )
}
ReportePrescripcionPages.getLayout = function getLayout(page: ReactElement) {

  return (
    //  <ReportePrescripcionLayout>
    <MainLayout>
      {page}
    </MainLayout>
    //  </ReportePrescripcionLayout>
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

export default ReportePrescripcionPages

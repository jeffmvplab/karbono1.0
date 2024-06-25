
import { ReactElement, useContext } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { ArchivoPlanoView } from '@/views/ArchivoPlanoView'
import PrescripcionLayout from '@/layouts/PrescripcionLayout/PrescripcionLayout'



const ArchivoPlanoPages: NextPageWithLayout = () => {


  return (

      <ArchivoPlanoView />

  )
}
ArchivoPlanoPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <PrescripcionLayout>
    {page}
  </PrescripcionLayout>
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

export default ArchivoPlanoPages

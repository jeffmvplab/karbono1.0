
import { ReactElement, useContext } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { ReportesProvider } from '@/views/ReportePrescripcion/context/ReportesProvider'
import { GetServerSideProps } from 'next'
import { MainLayout } from '@/layouts/MainLayout'
import { convertirAPDF } from '@/utilities/view_pdf_convert'
import PDFPrescriptionComponent from '@/views/ReportePrescripcion/components/PDFPrescriptionComponent'
import { Stack, Avatar, Button } from '@mui/material'
import { IoPrintOutline } from 'react-icons/io5'
import style from 'styled-jsx/style'
import CloseIcon from '@mui/icons-material/Close';
import { ReportesContext } from '@/views/ReportePrescripcion/context/ReportesContext'
import PDFView from '@/views/PDFView/PDFView'



const PDFPages: NextPageWithLayout = () => {


  return (
    <ReportesProvider>
      <PDFView />
    </ReportesProvider>

  )
}
PDFPages.getLayout = function getLayout(page: ReactElement) {

  return (
    //  <PDFLayout>
    <MainLayout>
      {page}
    </MainLayout>
    //  </PDFLayout>
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

export default PDFPages

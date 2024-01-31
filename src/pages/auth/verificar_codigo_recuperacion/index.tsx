

import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { AuthLayout } from '@/layouts/AuthLayout'
import { VerificarCodigoRecuperacionView } from '@/views/auth/VerificarCodigoRecuperacionView'


const VerificarCodigoRecuperacionPage: NextPageWithLayout = () => {


  return <VerificarCodigoRecuperacionView/>
}

VerificarCodigoRecuperacionPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <AuthLayout>
        {page}
      </AuthLayout>
  )
}

export default VerificarCodigoRecuperacionPage

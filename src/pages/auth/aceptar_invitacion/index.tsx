
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { LoginView } from '@/views/auth/LoginView'
import { AuthLayout } from '@/layouts/AuthLayout'
import { AceptarInvitacionView } from '@/views/auth/AceptarInvitacion'


const AceptarInvitacionPage: NextPageWithLayout = () => {

  return <AceptarInvitacionView />
}

AceptarInvitacionPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <AuthLayout>
        {page}
      </AuthLayout>
  )
}

export default AceptarInvitacionPage

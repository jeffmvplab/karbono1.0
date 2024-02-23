import { MainLayout } from "@/layouts/MainLayout"
import { PlanProduccionView } from "@/views/PlanProduccionView"
import { NextPageWithLayout } from "../_app"
import { ReactElement } from "react"

const PlanProduccionPages: NextPageWithLayout = () => {


  return (
    // <PrescripcionProvider>
      <PlanProduccionView/>
    // </PrescripcionProvider>

  )
}

PlanProduccionPages.getLayout = function getLayout(page: ReactElement) {

  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default PlanProduccionPages

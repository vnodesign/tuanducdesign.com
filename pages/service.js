import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Header from '@/components/service/Header'
import InfoService from '@/components/service/InfoService'
import Tools from '@/components/service/Tools'
import ServiceSelection from '@/components/service/ServiceSelection'
import OSVPS from '@/components/service/OSVPS'
import SourceCode from '@/components/service/SourceCode'
import Provider from '@/components/service/Provider'
import Pricing from '@/components/service/Pricing'
import Faq from '@/components/service/Faq'

export default function Service() {
  return (
    <>
      <PageSEO
        title={`Dịch vụ - ${siteMetadata.title}`}
        description="Tối ưu VPS và Website của bạn với các dịch vụ tốt nhất tại Tuan Duc Design."
        breadcrumb={true}
      />
      <div className="vno-mb-20 vno-overflow-hidden sm:vno-mb-32 md:vno-mb-40">
        <Header />
        <InfoService />
      </div>
      <Tools />
      <div className="vno-flex vno-flex-col vno-pt-20 vno-mb-20 vno-overflow-hidden vno-gap-y-20 sm:vno-pt-32 sm:vno-mb-32 sm:vno-gap-y-32 md:vno-pt-40 md:vno-mb-40 md:vno-gap-y-40">
        <ServiceSelection />
        <OSVPS />
        <SourceCode />
        <Provider />
        <Pricing />
        <Faq />
      </div>
    </>
  )
}

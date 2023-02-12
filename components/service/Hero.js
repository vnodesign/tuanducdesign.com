import Image from '@/components/Image'

export default function Hero() {
  return (
    <div className="vno-mx-auto vno-mt-20 vno-max-w-7xl vno-px-4 sm:vno-mt-24 sm:vno-px-6 md:vno-px-8 lg:vno-mt-32">
      <Image
        src="/static/google-pagespeed-insights.png"
        width={300}
        height={300}
        alt="Tối ưu điểm Google PageSpeed Insights"
        className="vno-relative vno-mx-auto vno-w-full vno-max-w-4xl vno-rounded-3xl vno-border vno-border-gray-300 vno-shadow-2xl dark:vno-border-gray-700"
        sizes="(max-width 300px) 80vw, 50vw"
        priority
      />
    </div>
  )
}

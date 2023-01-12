export default function PageTitle({ children }) {
  return (
    <h1 className="vno-text-3xl vno-font-extrabold vno-leading-9 vno-tracking-tight vno-text-gray-900 dark:vno-text-gray-100 sm:vno-text-4xl sm:vno-leading-10 md:vno-text-5xl md:vno-leading-14">
      {children}
    </h1>
  )
}

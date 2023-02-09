import gtagTrack from '@/lib/utils/gtag'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects')
  return { props: { projects } }
}

function Site({ frontMatter, priority = false }) {
  return (
    <li className="vno-group vno-relative vno-rounded-3xl vno-bg-slate-50 vno-p-6 hover:vno-bg-slate-100 dark:vno-bg-slate-800/80 dark:vno-highlight-white/5 dark:hover:vno-bg-slate-700/50">
      <div className="vno-relative vno-aspect-[336/247] vno-transform vno-overflow-hidden vno-rounded-md vno-bg-slate-200 vno-shadow-[0_2px_8px_rgba(15,23,42,0.08)] dark:vno-bg-slate-700">
        <Image
          src={frontMatter.images}
          alt={frontMatter.title}
          className="vno-absolute vno-inset-0 vno-h-full vno-w-full"
          width="336"
          height="247"
          priority={priority}
          sizes="(max-width 336px) 80vw, 50vw"
        />
      </div>
      <div className="vno-mt-6 vno-flex vno-flex-wrap vno-items-center">
        <h2 className="vno-text-sm vno-font-semibold vno-leading-6 vno-text-slate-900 group-hover:vno-text-sky-500 dark:vno-text-white dark:group-hover:vno-text-sky-400">
          <Link
            href={`/projects/${frontMatter.slug}`}
            title={frontMatter.title}
            onClick={() => gtagTrack('ProjectsLink', `/projects/${frontMatter.slug}`)}
          >
            <span className="vno-absolute vno-inset-0 vno-rounded-3xl" />
            {frontMatter.title}
          </Link>
        </h2>
        <p className="vno-ml-2 vno-rounded-full vno-border vno-border-transparent vno-bg-sky-100 vno-px-1.5 vno-text-[0.6875rem] vno-font-semibold vno-leading-5 vno-text-sky-500 dark:vno-bg-slate-600/50 dark:vno-text-slate-200 dark:group-hover:vno-bg-sky-500 dark:group-hover:vno-text-white">
          {frontMatter.projectsStatus}
        </p>
        <svg
          className="vno-h-6 vno-w-6 vno-flex-none vno-opacity-0 group-hover:vno-opacity-100"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
            stroke="#0EA5E9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">
          {frontMatter.summary}
        </p>
      </div>
    </li>
  )
}

export default function Projects({ projects }) {
  return (
    <>
      <PageSEO
        title={`Dự án - ${siteMetadata.title}`}
        description={siteMetadata.description}
        breadcrumb={true}
      />
      <div className="vno-relative vno-mt-16 vno-mb-32 sm:vno-mt-20">
        <Image
          src={require('@/img/projects/beams@75.jpg')}
          alt="Background Light"
          className="vno-pointer-events-none vno-absolute vno-top-[-6.25rem] vno-left-1/2 vno-ml-[-46.875rem] vno-hidden vno-w-[67.8125rem] vno-max-w-none sm:vno-block dark:sm:vno-hidden"
          priority
        />
        <Image
          src={require('@/img/projects/beams-index-dark@75.jpg')}
          alt="Background Dark"
          className="vno-pointer-events-none vno-absolute vno-top-[-5rem] vno-left-1/2 vno-ml-[-40rem] vno-hidden vno-w-[41.1875rem] vno-max-w-none dark:vno-block"
          priority
        />
        <div className="vno-relative vno-mx-auto vno-max-w-3xl vno-px-4 sm:vno-px-6 sm:vno-text-center lg:vno-px-8">
          <h1 className="vno-text-sm vno-font-semibold vno-leading-6 vno-text-sky-500">Dự án</h1>
          <p className="vno-mt-6 vno-text-[2.5rem] vno-font-bold vno-leading-none vno-tracking-tight vno-text-slate-900 dark:vno-text-white sm:vno-text-6xl">
            Dự án do mình đóng góp và phát triển.
          </p>
        </div>
        <ul className="vno-mx-auto vno-mt-16 vno-grid vno-max-w-[26rem] vno-grid-cols-1 vno-gap-6 vno-px-4 sm:vno-mt-20 sm:vno-max-w-[52.5rem] sm:vno-grid-cols-2 sm:vno-px-6 md:vno-mt-32 lg:vno-max-w-7xl lg:vno-grid-cols-3 lg:vno-gap-y-8 lg:vno-px-8 xl:vno-gap-x-8">
          {projects.map((frontMatter, index) => (
            <Site key={frontMatter.title} frontMatter={frontMatter} priority={index < 6} />
          ))}
        </ul>
      </div>
    </>
  )
}

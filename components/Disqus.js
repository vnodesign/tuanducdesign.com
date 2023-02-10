import React, { useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const Disqus = ({ frontMatter }) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true)

  const COMMENTS_ID = 'disqus_thread'

  function LoadComments() {
    setEnabledLoadComments(false)

    window.disqus_config = function () {
      this.page.url = window.location.href
      this.page.identifier = frontMatter.slug
    }
    if (window.DISQUS === undefined) {
      const script = document.createElement('script')
      script.src = 'https://' + siteMetadata.comment.disqus.shortname + '.disqus.com/embed.js'
      script.setAttribute('data-timestamp', +new Date())
      script.setAttribute('crossorigin', 'anonymous')
      script.async = true
      document.body.appendChild(script)
    } else {
      window.DISQUS.reset({ reload: true })
    }
  }

  return (
    <div className="vno-text-center vno-text-slate-900 vno-pt-16 dark:vno-text-white">
      {enableLoadComments && (
        <button
          onClick={LoadComments}
          className="vno-bg-sky-500 vno-shadow vno-text-white vno-rounded-md vno-text-sm vno-border-y vno-border-transparent vno-py-2 vno-font-semibold vno-px-3 hover:vno-bg-sky-600 dark:hover:vno-bg-sky-400 focus:vno-outline-none focus:vno-ring-2 focus:vno-ring-offset-2 focus:vno-ring-sky-300 dark:focus:vno-ring-offset-slate-900 dark:focus:vno-ring-sky-700"
        >
          Load Comments
        </button>
      )}
      <div className="disqus-frame" id={COMMENTS_ID} />
    </div>
  )
}

export default Disqus

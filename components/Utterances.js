import React, { useState, useEffect, useCallback } from 'react'
import siteMetadata from '@/data/siteMetadata'

const Utterances = () => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true)

  const COMMENTS_ID = 'comments-container'

  const LoadComments = useCallback(() => {
    setEnabledLoadComments(false)
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', siteMetadata.comment.utterancesConfig.repo)
    script.setAttribute('issue-term', siteMetadata.comment.utterancesConfig.issueTerm)
    script.setAttribute('label', siteMetadata.comment.utterancesConfig.label)
    script.setAttribute('theme', siteMetadata.comment.utterancesConfig.theme)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)

    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [])

  // Reload on theme change
  useEffect(() => {
    const iframe = document.querySelector('iframe.utterances-frame')
    if (!iframe) return
    LoadComments()
  }, [LoadComments])

  return (
    <div className="vno-text-center vno-text-slate-900 vno-pt-16 dark:vno-text-white">
      {enableLoadComments && (
        <button
          onClick={LoadComments}
          className="vno-bg-sky-500 vno-shadow vno-text-white vno-rounded-md vno-text-sm vno-border-y vno-border-transparent vno-py-2 vno-font-semibold vno-px-3 hover:vno-bg-sky-600 dark:hover:vno-bg-sky-400 focus:vno-outline-none focus:vno-ring-2 focus:vno-ring-offset-2 focus:vno-ring-sky-300 dark:focus:vno-ring-offset-slate-900 dark:focus:vno-ring-sky-700"
        >
          Tải bình luận
        </button>
      )}
      <div className="utterances-frame vno-relative" id={COMMENTS_ID} />
    </div>
  )
}

export default Utterances

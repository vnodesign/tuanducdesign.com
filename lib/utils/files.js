import fs from 'fs'
import path from 'path'

const walkDir = (folder) => {
  const entries = fs.readdirSync(folder, { withFileTypes: true })

  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(folder, entry.name))

  const folders = entries
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => walkDir(path.join(folder, entry.name)))

  return [...files, ...folders]
}

export default walkDir

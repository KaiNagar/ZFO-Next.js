
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
let basePath = ''
const path = require('path')

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
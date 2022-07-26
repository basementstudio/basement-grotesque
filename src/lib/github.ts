const GITHUB_ACCOUNT = 'basementstudio'
const GITHUB_REPO = 'basement-grotesque'
const GITHUB_TAG = 'latest'

const GITHUB_SLUG = `${GITHUB_ACCOUNT}/${GITHUB_REPO}/releases/${GITHUB_TAG}`

type Asset = {
  browser_download_url: string
}

type GitHubRes = {
  assets: Asset[]
}

export const getReleaseLink = () => `https://github.com/${GITHUB_SLUG}`

export const getDownloadLink = async () => {
  const res = (await fetch(`https://api.github.com/repos/${GITHUB_SLUG}`).then(
    (res) => res.json()
  )) as GitHubRes
  return res.assets[0]?.browser_download_url
}

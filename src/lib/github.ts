const GITHUB_ACCOUNT = 'basementstudio'
const GITHUB_REPO = 'basement-grotesque'
const RELEASE_TAG = 'latest'
const URL = `https://api.github.com/repos/${GITHUB_ACCOUNT}/${GITHUB_REPO}/releases/${RELEASE_TAG}`

type Asset = {
  browser_download_url: string
}

type GitHubRes = {
  assets: Asset[]
}

export const getDownloadLink = async () => {
  const res = (await fetch(URL).then((res) => res.json())) as GitHubRes
  return res.assets[0]?.browser_download_url
}

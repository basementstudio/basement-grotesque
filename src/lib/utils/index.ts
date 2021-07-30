import { saveAs } from 'file-saver'

export async function download(url: string, fileName: string) {
  const res = await fetch(url)
  const blob = await res.blob()
  saveAs(blob, fileName)
}

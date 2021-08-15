import { saveAs } from 'file-saver'

export async function download(url: string, fileName: string) {
  const res = await fetch(url)
  const blob = await res.blob()
  saveAs(blob, fileName)
}

export const range = (start: number, stop?: number, step?: number) => {
  if (typeof stop === 'undefined') {
    // one param defined
    stop = start
    start = 0
  }

  if (typeof step === 'undefined') {
    step = 1
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return []
  }

  const result = []
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i)
  }

  return result
}

export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max)

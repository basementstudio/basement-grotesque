import { ResizeObserver } from '@juggle/resize-observer'
import _useMeasure, { Options } from 'react-use-measure'

export const useMeasure = (opts?: Options) => {
  return _useMeasure({ polyfill: ResizeObserver, ...opts })
}

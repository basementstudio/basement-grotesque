import throttle from 'lodash.throttle'
import { useState, useEffect } from 'react'

const getDeviceConfig = (width: number) => {
  if (width < 520) {
    return 'initial'
  } else if (width >= 520 && width < 900) {
    return 'bp1'
  } else if (width >= 900 && width < 1200) {
    return 'bp2'
  } else if (width >= 1200 && width < 1580) {
    return 'bp3'
  } else if (width >= 1580) {
    return 'bp4'
  }
}

export const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth))

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200)
    window.addEventListener('resize', calcInnerWidth)
    return () => window.removeEventListener('resize', calcInnerWidth)
  }, [])

  return brkPnt
}

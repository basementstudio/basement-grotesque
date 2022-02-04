import { useCallback, useState } from 'react'

export const useToggleState = (initialState = false) => {
  const [isOn, setIsOn] = useState(initialState)

  const handleOn = useCallback(() => {
    setIsOn(true)
  }, [])

  const handleOff = useCallback(() => {
    setIsOn(false)
  }, [])

  const handleToggle = useCallback(() => {
    setIsOn((p) => !p)
  }, [])

  return { isOn, handleToggle, handleOn, handleOff }
}

export type ToggleState = ReturnType<typeof useToggleState>

import { styled } from '@stitches/react'
import { useEffect, useRef } from 'react'

function syncHeights(textarea: HTMLTextAreaElement, div: HTMLDivElement) {
  const value = textarea.value.replace(/\n/g, '<br>')
  div.innerHTML = value + '<br style="line-height: 3px;">'
  div.style.display = 'block'
  textarea.style.height = div.offsetHeight + 'px'
  div.style.display = 'none'
}

export type TextareaProps = Omit<JSX.IntrinsicElements['textarea'], 'ref'> & {
  fontsLoaded: boolean
}

const Textarea = styled('textarea', {
  resize: 'none',
  outline: 'none',
  overflow: 'hidden',
  width: '100%'
})

const ResizableTextarea = ({
  value,
  style,
  fontsLoaded,
  ...textAreaProps
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const placeholderDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!fontsLoaded || !textareaRef.current) return
    function handler() {
      setTimeout(() => {
        if (!textareaRef.current || !placeholderDivRef.current) return
        syncHeights(textareaRef.current, placeholderDivRef.current)
      }, 0)
    }

    const observer = new MutationObserver(handler)

    observer.observe(textareaRef.current, {
      attributes: true,
      characterData: true,
      subtree: true,
      childList: true
    })

    handler()
    window.addEventListener('resize', handler)
    window.addEventListener('orientationchange', handler)

    return () => {
      window.removeEventListener('orientationchange', handler)
      window.removeEventListener('resize', handler)
      observer.disconnect()
    }
  }, [fontsLoaded])

  return (
    <div className="relative">
      <Textarea
        {...textAreaProps}
        style={style}
        value={value}
        ref={textareaRef}
      />
      <div
        style={{
          ...style,
          display: 'none',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          visibility: 'hidden'
        }}
        ref={placeholderDivRef}
      />
    </div>
  )
}

export default ResizableTextarea

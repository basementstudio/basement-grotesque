import { range } from 'lib/utils'
import Marquee from 'react-fast-marquee'
import { css } from '../../../../stitches.config'
import { toVw } from '../posters'

export const NFTMarquee = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Marquee
      gradient={false}
      className={css({ background: '$black', overflow: 'hidden' })().className}
    >
      <p
        className={css({
          height: '$$marqueeHeight',
          display: 'flex',
          alignItems: 'center',
          fontSize: toVw(13, 1920),
          fontFamily: '$mono',
          overflow: 'hidden'
        })()}
      >
        {children ?? <>{range(0, 20).map(() => `GM FREN WAGMI / `)}</>}
      </p>
    </Marquee>
  )
}

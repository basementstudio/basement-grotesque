import Marquee from 'react-fast-marquee'
import { css } from '../../../../stitches.config'

export const NFTTopMarquee = () => {
  return (
    <Marquee gradient={false}>
      <p
        className={css({ fontSize: '13px', fontFamily: '$mono', py: '12px' })()}
      >
        GM FREN WAGMI / GM FREN WAGMI / GM FREN WAGMI / GM FREN WAGMI / GM FREN
        WAGMI / GM FREN WAGMI / GM FREN WAGMI / GM FREN WAGMI / GM FREN WAGMI /
        GM FREN WAGMI / GM FREN WAGMI GM FREN WAGMI / GM FREN WAGMI / GM FREN
        WAGMI / GM FREN WAGMI / GM FREN WAGMI / GM FREN WAGMI / GM FREN WAGMI /
        GM FREN WAGMI / GM FREN WAGMI / GM FREN WAGMI / GM FREN WAGMI /{' '}
      </p>
    </Marquee>
  )
}

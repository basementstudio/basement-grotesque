import Link from 'next/link'

// Stitches
import { styled } from '../../../stitches.config'

const Heading = styled('header', {
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, .1)',
  border: '1px solid $white',
  color: '$white',
  fontWeight: 'bold',
  left: 0,
  margin: '32px 40px',
  mixBlendMode: 'difference',
  position: 'fixed',
  top: 0,
  width: 'calc(100% - 64px)',
  zIndex: '9998',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    div: {
      textAlign: 'center',
      borderRight: '1px solid $white',
      '&:last-of-type': {
        borderRight: 'none'
      }
    }
  }
})

const Header = () => {
  return (
    <Heading>
      <div>
        <div>
          <Link href="/">
            <a>
              <svg
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.40796 16.8232C7.40796 15.5733 8.42097 14.5603 9.67083 14.5603H13.2567C14.5066 14.5603 15.5196 15.5733 15.5196 16.8232V22.2571C15.5196 23.5069 14.5066 24.5199 13.2567 24.5199H9.67083C8.42097 24.5199 7.40796 23.5069 7.40796 22.2571V16.8232ZM7.17941 25.1339C7.17941 28.4158 9.83979 31 13.1217 31H16.7264C20.0589 31 22.7608 28.2982 22.7608 24.9657V14.0353C22.7608 10.7028 20.0589 8.00098 16.7264 8.00098H12.2007C9.54788 8.00098 7.39212 10.2171 7.37326 12.8692V0.0809326H0.13208V30.8492H7.17941V25.1339Z"
                  fill="white"
                />
                <path
                  d="M31.8121 24.5199H25.4761V30.8559H31.8121V24.5199Z"
                  fill="white"
                />
              </svg>
            </a>
          </Link>
        </div>
        <div>
          <p>Grotesque 400 / In Progress</p>
        </div>
        <div>
          <time>11:45:02</time>
        </div>
        <div>
          <Link href="/">
            <a>Download Font</a>
          </Link>
        </div>
      </div>
    </Heading>
  )
}

export default Header

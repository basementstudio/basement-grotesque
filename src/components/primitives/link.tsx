import React, { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

// Libs
import { checkIsExternal } from 'lib/utils/router'

// Styles
import { styled } from '../../../stitches.config'

type Props = {
  variant?: 'unstyled'
} & JSX.IntrinsicElements['a'] &
  Omit<NextLinkProps, 'as' | 'passHref'>

const Metis = styled('a', {
  position: 'relative',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  color: '$white',
  textTransform: 'uppercase',
  fontSize: '$6',
  display: 'flex',
  alignItems: 'center',

  '&:before': {
    background: 'currentcolor',
    content: '',
    height: '$1',
    left: 0,
    pointerEvents: 'none',
    position: 'absolute',
    top: '100%',
    transform: 'scale3d(0, 1, 1)',
    transformOrigin: '100% 50%',
    transition: 'transform 0.3s',
    width: '100%'
  },

  '&:hover:before': {
    transform: 'scale3d(1, 1, 1)',
    transformOrigin: '0 50%'
  },

  variants: {
    unstyled: {
      true: {
        '&:before': {
          content: 'initial'
        }
      }
    }
  }
})

const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className = '', variant, ...restProps }, ref) => {
    const {
      href,
      // NextLink Props
      replace,
      scroll,
      shallow,
      prefetch,
      // Rest
      ...aProps
    } = restProps

    const isExternal = checkIsExternal(href)

    return (
      <NextLink
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        passHref
      >
        <Metis
          {...aProps}
          className={className}
          ref={ref}
          rel={isExternal ? 'noopener' : undefined}
          target={isExternal ? '_blank' : undefined}
          unstyled={variant === 'unstyled'}
        >
          {children}
        </Metis>
      </NextLink>
    )
  }
)

export type LinkProps = React.ComponentPropsWithRef<typeof Link>
export default Link

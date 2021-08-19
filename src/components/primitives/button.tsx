import type * as Polymorphic from '@radix-ui/react-polymorphic'
import clsx from 'clsx'
import { forwardRef } from 'react'

// Styles
import { styled } from '../../../stitches.config'

// Here you'll put custom props, such as `isLoading`, `variant`, `size`...
export type ButtonProps = {
  children?: React.ReactNode
  isLoading?: boolean
  variant?: 'underlined'
}

const Metis = styled('button', {
  position: 'relative',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  color: '$white',
  textTransform: 'uppercase',
  fontSize: '$6',
  display: 'flex',
  alignItems: 'center',
  outline: 'none',

  '&:focus': {
    outline: 'none'
  },

  variants: {
    underlined: {
      true: {
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
        }
      }
    }
  }
})

/**
 * This `Button` is Polymorphic, so it can render any HTML element you pass (via the `as` prop).
 * Make it your own. Add variants, sizes, etc.
 *
 *
 * Look how easy is to create a ButtonLink:
 * ```tsx
 *   <Button as="a" href="https://google.com">My Button Link!</Button>
 * ```
 *
 * Also, below the `Button` is a `ButtonLink` that automatically wraps `NextLink` to it ✨
 */
const Button = forwardRef(
  ({ className, disabled, isLoading, variant, ...props }, ref) => {
    return (
      <Metis
        {...props}
        className={clsx(className)}
        disabled={isLoading || disabled}
        ref={ref}
        underlined={variant === 'underlined'}
      />
    )
  }
) as Polymorphic.ForwardRefComponent<'button', ButtonProps>

export default Button

import type * as Polymorphic from '@radix-ui/react-polymorphic'
import clsx from 'clsx'
import { forwardRef } from 'react'

// Styles
import { styled } from '../../../stitches.config'

// Here you'll put custom props, such as `isLoading`, `variant`, `size`...
export type ButtonProps = {
  children?: React.ReactNode
  icon?: boolean | React.ReactNode
  isLoading?: boolean
  variant?: 'underlined'
}

const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  transition: 'background-size 250ms',

  '&:focus': {
    outline: 'none'
  },

  variants: {
    underlined: {
      true: {
        background:
          'linear-gradient(to right, transparent, transparent), linear-gradient(to right, $colors$white, $colors$white)',
        backgroundSize: '100% 0.1em, 0 0.1em',
        backgroundPosition: '100% 100%, 0 100%',
        backgroundRepeat: 'no-repeat',
        '&:hover': {
          backgroundSize: '0 0.1em, 100% 0.1em'
        }
      }
    },
    hasIcon: {
      true: {
        svg: {
          ml: '8px',
          transition: 'all 250ms',
          fill: 'currentColor',
          color: 'transparent'
        },
        '&:hover': {
          svg: {
            color: '$white'
          }
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
  (
    { children, className, disabled, isLoading, variant, icon, ...props },
    ref
  ) => {
    return (
      <StyledButton
        {...props}
        className={clsx(className)}
        disabled={isLoading || disabled}
        ref={ref}
        underlined={variant === 'underlined'}
        hasIcon={!!icon}
      >
        {children} {icon && typeof icon !== 'boolean' ? icon : null}
      </StyledButton>
    )
  }
) as Polymorphic.ForwardRefComponent<'button', ButtonProps>

export default Button

import type * as Polymorphic from '@radix-ui/react-polymorphic'
import clsx from 'clsx'
import { forwardRef } from 'react'

type Props = {
  children?: React.ReactNode
}

const Container = forwardRef(
  ({ as: Comp = 'div', className, ...props }, ref) => {
    return (
      <Comp
        {...props}
        className={clsx(
          // TODO: Put some padding, max width, and margin-x auto in here!
          className
        )}
        ref={ref}
      />
    )
  }
) as Polymorphic.ForwardRefComponent<'div', Props>

export type ContainerProps = React.ComponentProps<typeof Container>

export default Container

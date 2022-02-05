declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const content: string

  export default ReactComponent
}

declare module 'locomotive-scroll' {
  export function getParents(elem: Element): Element[]
  export function queryClosestParent(
    elem: Element,
    selector: string
  ): Element | null
  export function transform(el: Element, transformValue: string): void
  export function getTranslate(el: Element): Vector2

  export type Vector2 = {
    x: number
    y: number
  }

  interface ScrollToOptions {
    /**
     * Defines an offset from your target. E.g. -100 if you want to scroll 100 pixels above your target.
     */
    offset?: number | string
    /**
     * Defines the duration of the scroll animation in milliseconds. Defaults to 1000.
     */
    duration?: number
    /**
     * An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing.
     *
     * Defaults to `[0.25, 0.00, 0.35, 1.00]`
     *
     * See http://greweb.me/bezier-easing-editor/example/
     *
     * Keep in mind this will also be affected by the lerp unless you set `disableLerp` to `true`.
     */
    easing?: [number, number, number, number]
    /**
     * Lerp effect won't be applied if set to true.
     */
    disableLerp?: boolean
    /**
     * Called when scrollTo completes (note that it won't wait for lerp to stabilize).
     */
    callback?: () => void
  }

  export interface LocomotiveScrollOptions {
    /** Scroll container element. */
    el?: Element
    /** Data attribute prefix (data-scroll-xxxx). */
    name?: string
    elMobile?: Element
    /**
     * Global in-view trigger offset : [bottom,top]
     * Use a string with % to use a percentage of the viewport height.
     * Use a numeric value for absolute pixels unit.
     */
    offset?: [number, number]
    /**
     * Repeat in-view detection.
     */
    repeat?: boolean
    /**
     * Smooth scrolling.
     */
    smooth?: boolean
    /**
     * An object defining the initial scroll coordinates on a smooth instance. For example: { x: 0, y: 1000 }
     */
    initPosition?: { x: number; y: number }
    /**
     * Scroll direction: vertical or horizontal.
     */
    direction?: 'vertical' | 'horizontal'
    /**
     * Linear interpolation (lerp) intensity. Float between 0 and 1.
     * This defines the "smoothness" intensity. The closer to 0, the smoother.
     */
    lerp?: number
    /**
     * Add direction to scroll event.
     */
    getDirection?: boolean
    /**
     * Add speed to scroll event.
     */
    getSpeed?: boolean
    /**
     * Element in-view class.
     */
    class?: string
    /**
     * Initialize class.
     */
    initClass?: string
    /**
     * Is scrolling class.
     */
    scrollingClass?: string
    /**
     * Is dragging class.
     */
    draggingClass?: string
    /**
     * Has smooth scrolling class.
     */
    smoothClass?: string
    /**
     * Scrollbar element class.
     */
    scrollbarClass?: string
    /**
     * Specifies the container element for the scrollbar to be appended in. If false, scrollbar will be appended to the body.
     */
    scrollbarContainer?: Element | false
    /**
     * Factor applied to the scroll delta, allowing to boost/reduce scrolling speed (regardless of the platform).
     */
    multiplier?: number
    /**
     * Boost scrolling speed of Firefox on Windows.
     */
    firefoxMultiplier?: number
    /**
     * Multiply touch action to scroll faster than finger movement.
     */
    touchMultiplier?: number
    /**
     * By default locomotive-scroll listens for scroll events only on the scroll container (`el` option). With this option set to true, it listens on the whole document instead.
     */
    scrollFromAnywhere?: boolean
    /**
     * Defines which gesture direction(s) scrolls in your instance. You can use:
     * - `vertical`
     * - `horizontal`
     * - `both`
     */
    gestureDirection?: 'vertical' | 'horizontal' | 'both'
    /**
     * Object allowing to override some options for a particular context. You can specify:
     * - `smooth`
     * - `direction`
     * - `horizontalGesture`
     *
     * For tablet context you can also define breakpoint (integer, defaults to 1024) to set the max-width breakpoint for tablets.
     */
    tablet?: {
      smooth?: boolean
      direction?: 'vertical' | 'horizontal'
      horizontalGesture?: boolean
      breakpoint?: number
    }
    /**
     * Object allowing to override some options for a particular context. You can specify:
     * - `smooth`
     * - `direction`
     * - `horizontalGesture`
     *
     * For tablet context you can also define breakpoint (integer, defaults to 1024) to set the max-width breakpoint for tablets.
     */
    smartphone?: {
      smooth?: boolean
      direction?: 'vertical' | 'horizontal'
      horizontalGesture?: boolean
    }
    /**
     * Allows to reload the page when switching between `desktop`, `tablet` and `smartphone` contexts. It can be useful if your page changes a lot between contexts and you want to reset everything.
     */
    reloadOnContextChange?: boolean
    /**
     * Sets `history.scrollRestoration = 'manual'` and calls `window.scrollTo(0, 0)` on locomotive-scroll init in Native Class. Useful if you use transitions with native scrolling, otherwise we advise to set it to `false` if you don't want to break History API's scroll restoration feature.
     */
    resetNativeScroll?: boolean
  }

  export type EventHandler = (data: {
    currentElements: Record<string, unknown>
    delta: { x: number; y: number }
    limit: { x: number; y: number }
    scroll: { x: number; y: number }
    speed: number
  }) => void

  export default class LocomotiveScroll implements LocomotiveScrollOptions {
    constructor(options?: LocomotiveScrollOptions)

    /**
     * Reinitializes the scroll.
     */
    init(): void
    /**
     * Scroller element.
     */
    el: HTMLElement
    /**
     * Updates all element positions.
     */
    update(): void
    /**
     * Destroys the scroll events.
     */
    destroy(): void
    /**
     * Restarts the scroll events.
     */
    start(): void
    /**
     * Stops the scroll events.
     */
    stop(): void
    /**
     * Scroll to a target.
     * @param target Defines where you want to scroll.
     * @param options Settings object.
     */
    scrollTo(
      target: Node | string | 'top' | 'bottom' | number,
      options?: ScrollToOptions
    ): void
    /**
     * todo, type this
     */
    on(event: 'scroll', handler: EventHandler): void
    /**
     * todo, type this
     */
    off(event: 'scroll', handler: EventHandler): void
  }

  export { LocomotiveScroll as Scroll }
}

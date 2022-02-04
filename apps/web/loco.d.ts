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
  export function lerp(start: number, end: number, amt: number)

  export type Vector2 = {
    x: number
    y: number
  }

  export type LocomotiveElementAttributes = {
    el: HTMLElement
    class: string
    top: number
    bottom: number
    offset: number
    repeat: boolean
    inView: boolean
    call: string
  }

  export type ScrollInstance = {
    scroll: Vector2
    limit: number
  }

  export class Core implements LocomotiveScrollOptions {
    el?: Element
    elMobile?: Element
    name?: string
    offset?: number
    repeat?: boolean
    smooth?: boolean
    smoothMobile?: boolean
    direction?: string
    inertia?: number
    class?: string
    scrollbarClass?: string
    scrollingClass?: string
    draggingClass?: string
    smoothClass?: string
    initClass?: string
    getSpeed?: boolean
    getDirection?: boolean

    namespace: string
    html: Element
    windowHeight: number
    windowMiddle: number
    els: Element[]
    hasScrollTicking: boolean
    hasCallEventSet: boolean
    instance: ScrollInstance

    constructor(options?: LocomotiveScrollOptions)

    init(): void
    checkScroll(): void
    checkResize(): void
    initEvents(): void
    setScrollTo(event: Event): void
    addElements(): void
    detectElements(hasCallEventSet: boolean): void
    setInView(current: LocomotiveElementAttributes, i: number): void
    setOutOfView(current: LocomotiveElementAttributes, i: number): void
    dispatchCall(current: LocomotiveElementAttributes, way: string): void
    dispatchScroll(): void
    setEvents(event: string, func: string | string[]): void
    startScroll(): void
    stopScroll(): void
    setScroll(x: number, y: number): void
    destroy(): void
  }

  interface ScrollToOptions {
    offset?: number | string
    duration?: number
    easing?: [number, number, number, number]
    disableLerp?: boolean
    callback?: () => void
  }

  export class Native extends Core {
    constructor(options?: LocomotiveScrollOptions)

    init(): void
    checkScroll(): void
    checkResize(): void
    addElements(): void
    updateElements(): void
    scrollTo(targetOption: string | Event, options?: ScrollToOptions): void
    update(): void
    destroy(): void
  }

  export class Smooth extends Core {
    isScrolling: boolean
    isDraggingScrollbar: boolean
    isTicking: boolean
    parallaxElements: Element[]
    inertiaRatio: number
    stop: boolean

    constructor(options?: LocomotiveScrollOptions)

    init(): void
    setScrollLimit(): void
    startScrolling(): void
    stopScrolling(): void
    checkKey(e: KeyboardEvent): void
    checkScroll(): void
    checkResize(): void
    updateDelta(e: WheelEvent): void
    updateScroll(e: Event): void
    addDirection(): void
    addSpeed(): void
    initScrollBar(): void
    reinitScrollBar(): void
    destroyScrollBar(): void
    getScrollBar(e: Event): void
    releaseScrollBar(e: Event): void
    moveScrollBar(e: MouseEvent): void
    addElements(): void
    addSections(): void
    transform(element: Element, x: number, y: number, delay: number): void
    transformElement(isForced: boolean): void
    scrollTo(targetOption: string | Event, options?: ScrollToOptions): void
    update(): void
    startScroll(): void
    stopScroll(): void
    setScroll(x: number, y: number): void
    destroy(): void
  }

  export interface LocomotiveScrollOptions {
    el?: Element
    elMobile?: Element
    name?: string
    offset?: number
    repeat?: boolean
    smooth?: boolean
    smoothMobile?: boolean
    direction?: string
    inertia?: number
    class?: string
    scrollbarClass?: string
    scrollingClass?: string
    draggingClass?: string
    smoothClass?: string
    initClass?: string
    getSpeed?: boolean
    getDirection?: boolean
    lerp?: number
  }

  export default class LocomotiveScroll implements LocomotiveScrollOptions {
    el?: Element
    elMobile?: Element
    name?: string
    offset?: number
    repeat?: boolean
    smooth?: boolean
    smoothMobile?: boolean
    direction?: string
    inertia?: number
    class?: string
    scrollbarClass?: string
    scrollingClass?: string
    draggingClass?: string
    smoothClass?: string
    initClass?: string
    getSpeed?: boolean
    getDirection?: boolean

    isMobile: boolean
    options: LocomotiveScrollOptions
    scroll: Smooth | Native

    constructor(options?: LocomotiveScrollOptions)

    init(): void
    update(): void
    start(): void
    stop(): void
    scrollTo(target: Node | string | number, options?: ScrollToOptions): void
    setScroll(x: number, y: number): void
    on(event: 'call' | 'scroll', func: (data: string | string[]) => void): void
    destroy(): void
  }

  export { LocomotiveScroll as Scroll }
}

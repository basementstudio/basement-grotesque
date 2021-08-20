import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'
import { CustomEase } from 'gsap/dist/CustomEase'
import { GSDevTools } from 'gsap/dist/GSDevTools'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'

gsap.registerPlugin(
  CSSRulePlugin,
  CustomEase,
  GSDevTools,
  ScrollTrigger,
  SplitText
)

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
const DURATION = RECIPROCAL_GR * 1.2
const CUSTOM_EASE = CustomEase.create('custom', 'M0,0,C0.23,0.42,0.5,1,1,1')

export type RegisteredEffects = 'fadeIn' | 'fadeInBottom' | 'in' | 'out'

gsap.defaults({
  ease: 'sine.out',
  duration: DURATION
})

gsap.registerEffect({
  name: 'fadeIn',
  extendTimeline: true,
  defaults: {
    delay: 0,
    duration: DURATION,
    stagger: 0.1
  },
  effect: (targets: any, config: any) => {
    const tl = gsap.timeline()
    tl.from(targets, {
      autoAlpha: 0,
      delay: config.delay,
      duration: config.duration,
      ease: config.ease,
      stagger: config.stagger
    })
    return tl
  }
})

gsap.registerEffect({
  name: 'fadeInBottom',
  extendTimeline: true,
  defaults: {
    delay: 0,
    duration: DURATION,
    stagger: 0.1,
    y: 30
  },
  effect: (targets: any, config: any) => {
    const tl = gsap.timeline()
    tl.from(targets, {
      autoAlpha: 0,
      delay: config.delay,
      duration: config.duration,
      ease: config.ease,
      stagger: config.stagger,
      y: config.y
    })
    return tl
  }
})

gsap.registerEffect({
  name: 'in',
  extendTimeline: true,
  defaults: {
    duration: DURATION,
    each: DURATION / 23,
    ease: CUSTOM_EASE,
    fade: DURATION * 0.8,
    from: 'start',
    perspective: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    staggerEase: CUSTOM_EASE,
    transformOrigin: '50% 50%',
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 70
  },
  effect: (targets: any, config: any) => {
    if (config.rotationX !== 0 || config.rotationY !== 0) {
      gsap.set(targets[0].parentNode, { perspective: config.perspective })
    }
    if (config.yPercent !== 0) {
      gsap.set(targets[0].parentNode, { overflow: 'hidden' })
    }

    const tl = gsap.timeline()
    tl.from(targets, {
      duration: config.duration,
      ease: config.ease,
      rotationX: config.rotationX,
      rotationY: config.rotationY,
      scale: config.scale,
      transformOrigin: config.transformOrigin,
      x: config.x,
      y: config.y,
      yPercent: config.yPercent,
      xPercent: config.xPercent,
      stagger: {
        each: config.each,
        ease: config.staggerEase,
        from: config.from
      }
    })

    tl.from(
      targets,
      {
        duration: config.fade,
        ease: 'none',
        opacity: 0,
        stagger: {
          each: config.each,
          ease: config.staggerEase,
          from: config.from
        }
      },
      0
    )
    return tl
  }
})

gsap.registerEffect({
  name: 'out',
  extendTimeline: true,
  defaults: {
    duration: DURATION,
    each: 0.03,
    ease: 'power1',
    fade: DURATION / 2,
    from: 'start',
    perspective: 400,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    staggerEase: 'power1.in',
    transformOrigin: '50% 50%',
    x: 0,
    y: 0
  },
  effect: (targets: any, config: any) => {
    const tl = gsap.timeline()
    tl.to(targets, {
      duration: config.duration,
      ease: config.ease,
      rotationX: config.rotationX,
      rotationY: config.rotationY,
      scale: config.scale,
      transformOrigin: config.transformOrigin,
      x: config.x,
      y: config.y,
      stagger: {
        each: config.each,
        ease: config.staggerEase,
        from: config.from
      }
    })

    tl.to(
      targets,
      {
        duration: config.fade,
        ease: 'none',
        opacity: 0,
        stagger: {
          each: config.each,
          ease: config.staggerEase,
          from: config.from
        }
      },
      0
    )
    return tl
  }
})

export { CSSRulePlugin, DURATION, gsap, GSDevTools, ScrollTrigger, SplitText }

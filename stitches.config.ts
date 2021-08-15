import { createCss } from '@stitches/react'
import {
  AlignContentProperty,
  AlignSelfProperty,
  BackgroundColorProperty,
  BoxShadowProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  GlobalsNumber,
  JustifyContentProperty,
  OverflowXProperty,
  OverflowYProperty,
  PointerEventsProperty,
  TextAlignProperty,
  UserSelectProperty
} from '@stitches/react/types/css-types'
export * from '@stitches/react'

export const defaultTheme = {
  colors: {
    blur: 'rgba(0, 0, 0, 0.5)',
    table: 'transparent',
    black: '#000000',
    white: '#ffffff'
  },
  shadows: {
    black: '#000000',
    white: '#ffffff'
  },
  fonts: {
    system:
      '-apple-system, blinkmacsystemfont, segoe ui, roboto, oxygen, ubuntu, cantarell, fira sans, droid sans, helvetica neue, sans-serif',
    heading: 'Basement Grotesque, var(--fonts-system)',
    body: 'Inter, var(--fonts-system)'
  },
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '18px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '36px',
    9: '40px',
    10: '48px',
    11: '64px',
    12: '88px',
    13: '114px',
    14: '120px'
  },
  lineHeights: {
    1: '12px',
    2: '14px',
    3: '17px',
    4: '18px',
    5: '20px',
    6: '25px',
    7: '32px',
    8: '39px',
    9: '48px',
    10: '48px',
    12: '88px',
    13: '114px',
    14: '120px'
  },
  space: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px',
    7: '256px',
    8: '512px'
  },
  sizes: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px',
    7: '256px',
    8: '512px'
  },
  radii: {
    1: '2px',
    2: '4px',
    3: '8px',
    4: '10px',
    5: '12px',
    6: '14px',
    round: '9999px'
  }
}

const media = {
  bp1: `(min-width: 520px)`,
  bp2: `(min-width: 900px)`,
  bp3: `(min-width: 1200px)`,
  bp4: `(min-width: 1580px)`,
  motion: `(prefers-reduced-motion)`,
  hover: `(hover: hover)`,
  dark: `(prefers-color-scheme: dark)`,
  light: `(prefers-color-scheme: light)`
}

const utils = {
  // Abbreviated margin properties
  m: () => (value: number | string) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value
  }),
  mt: () => (value: number | string) => ({
    marginTop: value
  }),
  mr: () => (value: number | string) => ({
    marginRight: value
  }),
  mb: () => (value: number | string) => ({
    marginBottom: value
  }),
  ml: () => (value: number | string) => ({
    marginLeft: value
  }),
  mx: () => (value: number | string) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: () => (value: number | string) => ({
    marginTop: value,
    marginBottom: value
  }),
  p: () => (value: number | string) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value
  }),
  pt: () => (value: number | string) => ({
    paddingTop: value
  }),
  pr: () => (value: number | string) => ({
    paddingRight: value
  }),
  pb: () => (value: number | string) => ({
    paddingBottom: value
  }),
  pl: () => (value: number | string) => ({
    paddingLeft: value
  }),
  px: () => (value: number | string) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: () => (value: number | string) => ({
    paddingTop: value,
    paddingBottom: value
  }),

  ta: () => (value: TextAlignProperty | undefined) => ({ textAlign: value }),

  fd: () => (value: FlexDirectionProperty | undefined) => ({
    flexDirection: value
  }),
  fw: () => (value: FlexWrapProperty) => ({ flexWrap: value }),

  ai: () => (value: AlignContentProperty) => ({ alignItems: value }),
  ac: () => (value: AlignContentProperty) => ({ alignContent: value }),
  jc: () => (value: JustifyContentProperty) => ({
    justifyContent: value
  }),
  as: () => (value: AlignSelfProperty) => ({ alignSelf: value }),
  fg: () => (value: GlobalsNumber | undefined) => ({ flexGrow: value }),
  fs: () => (value: GlobalsNumber | undefined) => ({ flexShrink: value }),
  fb: () => (value: string) => ({ flexBasis: value }),

  bc: () => (value: BackgroundColorProperty) => ({
    backgroundColor: value
  }),

  br: () => (value: string | number) => ({
    borderRadius: value
  }),
  btrr: () => (value: string | number) => ({
    borderTopRightRadius: value
  }),
  bbrr: () => (value: string | number) => ({
    borderBottomRightRadius: value
  }),
  bblr: () => (value: string | number) => ({
    borderBottomLeftRadius: value
  }),
  btlr: () => (value: string | number) => ({
    borderTopLeftRadius: value
  }),

  bs: () => (value: BoxShadowProperty) => ({ boxShadow: value }),

  lh: () => (value: string | number) => ({ lineHeight: value }),

  ox: () => (value: OverflowXProperty | undefined) => ({ overflowX: value }),
  oy: () => (value: OverflowYProperty | undefined) => ({ overflowY: value }),

  pe: () => (value: PointerEventsProperty) => ({
    pointerEvents: value
  }),
  us: () => (value: UserSelectProperty) => ({
    WebkitUserSelect: value,
    userSelect: value
  }),

  // A property for applying width/height together
  size: () => (value: number | string) => ({
    width: value,
    height: value
  }),

  // A property to apply linear gradient
  linearGradient: () => (value: number | string) => ({
    backgroundImage: `linear-gradient(${value})`
  })
}

export const { styled, theme, css, global, keyframes, getCssString } =
  createCss({
    theme: defaultTheme,
    utils,
    media
  })

import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      background: '#101010',
      black: '#000000',
      blur: 'rgba(0, 0, 0, 0.5)',
      table: 'transparent',
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
  },
  media: {
    bp1: `(min-width: 520px)`,
    bp2: `(min-width: 900px)`,
    bp3: `(min-width: 1200px)`,
    bp4: `(min-width: 1580px)`,
    motion: `(prefers-reduced-motion)`,
    hover: `(hover: hover)`,
    dark: `(prefers-color-scheme: dark)`,
    light: `(prefers-color-scheme: light)`
  },
  utils: {
    // Abbreviated margin properties
    m: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    p: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),
    ta: () => (value: Stitches.PropertyValue<'textAlign'>) => ({
      textAlign: value
    }),
    fd: () => (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value
    }),
    fw: () => (value: Stitches.PropertyValue<'flexWrap'>) => ({
      flexWrap: value
    }),

    ai: () => (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value
    }),
    ac: () => (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value
    }),
    jc: () => (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value
    }),
    as: () => (value: Stitches.PropertyValue<'alignSelf'>) => ({
      alignSelf: value
    }),
    fg: () => (value: Stitches.PropertyValue<'flexGrow'>) => ({
      flexGrow: value
    }),
    fs: () => (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value
    }),
    fb: () => (value: Stitches.PropertyValue<'flexBasis'>) => ({
      flexBasis: value
    }),
    br: () => (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    btrr: () => (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value
    }),
    bbrr: () => (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value
    }),
    bblr: () => (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value
    }),
    btlr: () => (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value
    }),
    bs: () => (value: Stitches.PropertyValue<'boxShadow'>) => ({
      boxShadow: value
    }),
    lh: () => (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value
    }),
    ox: () => (value: Stitches.PropertyValue<'overflowX'>) => ({
      overflowX: value
    }),
    oy: () => (value: Stitches.PropertyValue<'overflowY'>) => ({
      overflowY: value
    }),
    pe: () => (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value
    }),
    us: () => (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    linearGradient: () => (value: Stitches.PropertyValue<'padding'>) => ({
      backgroundImage: `linear-gradient(${value})`
    })
  }
})

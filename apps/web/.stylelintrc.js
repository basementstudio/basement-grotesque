module.exports = {
  ignoreFiles: ['**/*.{ts,tsx,js,jsx}'],
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['font-named-instance']
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'number-leading-zero': null
  }
}

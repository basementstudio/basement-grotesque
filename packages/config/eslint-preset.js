module.exports = {
  extends: ['next', 'prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/']
    }
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'import/no-anonymous-default-export': 0,
    'react/jsx-no-target-blank': [
      2,
      {
        allowReferrer: true
      }
    ]
  }
}

module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',  
    },
    
    overrides: [ 
      {
        files: ['*.js', '*.jsx','*.ts', '*.tsx'],
        parserOptions: {
          tsconfigRootDir: __dirname,  
        },
      },
    ],
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      indent: ["error", 2],
      "no-console": "error"
    }
  }
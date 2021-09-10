module.exports = {
  source: ['properties/**/*.json', 'tokens/**/*.json'],
  transform: {
    supportCompositeValue: {
      type: 'value',
      matcher: (prop) => prop.attributes.type === 'shadow' || 'background',
      transformer: (prop) => prop.original.value,
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    less: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/px',
        'color/hex8',
        'supportCompositeValue',
      ],
      buildPath: 'dist/',
      files: [
        {
          destination: 'variables.less',
          format: 'less/variables',
        },
      ],
    },
    umd: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex', 'size/px'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/umd',
        },
      ],
    },
    commonjs: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex', 'size/px'],
      buildPath: 'lib/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/module',
        },
      ],
    },
    es: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex', 'size/px'],
      buildPath: 'es/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
    typing: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex', 'size/px'],
      buildPath: 'es/',
      files: [
        {
          format: 'typescript/es6-declarations',
          destination: 'index.d.ts',
        },
      ],
    },
  },
};

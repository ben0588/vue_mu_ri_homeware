// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true
  },
  projects: [
    './packages/repo2', // shorthand for only root.
    {
      root: './packages/repo1',
      package: './package.json',
      tsconfig: './tsconfig.json',
      snippetFolder: './.vscode/vetur/snippets',
      globalComponents: ['./src/components/**/*.vue']
    }
  ]
}

module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filesnames) => [
    `npx prettier src/ --write`,
    `npm run lint --fix . ${filesnames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filesnames.join(' ')}`
  ]
}

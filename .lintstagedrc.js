module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filesnames) => [
    `npx prettier ${filesnames.join(' ')} --write`,
    `npm run lint --fix . ${filesnames.join(' --file')}`
  ]
}

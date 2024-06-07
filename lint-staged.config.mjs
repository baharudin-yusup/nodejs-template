export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
};

module.exports = {
  root: true,
  extends: [
    "next",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
    "custom"
  ],
  parserOptions: {
    project: "./tsconfig.json"
  }
};

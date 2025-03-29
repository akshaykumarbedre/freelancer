import next from "@next/eslint-plugin-next";

export default [
  next(), // Ensure Next.js ESLint plugin is included
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off", // Fix JSX-related parsing errors
    },
  },
];

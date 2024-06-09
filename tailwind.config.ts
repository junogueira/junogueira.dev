import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      boxShadow: {
        zoop: 'rgba(102, 109, 128, 0.08) 0px 1.2672px 1.2672px 0px, rgba(102, 109, 128, 0.08) 0px 5.06879px 10.1376px 0px',
        zoopdark:
          'rgba(10, 10, 10, 0.2) 0px 1.2672px 1.2672px 0px, rgba(10, 10, 10, 0.2) 0px 5.06879px 10.1376px 0px',
      },
      colors: {
        twitter: '#1da1f2',
        github: '#24292f',
        linkedin: '#0077B5',
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        'Avenir Next',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Ubuntu',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        'Cascadia Code',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
  },
  safelist: [
    'hover:text-twitter',
    'hover:text-github',
    'hover:text-linkedin',
    'group-hover:border-twitter',
    'group-hover:border-github',
    'group-hover:border-linkedin',
    {
      // project status badge
      pattern: /(bg|text|ring)-(red|emerald|yellow)-(.)/,
    },
  ],
};

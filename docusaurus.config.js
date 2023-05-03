const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'Khoahocdulieu',
  tagline: 'Cùng nhau xây dựng cộng đồng khoa học dữ liệu đa nghành 🚀',
  url: 'https://www.khoahocdulieu.org',
  baseUrl: '/',
  favicon: '/logo/light.svg',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'khoa-hoc',
    path: 'docs/khoa-hoc',
    routeBasePath: '/khoa-hoc/danh-sach',
   },
   {
    id: 'blog',
    path: 'docs/blog',
    routeBasePath: '/blog',
   },
   {
    id: 'python-cho-nguoi-moi-bat-dau',
    path: 'docs/python-cho-nguoi-moi-bat-dau',
    routeBasePath: '/khoa-hoc/python-cho-nguoi-moi-bat-dau',
   },
   {
    id: 'version-control-va-github',
    path: 'docs/version-control-va-github',
    routeBasePath: '/khoa-hoc/version-control-va-github',
   },
   {
    id: 'thong-ke-co-ban',
    path: 'docs/thong-ke-co-ban',
    routeBasePath: '/khoa-hoc/thong-ke-co-ban',
   },
   {
    id: 'khoa-hoc-du-lieu-cho-nguoi-moi-bat-dau',
    path: 'docs/khoa-hoc-du-lieu-cho-nguoi-moi-bat-dau',
    routeBasePath: '/khoa-hoc/khoa-hoc-du-lieu-cho-nguoi-moi-bat-dau',
   },
   {
    id: 'cac-thu-vien-python-thuong-dung-trong-khoa-hoc-du-lieu',
    path: 'docs/cac-thu-vien-python-thuong-dung-trong-khoa-hoc-du-lieu',
    routeBasePath: '/khoa-hoc/cac-thu-vien-python-thuong-dung-trong-khoa-hoc-du-lieu',
   },
   {
    id: 'truc-quan-hoa-du-lieu',
    path: 'docs/truc-quan-hoa-du-lieu',
    routeBasePath: '/khoa-hoc/truc-quan-hoa-du-lieu',
   },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  editUrl: 'https://github.com/Khoa-Hoc-Du-Lieu/docs/tree/main/',
  showLastUpdateTime: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const isDev = process.env.NODE_ENV === 'development';

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));
// const search_plugins = require.resolve('docusaurus-lunr-search');

const plugins = [tailwindPlugin, ...docs_plugins, webpackPlugin];


const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');
const communitiesHTML = fs.readFileSync('./src/snippets/communities.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/huong-dan',
          id: 'huong-dan',
          routeBasePath: '/huong-dan',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        // googleTagManager: {
        //   containerId: 'GTM-5FDFFSS',
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Khoahocdulieu logo',
          height: '40px',
          width: '58px',
        },
        items: [
          {
            label: 'Khoá học',
            to:'khoa-hoc/danh-sach',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'html',
                value: sdksHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'Hướng dẫn',
            to: 'huong-dan',
            position: 'left',
            className: 'new-badge',
          },
          {
            label: 'Blog',
            to: 'blog',
          },
          {
            label: 'Tài nguyên',
            type: 'dropdown',
            className: 'dyte-dropdown resources-dropdown',
            items: [
              {
                type: 'html',
                value: resourcesHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'Giới thiệu',
            to: '/gioi-thieu',
          },
          {
            label: 'Liên hệ',
            to: '/lien-he',
          },
          {
            label: 'Báo lỗi',
            to: 'https://github.com/Khoa-Hoc-Du-Lieu/docs/issues/new/?title=[Bug]',
          },

          // {
          //   type: 'search',
          //   position: 'right',
          // },
          {
            label: 'Cộng Đồng',
            position: 'right',
            type: 'dropdown',
            className: 'dyte-dropdown resources-dropdown',
            items: [
              {
                type: 'html',
                value: communitiesHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          // {
          //   label: 'Sign Up',
          //   href: 'https://dev.dyte.io/register',
          //   position: 'right',
          //   className: 'dev-portal-signup dev-portal-link',
          // },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Khoahocdulieu Logo',
          height: '36px',
        },
        links: [
          {
            title: 'Khoá học',
            items: [
              {
                label: 'Danh sách',
                to: 'khoa-hoc/danh-sach',
              },
              {
                label: 'Nền tảng',
                to: 'khoa-hoc/danh-sach#nền-tảng',
              },
              {
                label: 'Nhập môn',
                to: 'khoa-hoc/danh-sach#nhập-môn',
              },
              {
                label: 'Trung bình',
                to: 'khoa-hoc/danh-sach#trung-bình',
              },
            ],
          },
          {
            title: 'Tài nguyên',
            items: [
              {
                label: 'Site health',
                to: 'site-health',
              },
              {
                label: 'Liên hệ',
                to: 'lien-he',
              },
              {
                label: 'FAQs',
                to: '/faq',
              },
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'Data learner',
                href: 'https://www.datalearner.org/',
              },
            ],
          },
          {
            title: 'Cộng đồng',
            items: [
              {
                label: 'Diễn đàn',
                href: 'https://github.com/Khoa-Hoc-Du-Lieu/docs/discussions',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/khoahocdulieu.org',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@khoahocdulieu',
              },
              {
                label: 'Discord',
                href: 'https://community.dyte.io',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/khoahocdulieu',
              },
            ],
          },
        ],
        copyright: 'Copyright &copy; Khoahocdulieu since 2021. All rights reserved. Built with <a href="https://docusaurus.io" target="_blank">Docusarus</a>. Using templates from <a href="https://docs.dyte.io/" target="_blank">Dyte</a>, and <a href="https://ionicframework.com/docs" target="_blank">Ionic</a>',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
          'latex',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      // algolia: {
      //   appId: 'HL0HSV62RK',
      //   apiKey: '72ebf02146698733b7114c7b36da0945',
      //   indexName: 'docs',
      //   contextualSearch: true,
      //   searchParameters: {},
      // },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

};

module.exports = config;

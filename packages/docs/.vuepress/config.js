module.exports = ctx => ({
  base: '/da-michele.com/',
  dest: '../../docs',
  locales: {
    '/': {
      lang: 'en',
      title: 'Ristorante da Michele',
      description: 'Baden-Baden'
    },
    '/de/': {
      lang: 'de',
      title: 'Ristorante da Michele',
      description: 'Baden-Baden'
    },
    '/it/': {
      lang: 'it',
      title: 'Ristorante da Michele',
      description: 'Baden-Baden'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#000000' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    // repo: 'da-michele/da-michele.com',
    // editLinks: true,
    docsDir: 'docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English 🇺🇸🇬🇧',
        selectText: '🌐 Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        searchPlaceholder: 'Search …',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        sidebar: {
          '/restaurant/': ['about', 'career'],
          '/legal/': ['privacy', 'terms'],
          '/': ['', 'imprint', 'menu', 'privacy']
        }
      },
      '/de/': {
        label: 'Deutsch 🇩🇪',
        selectText: '🌐 Sprachen',
        ariaLabel: 'Wähle eine Sprache',
        editLinkText: 'Diese Seite auf GitHub ändern',
        lastUpdated: 'Zuletzt aktualisiert',
        nav: require('./nav/de'),
        searchPlaceholder: 'Suchen …',
        serviceWorker: {
          updatePopup: {
            message: 'Neuer Inhalt ist verfügbar.',
            buttonText: 'Neu laden'
          }
        },
        sidebar: {
          '/de/restaurant/': ['about', 'career'],
          '/de/legal/': ['privacy', 'terms'],
          '/de/': ['', 'imprint', 'menu', 'privacy']
        }
      },
      '/it/': {
        label: 'Italiano 🇮🇹',
        selectText: '🌐 Le lingue',
        ariaLabel: 'Seleziona una lingua',
        editLinkText: 'Modifica questa pagina su GitHub',
        lastUpdated: 'Ultimo aggiornamento',
        nav: require('./nav/it'),
        searchPlaceholder: 'Ricercare …',
        serviceWorker: {
          updatePopup: {
            message: 'Sono disponibili nuovi contenuti.',
            buttonText: 'Ricarica'
          }
        },
        sidebar: {
          '/it/restaurant/': ['about', 'career'],
          '/it/legal/': ['privacy', 'terms'],
          '/it/': ['', 'imprint', 'menu', 'privacy']
        }
      }
    }
  },
  plugins: [
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top'],
    // ['@vuepress/blog'],
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          hours12: false
        },
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          // FIXME: hard codes text of diff of (dateTimeBuild - dateTimeGitCommit)
          //        as in a STATIC "Last updated: a minute ago"
          // return moment(timestamp).fromNow()
          return moment(timestamp)
        }
      }
    ],
    ['@vuepress/medium-zoom'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['check-md']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/de.js',
    '.vuepress/nav/it.js'
  ],
  markdown: {
    lineNumbers: true
  }
})

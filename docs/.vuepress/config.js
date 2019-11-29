const { translate } = require('./theme/utils/translations');
const { renderHeaderWithExplicitAnchor } = require('./theme/utils/markdown');

module.exports = {
  title: 'Ethereum',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1'
      }
    ],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'ethereum.org' }],
    ['meta', { property: 'og:url', content: 'https://ethereum.org' }],
    [
      'meta',
      { property: 'og:image', content: 'https://ethereum.org/og-image.png' }
    ],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:site', content: '@ethereum' }],
    ['meta', { property: 'twitter:creator', content: '@ethereum' }],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://ethereum.org/og-image-twitter.png'
      }
    ],
    // Matomo tracking
    // see https://github.com/vuejs/vuepress/issues/790
    [
      'script',
      {},
      `
        var _paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['setCookieDomain', '*.ethereum.org']);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u='//matomo.ethereum.org/piwik/';
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '4']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
        `
    ],
    [
      'noscript',
      {},
      `<p><img src="//matomo.ethereum.org/piwik/matomo.php?idsite=4&amp;rec=1" style="border:0;" alt="" /></p>`
    ]
  ],
  markdown: {
    anchor: {
      permalinkSymbol: '↳',
      renderPermalink: renderHeaderWithExplicitAnchor
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      label: translate('name'),
      title: translate('ethereum'),
      nav: [
        { text: translate('page-home'), link: '/' },
        {
          text: translate('page-individuals'),
          ariaLabel: 'Individual\'s Menu',
          items: [
            {
              text: translate('page-home-section-individuals-item-one'),
              link: translate('page-home-section-individuals-item-one-link')
            },
            {
              text: translate('page-home-section-individuals-item-two'),
              link: translate('page-home-section-individuals-item-two-link')
            },
            {
              text: translate('page-home-section-individuals-item-three'),
              link: translate('page-home-section-individuals-item-three-link')
            }
          ]
        },
        {
          text: translate('page-developers'),
          ariaLabel: 'Developer\'s Menu',
          items: [
            {
              text: 'Get Started',
              link: '/build/'
            },
            {
              text: 'Ethereum Studio',
              link: 'https://studio.ethereum.org/'
            },
            {
              text: 'Developer Resources',
              link: '/developers/'
            }
          ]
        },
        { text: translate('page-enterprise'), link: '/enterprise/' }
      ]
    },
    '/ig/': {
      lang: 'igbo',
      label: translate('name', 'igbo'),
      title: translate('ethereum', 'igbo'),
      nav: [
        { text: translate('page-home', 'igbo'), link: '/ig/' },
        { text: translate('page-beginners', 'igbo'), link: '/ig/beginners/' },
        { text: translate('page-use', 'igbo'), link: '/ig/use/' },
        { text: translate('page-learn', 'igbo'), link: '/ig/learn/' },
        { text: translate('page-developers', 'igbo'), link: '/ig/developers/' }
      ]
    },
  
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => timestamp
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://ethereum.org',
        changefreq: 'weekly'
      }
    ]
  ]
};

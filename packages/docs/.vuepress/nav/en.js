module.exports = [
  {
    text: 'Sitemap',
    ariaLabel: 'Sitemap',
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Imprint',
        link: '/imprint'
      },
      {
        text: "Menu",
        link: '/menu'
      },
      {
        text: 'Privacy',
        link: '/privacy'
      },
      {
        text: 'Legal',
        ariaLabel: 'Legal',
        items: [
          {
            text: 'Privacy policy',
            link: '/legal/privacy'
          },
          {
            text: 'Terms of Service, Terms of Use',
            link: '/legal/terms'
          }
        ]
      },
      {
        text: 'Restaurant',
        ariaLabel: 'Restaurant',
        items: [
          {
            text: 'About us',
            link: '/restaurant/about'
          },
          {
            text: 'Career',
            link: '/restaurant/career'
          }
        ]
      }
    ]
  }
]

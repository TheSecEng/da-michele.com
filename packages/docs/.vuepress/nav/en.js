module.exports = [
  {
    text: 'Menu',
    ariaLabel: 'Menu',
    items: [
      {
        text: 'Imprint',
        link: '/imprint'
      },
      {
        text: "This week's Menu",
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
            text: 'Terms of Use',
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

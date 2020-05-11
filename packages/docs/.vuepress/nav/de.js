module.exports = [
  {
    text: 'Menü',
    ariaLabel: 'Menü',
    items: [
      {
        text: 'Impressum',
        link: '/de/imprint'
      },
      {
        text: 'Menü dieser Woche',
        link: '/de/menu'
      },
      {
        text: 'Datenschutz',
        link: '/de/privacy'
      },
      {
        text: 'Hilfe',
        ariaLabel: 'Hilfe',
        items: [
          {
            text: 'Verkauf und Rückerstattung',
            link: '/de/help/sales_refunds'
          }
        ]
      },
      {
        text: 'Rechtliche Hinweise',
        ariaLabel: 'Rechtliche Hinweise',
        items: [
          {
            text: 'Datenschutzrichtlinien',
            link: '/de/legal/privacy'
          },
          {
            text: 'Nutzungsbedingungen',
            link: '/de/legal/terms'
          }
        ]
      },
      {
        text: 'Restaurant',
        ariaLabel: 'Restaurant',
        items: [
          {
            text: 'Über uns',
            link: '/de/restaurant/about'
          },
          {
            text: 'Karriere',
            link: '/de/restaurant/career'
          }
        ]
      }
    ]
  }
]

module.exports = [
  {
    text: 'Menu',
    ariaLabel: 'Menu',
    items: [
      {
        text: 'Impronta',
        link: '/it/imprint'
      },
      {
        text: 'Menu di questa settimana',
        link: '/it/menu'
      },
      {
        text: 'Privacy',
        link: '/it/privacy'
      },
      {
        text: 'Note legali',
        ariaLabel: 'Note legali',
        items: [
          {
            text: 'Norme sulla privacy',
            link: '/it/legal/privacy'
          },
          {
            text: "Condizioni d'uso",
            link: '/it/legal/terms'
          }
        ]
      },
      {
        text: 'Ristorante',
        ariaLabel: 'Ristorante',
        items: [
          {
            text: 'Riguardo a noi',
            link: '/it/restaurant/about'
          },
          {
            text: 'Posti di lavoro',
            link: '/it/restaurant/career'
          }
        ]
      }
    ]
  }
]

<template>
  <div class="menu">
    <div
      v-if="data.menu && data.menu.length"
    >
      <div
        v-for="(section, s-index) in data.menu"
      >
        <h2>{{ section.title }}</h2>
        <div
          v-for="(item, i-index) in section.items"
        >
          <div
            f-if="item.active === true"
          >
            <h3>{{ item.title }}</h3>
            <p v-if="$lang === 'de'">{{ item.ingredients.de.join(' | ') }}</p>
            <p v-else-if="$lang === 'en'">{{ item.ingredients.en.join(' | ') }}</p>
            <p v-else-if="$lang === 'it'">{{ item.ingredients.it.join(' | ') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  computed: {
    data () {
      return {
        'menu': [
          {
            'title': 'Antipasti',
            'descriptions': {
              'de': 'Vorspeisen',
              'en': 'Starters'
            },
            'items': [
              {
                'title': 'Tartare di salmone',
                'active': true,
                'ingredients': {
                  'de': [ 'Lachs', 'Avocado', 'grüner Spargel' ],
                  'en': [ 'salmon', 'avocado', 'green asparagus' ],
                  'it': [ 'salmone', 'avocado', 'asparagi verdi' ]
                }
              },
              {
                'title': 'Vitello tonnato',
                'active': true,
                'ingredients': {
                  'de': [ 'Kalbfleisch', 'Thunfischcreme', 'Kapern' ],
                  'en': [ 'veal', 'thuna cream', 'capers' ],
                  'it': [ 'vitello', 'tonno', 'capperi' ]
                }
              },
              {
                'title': 'Calamaretti',
                'active': true,
                'ingredients': {
                  'de': [ 'Tintenfisch', 'Tomate', 'Artischocken' ],
                  'en': [ 'octopus', 'tomato', 'artichoke' ],
                  'it': [ 'calamaretti', 'pomodori', 'carciofi' ]
                }
              },
              {
                'title': 'Frittura',
                'active': true,
                'ingredients': {
                  'de': [ 'Frittierte Sardellen' ],
                  'en': [ 'fried anchovies' ],
                  'it': [ 'acciughe fritte' ]
                }
              }
            ]
          },
          {
            'title': 'Pesce',
            'descriptions': {
              'de': 'Fisch',
              'en': 'Fish'
            },
            'items': [
              {
                'title': 'Polpo al Pomodoro',
                'active': true,
                'ingredients': {
                  'de': [ 'Polpo', 'Tomaten', 'Basilikum' ],
                  'en': [ 'polpo', 'tomato', 'basil' ],
                  'it': [ 'polpo', 'pomodori', 'basilico' ]
                }
              },
              {
                'title': 'Filetto di Branzina e Caponata',
                'active': true,
                'ingredients': {
                  'de': [ 'Wolfsbarschfilet', 'Caponata' ],
                  'en': [ 'sea bass fillet', 'caponata' ],
                  'it': [ 'filetto di branzina', 'caponata' ]
                }
              },
              {
                'title': 'Pesce spada alla grillata',
                'active': true,
                'ingredients': {
                  'de': [ 'Schwertfisch', 'Tomaten', 'Kapern' ],
                  'en': [ 'grilled swordfish', 'tomato', 'capers' ],
                  'it': [ 'pesce spada alla grillata', 'pomodori', 'capperi' ]
                }
              }
            ]
          },
          {
            'title': 'Carne',
            'descriptions': {
              'de': 'Fleisch',
              'en': 'Meat'
            },
            'items': [
              {
                'title': 'Tagliata',
                'active': true,
                'ingredients': {
                  'de': [ 'Steak (Black Angus)', 'Rucola', 'Parmesan', 'Tomate' ],
                  'en': [ 'steak (Black Angus)', 'rucola', 'parmesan cheese', 'tomato' ],
                  'it': [ 'tagliata (Black Angus)', 'rucola', 'parmigiano', 'pomodori' ]
                }
              },
              {
                'title': 'Fegato alla Veneziana',
                'active': true,
                'ingredients': {
                  'de': [ 'Kalbsleber', 'Zwiebeln', 'Kapern' ],
                  'en': [ 'veal liver', 'onions', 'capers' ],
                  'it': [ 'fegato di vitello', 'cipolle', 'capperi' ]
                }
              },
              {
                'title': 'Filetto Taleggio e Tartufo',
                'active': true,
                'ingredients': {
                  'de': [ 'Rinderfilet', 'Taleggio (Ital. Kuhmilchkäse)', 'Trüffel' ],
                  'en': [ 'beef fillet', 'Taleggio-cheese', 'truffles' ],
                  'it': [ 'filetto di manzo', 'taleggio', 'tartufo' ]
                }
              }
            ]
          },
          {
            'title': 'Pasta',
            'items': [
              {
                'title': 'Gnocchi Taleggio e Asparagi',
                'active': true,
                'ingredients': {
                  'de': [ 'Gnocchi', 'Taleggio (Ital. Kuhmilchkäse)', 'Spargel' ],
                  'en': [ 'gnocchi', 'Taleggio-cheese', 'asparagus' ],
                  'it': [ 'gnocchi', 'taleggio', 'asparagi' ]
                }
              },
              {
                'title': 'Pasta di Salmone e Spinaci',
                'active': true,
                'ingredients': {
                  'de': [ 'Lachs', 'Spinat' ],
                  'en': [ 'salmon', 'spinach' ],
                  'it': [ 'salmone', 'spinaci' ]
                }
              },
              {
                'title': 'Pasta Salsiccia e Tartufo',
                'active': true,
                'ingredients': {
                  'de': [ 'Salsiccia (ital. Frischwurst)', 'Trüffel' ],
                  'en': [ 'salsiccia (fresh italian sausage)', 'truffles' ],
                  'it': [ 'salsiccia', 'tartufo' ]
                }
              }
            ]
          },
          {
            'title': 'Pizze',
            'items': [
              {
                'title': 'Pizza a piacere',
                'active': true,
                'ingredients': {
                  'de': [ 'Ihr könnt euch eure Pizzen nach Wunsch belegen lassen.' ],
                  'en': [ 'Select your own toppings.' ],
                  'it': [ 'Puoi ottenere le tue pizze come desideri.' ]
                }
              },
              {
                'title': 'Pizze del Capo',
                'active': true,
                'ingredients': {
                  'de': [ 'Die Pizzen vom Chef' ],
                  'en': [ 'Pizza of the Chef' ],
                  'it': [ 'Le pizze del Capo' ]
                }
              },
              {
                'title': 'Pizza Salsiccia',
                'active': true,
                'ingredients': {
                  'de': [ 'Salsiccia (ital. Frischwurst)', 'Taleggio (Ital. Kuhmilchkäse)', 'Spargel', 'Tomate' ],
                  'en': [ 'salsiccia (fresh italian sausage)', 'Taleggio-cheese', 'asparagus', 'tomato' ],
                  'it': [ 'salsiccia', 'taleggio', 'asparagi', 'pomodori' ]
                }
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

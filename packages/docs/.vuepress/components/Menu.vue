<template>
  <div class="menu">
    <div
      v-if="data.menu && data.menu.length"
    >
      <div
        v-for="(section, sindex) in data.menu"
      >
        <h2>{{ section.title }}</h2>
        <blockquote v-if="$lang !== 'it' && section.descriptions">
          <span v-if="$lang === 'de' && section.descriptions.de">{{ section.descriptions.de }}</span>
          <span v-else-if="$lang === 'en' && section.descriptions.en">{{ section.descriptions.en }}</span>
        </blockquote>
        <div
          v-for="(item, iindex) in section.items"
        >
          <div
            v-if="item.show === true"
          >
            <h3>{{ item.title }}</h3>
            <ul v-if="$lang === 'de'">
              <li v-for="ingredient in item.ingredients.de">{{ ingredient }}</li>
            </ul>
            <ul v-else-if="$lang === 'en'">
              <li v-for="ingredient in item.ingredients.en">{{ ingredient }}</li>
            </ul>
            <ul v-else-if="$lang === 'it'">
              <li v-for="ingredient in item.ingredients.it">{{ ingredient }}</li>
            </ul>
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
                'show': true,
                'ingredients': {
                  'de': [ 'Lachs', 'Avocado', 'grüner Spargel' ],
                  'en': [ 'salmon', 'avocado', 'green asparagus' ],
                  'it': [ 'salmone', 'avocado', 'asparagi verdi' ]
                }
              },
              {
                'title': 'Vitello tonnato',
                'show': true,
                'ingredients': {
                  'de': [ 'Kalbfleisch', 'Thunfischcreme', 'Kapern' ],
                  'en': [ 'veal', 'thuna cream', 'capers' ],
                  'it': [ 'vitello', 'tonno', 'capperi' ]
                }
              },
              {
                'title': 'Calamaretti',
                'show': true,
                'ingredients': {
                  'de': [ 'Tintenfisch', 'Tomate', 'Artischocken' ],
                  'en': [ 'octopus', 'tomato', 'artichoke' ],
                  'it': [ 'calamaretti', 'pomodori', 'carciofi' ]
                }
              },
              {
                'title': 'Frittura',
                'show': true,
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
                'show': true,
                'ingredients': {
                  'de': [ 'Polpo', 'Tomaten', 'Basilikum' ],
                  'en': [ 'polpo', 'tomato', 'basil' ],
                  'it': [ 'polpo', 'pomodori', 'basilico' ]
                }
              },
              {
                'title': 'Filetto di Branzina e Caponata',
                'show': true,
                'ingredients': {
                  'de': [ 'Wolfsbarschfilet', 'Caponata' ],
                  'en': [ 'sea bass fillet', 'caponata' ],
                  'it': [ 'filetto di branzina', 'caponata' ]
                }
              },
              {
                'title': 'Pesce spada alla grillata',
                'show': true,
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
                'show': true,
                'ingredients': {
                  'de': [ 'Steak (Black Angus)', 'Rucola', 'Parmesan', 'Tomate' ],
                  'en': [ 'steak (Black Angus)', 'rucola', 'parmesan cheese', 'tomato' ],
                  'it': [ 'tagliata (Black Angus)', 'rucola', 'parmigiano', 'pomodori' ]
                }
              },
              {
                'title': 'Fegato alla Veneziana',
                'show': true,
                'ingredients': {
                  'de': [ 'Kalbsleber', 'Zwiebeln', 'Kapern' ],
                  'en': [ 'veal liver', 'onions', 'capers' ],
                  'it': [ 'fegato di vitello', 'cipolle', 'capperi' ]
                }
              },
              {
                'title': 'Filetto Taleggio e Tartufo',
                'show': true,
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
                'show': true,
                'ingredients': {
                  'de': [ 'Gnocchi', 'Taleggio (Ital. Kuhmilchkäse)', 'Spargel' ],
                  'en': [ 'gnocchi', 'Taleggio-cheese', 'asparagus' ],
                  'it': [ 'gnocchi', 'taleggio', 'asparagi' ]
                }
              },
              {
                'title': 'Pasta di Salmone e Spinaci',
                'show': true,
                'ingredients': {
                  'de': [ 'Lachs', 'Spinat' ],
                  'en': [ 'salmon', 'spinach' ],
                  'it': [ 'salmone', 'spinaci' ]
                }
              },
              {
                'title': 'Pasta Salsiccia e Tartufo',
                'show': true,
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
                'show': true,
                'ingredients': {
                  'de': [ 'Ihr könnt euch eure Pizzen nach Wunsch belegen lassen.' ],
                  'en': [ 'Select your own toppings.' ],
                  'it': [ 'Puoi ottenere le tue pizze come desideri.' ]
                }
              },
              {
                'title': 'Pizze del Capo',
                'show': true,
                'ingredients': {
                  'de': [ 'Die Pizzen vom Chef' ],
                  'en': [ 'Pizza of the Chef' ],
                  'it': [ 'Le pizze del Capo' ]
                }
              },
              {
                'title': 'Pizza Salsiccia',
                'show': true,
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

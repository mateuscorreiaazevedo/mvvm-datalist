const header = {
  nav: {
    appTitle: {
      tag: {
        beta: 'BETA',
        pro: 'PRO',
      },
    },
    dropdownMenu: {
      selectTheme: {
        title: 'Alterar tema',
        label: {
          dark: 'Tema escuro',
          light: 'Tema Claro',
          system: 'Sistema',
        },
        icon: {
          light: 'Sun',
          dark: 'Moon',
        },
      },
      selectLocale: {
        title: 'Alterar idioma',
        icon: 'Languages',
        label: {
          'pt-br': 'Português/BR',
          en: 'English',
        },
      },
      logout: {
        label: 'Sair',
        icon: 'DoorOpen',
      },
    },
  },
  tabs: {
    links: {
      uploads: {
        label: 'Envios',
        icon: 'ListVideo',
      },
      tags: {
        label: 'Etiquetas',
        icon: 'Tags',
      },
      settings: {
        label: 'Configurações',
        icon: 'Settings',
      },
      developers: {
        label: 'Desenvolvedores',
        icon: 'CodeXml',
      },
    },
  },
}

const footer = {
  powered: 'Desenvolvido por:',
  me: 'Mateus Azevedo',
  copy: '&copy; - {year}',
}

export default {
  title: 'Hello world',
  header,
  footer,
}

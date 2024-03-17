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
        title: 'Change theme',
        label: {
          dark: 'Dark theme',
          light: 'Light theme',
          system: 'System theme',
        },
        icon: {
          light: 'Sun',
          dark: 'Moon',
        },
      },
      selectLocale: {
        title: 'Change Language',
        icon: 'Languages',
        label: {
          'pt-br': 'Português/BR',
          en: 'English',
        },
      },
      logout: {
        label: 'Logout',
        icon: 'DoorOpen',
      },
    },
  },
  tabs: {
    links: {
      uploads: {
        label: 'Uploads',
        icon: 'ListVideo',
      },
      tags: {
        label: 'Tags',
        icon: 'Tags',
      },
      settings: {
        label: 'Settings',
        icon: 'Settings',
      },
      developers: {
        label: 'Developers',
        icon: 'CodeXml',
      },
    },
  },
}

const footer = {
  powered: 'Powered by:',
  me: 'Mateus Azevedo',
  copy: '&copy; - {year}',
}

export default {
  title: 'Hello world',
  header,
  footer,
}

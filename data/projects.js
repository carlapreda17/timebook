const projects = [
  {
    id: 0,
    name: 'Primul Proiect',
    active: false,
    important: false,
    urgent: false,
    description: 'Primul proiect care a existat vreodata.',
    status: 'Done',
    lastUpdate: {
      user: 'Bogdan Posedaru',
      time: '2022-08-09',
    },
    icon: 'fas fa-clock text-secondary',
  },
  {
    id: 1,
    name: 'Timebook',
    active: true,
    important: true,
    urgent: false,
    description: 'Cel mai tare proiect care a existat vreodata.',
    status: 'In progress',
    lastUpdate: {
      user: 'Leo Ionescu',
      time: '2022-08-10',
    },
    icon: 'fas fa-exclamation-circle text-primary',
  },
  {
    id: 2,
    name: 'Cel mai vechi proiect',
    active: true,
    important: true,
    urgent: true,
    description: 'Cel mai vechi proiect care a existat vreodata.',
    status: 'In progress',
    lastUpdate: {
      user: 'Bogdan Posedaru',
      time: '2019-07-20',
    },
    icon: 'fas fa-exclamation-triangle text-accent',
  },
  {
    id: 3,
    name: 'ANAF Interop',
    active: true,
    important: false,
    urgent: false,
    description: 'Cel mai profitabil proiect care a existat vreodata.',
    status: 'On hold',
    lastUpdate: {
      user: 'Tiberiu Georgescu',
      time: '2022-07-12',
    },
    icon: 'fas fa-lock text-secondary',
  },
  {
    id: 4,
    name: 'Prima',
    active: false,
    important: false,
    urgent: false,
    description: 'Cel mai bine construit proiect care a existat vreodata.',
    status: 'Done',
    lastUpdate: {
      user: 'Bogdan Posedaru',
      time: '2022-08-02',
    },
    icon: 'fas fa-car',
  },
  {
    id: 5,
    name: 'Descriere lunga',
    active: true,
    important: true,
    urgent: true,
    description:
      "Chess is a board game played between two players. It is sometimes called Western chess or international chess to distinguish it from related games such as xiangqi and shogi. The current form of the game emerged in Spain and the rest of Southern Europe during the second half of the 15th century after evolving from chaturanga, a similar but much older game of Indian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide.",
    status: 'Done',
    lastUpdate: {
      user: 'Bogdan Posedaru',
      time: '2022-08-02',
    },
    icon: 'fas fa-calendar text-primary',
  },
];

export default projects;

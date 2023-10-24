export const newOrders = [
  {
    id: 123456,
    price: 250000,
    timestamp: "14:00",
    type: "person",
    paymentMethod: "apelsin",
    items: [
      {
        id: 1,
        count: 2,
        title: "Кока-Кола 0,5",
      },
      {
        id: 2,
        count: 1,
        title: "Чизбургер",
        ingredients: ["С луком", "Дополнительный сыр"],
      },
      {
        id: 3,
        count: 3,
        title: "Острый мясной шаурма",
      },
    ],
  },
  {
    id: 123457,
    price: 180000,
    timestamp: "13:30",
    type: "car",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 2,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 2,
        title: "Вегетарианский ролл",
        ingredients: ["Без лука", "Дополнительный соус"],
      },
    ],
  },
  {
    id: 123458,
    price: 420000,
    timestamp: "15:00",
    type: "car",
    paymentMethod: "click",
    items: [
      {
        id: 1,
        count: 4,
        title: "Спрайт 0,5",
      },
      {
        id: 2,
        count: 2,
        title: "Куриная шаурма",
        ingredients: ["Дополнительный чесночный соус"],
      },
    ],
  },
];

export const pendingOrders = [
  {
    id: 123456,
    price: 250000,
    timestamp: "14:30",
    type: "person",
    paymentMethod: "apelsin",
    items: [
      {
        id: 1,
        count: 2,
        title: "Кока-Кола 0,5",
      },
    ],
    comments: [
      {
        id: 1,
        comment: "Пожалуйста, сделайте быстрее.",
      },
      {
        id: 2,
        comment: "Я тороплюсь.",
      },
    ],
  },
  {
    id: 123457,
    price: 180000,
    timestamp: "13:45",
    type: "car",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 2,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 2,
        title: "Вегетарианский ролл",
        ingredients: ["Без лука", "Дополнительный соус"],
      },
    ],
    comments: [],
  },
];

export const readyOrders = [
  {
    id: 123456,
    price: 250000,
    timestamp: "14:30",
    type: "person",
    paymentMethod: "apelsin",
    items: [
      {
        id: 1,
        count: 2,
        title: "Кока-Кола 0,5",
      },
    ],
    comments: [
      {
        id: 1,
        comment: "Пожалуйста, сделайте быстрее.",
      },
      {
        id: 2,
        comment: "Я тороплюсь.",
      },
    ],
  },
  {
    id: 123457,
    price: 180000,
    timestamp: "13:45",
    type: "car",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 2,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 2,
        title: "Вегетарианский ролл",
        ingredients: ["Без лука", "Дополнительный соус"],
      },
    ],
    comments: [],
  },
];

export const deliveryOrders = [
  {
    id: 123456,
    price: 250000,
    timestamp: "14:30",
    type: "person",
    paymentMethod: "apelsin",
    items: [
      {
        id: 1,
        count: 2,
        title: "Кока-Кола 0,5",
      },
    ],
  },
  {
    id: 123457,
    price: 180000,
    timestamp: "13:45",
    type: "car",
    paymentMethod: "payme",
    items: [
      {
        id: 1,
        count: 2,
        title: "Пепси 0,5",
      },
      {
        id: 2,
        count: 2,
        title: "Вегетарианский ролл",
        ingredients: ["Без лука", "Дополнительный соус"],
      },
    ],
  },
];

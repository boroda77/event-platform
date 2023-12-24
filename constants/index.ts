export const headerLinks = [
    {
      label: 'Головна',
      route: '/',
    },
    {
      label: 'Створити подію',
      route: '/events/create',
    },
    {
      label: 'Мій профіль',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }
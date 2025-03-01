export interface Event {
  id: string
  title: string
  date: string
  time: string
  category: 'NIGHTLIFE' | 'MUSIC' | 'ARTS & CULTURE'
  imageUrl: string
  ticketsLeft?: number
  location: string
  price: string
  description: string
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Galanta Night Festival',
    date: '28 DEC',
    time: '22:00',
    category: 'NIGHTLIFE',
    imageUrl:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ticketsLeft: 5,
    location: 'Club Metropolis, Galanta',
    price: '€15',
    description:
      'Experience the ultimate nightlife event in Galanta with top DJs, amazing light shows, and unforgettable moments.',
  },
  {
    id: '2',
    title: 'Electronic Music Festival',
    date: '28 DEC',
    time: '22:00',
    category: 'MUSIC',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Galanta Arena',
    price: '€20',
    description:
      'Join us for an incredible night of electronic music featuring renowned artists and state-of-the-art sound systems.',
  },
  {
    id: '3',
    title: 'Galanta Art Exhibition',
    date: '28 DEC',
    time: '22:00',
    category: 'ARTS & CULTURE',
    imageUrl:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Galanta Cultural Center',
    price: '€10',
    description:
      'Discover the finest art pieces from local and international artists in this exclusive exhibition in Galanta.',
  },
  {
    id: '4',
    title: 'Jazz Night in Galanta',
    date: '29 DEC',
    time: '20:00',
    category: 'MUSIC',
    imageUrl:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ticketsLeft: 10,
    location: 'Jazz Club Galanta',
    price: '€12',
    description:
      'Enjoy a sophisticated evening of jazz music performed by talented musicians in an intimate setting.',
  },
  {
    id: '5',
    title: 'Galanta Wine Festival',
    date: '30 DEC',
    time: '18:00',
    category: 'ARTS & CULTURE',
    imageUrl:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Galanta Town Square',
    price: '€25',
    description:
      'Sample the finest wines from the region while enjoying live music and delicious local cuisine.',
  },
  {
    id: '6',
    title: "New Year's Eve Party",
    date: '31 DEC',
    time: '22:00',
    category: 'NIGHTLIFE',
    imageUrl:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ticketsLeft: 3,
    location: 'Grand Hotel Galanta',
    price: '€50',
    description:
      'Ring in the New Year with an unforgettable celebration featuring live performances, gourmet food, and champagne at midnight.',
  },
]

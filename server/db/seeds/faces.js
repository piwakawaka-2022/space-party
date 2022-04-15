exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('faces')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('faces').insert([
        {
          id: 1,
          name: 'Muer',
          image: 'Muer.png',
        },
        {
          id: 2,
          name: 'Seb',
          image: 'Seb.png',
        },
        {
          id: 3,
          name: 'Jesse',
          image: 'Jesse.png',
        },
        {
          id: 4,
          name: 'Lawrence',
          image: 'Lawrence.png',
        },
        {
          id: 5,
          name: 'Star warz',
          image: 'starwars.png',
        },
        {
          id: 6,
          name: 'Fb guy',
          image: 'Fbguy.png',
        },
        {
          id: 7,
          name: 'Jacinda',
          image: 'Jacinda.png',
        },
        {
          id: 8,
          name: 'Donkey Kong',
          image: 'Donkey.png',
        },
        {
          id: 9,
          name: 'Nice Sloth',
          image: 'Sloth.png',
        },
        {
          id: 10,
          name: 'Penguin',
          image: 'penguin.png',
        },
        {
          id: 11,
          name: 'Riri',
          image: 'Rihianna.png',
        },
        {
          id: 12,
          name: 'Pug',
          image: 'Dog.png',
        },
        {
          id: 13,
          name: 'Rob Pat',
          image: 'Rob.png',
        },
        {
          id: 14,
          name: 'Pikachu',
          image: 'Pikachu.png',
        },
        {
          id: 15,
          name: 'Horse',
          image: 'Horse.png',
        },
      ])
    })
}

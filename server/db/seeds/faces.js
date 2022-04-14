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
          image: 'Img001.png',
        },
        {
          id: 2,
          name: 'Seb',
          image: 'Img002.png',
        },
        {
          id: 3,
          name: 'Jesse',
          image: 'Img003.png',
        },
        {
          id: 4,
          name: 'Lawrence',
          image: 'Img004.png',
        },
        {
          id: 5,
          name: 'Tom',
          image: 'Img005.png',
        },
        {
          id: 6,
          name: 'Fb guy',
          image: 'Img006.png',
        },
        {
          id: 7,
          name: 'Jacinda',
          image: 'Img007.png',
        },
        {
          id: 8,
          name: 'Donkey Kong',
          image: 'Img008.png',
        },
        {
          id: 9,
          name: 'Nice Sloth',
          image: 'Img009.png',
        },
        {
          id: 10,
          name: 'Young Leo',
          image: 'Img010.png',
        },
        {
          id: 11,
          name: 'Riri',
          image: 'Img011.png',
        },
        {
          id: 12,
          name: 'Pug',
          image: 'Img012.png',
        },
        {
          id: 13,
          name: 'Rob Pat',
          image: 'Img013.png',
        },
        {
          id: 14,
          name: 'Pikachu',
          image: 'Img014.png',
        },
        {
          id: 15,
          name: 'Horse',
          image: 'Img015.png',
        },
      ])
    })
}

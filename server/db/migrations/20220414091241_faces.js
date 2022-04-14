exports.up = (knex) => {
  return knex.schema.createTable('faces', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('faces')
}

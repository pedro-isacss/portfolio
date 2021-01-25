import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("contacts", table => {
    table.string("id").primary();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("birthday").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("contacts");
}

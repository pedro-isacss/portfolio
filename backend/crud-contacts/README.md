# Crud Contacts

![Crud contacs](https://i.pinimg.com/564x/32/cc/c7/32ccc7d5fe1aab1fdf644e30eaef4022.jpg)

## Technologies used

- Node
- Express
- Knex
- Sqlite3

## Schema of a contact

- id
- firstName
- lastName
- email
- phone
- birthday

## Routes

- GET - **/getcontacts**: displays all contacts.
- POST - **/newcontact**: Creates a new contact by receiving the firstName, lastName, email, phone and birthday by the body of the request.
- PUT - **/updatecontact**: Updates a contact by receiving the id, firstName, lastName, email, phone and birthday through the body of the request.
- DELETE - **/deletecontact**: Deletes a contact by receiving the id from the request body.
- DELETE - **/deleteall**: Delete all contacts.
- POST - **/newuser**: Create a new user.
- POST - **/authenticate**: Checks the password and email and generates a jwt if everything is correct.

## Author

This project was developed by [Pedro Isac](https://pedro-isacss.github.io/).

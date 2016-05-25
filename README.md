# Overview

Application that allows users to record short textual entries about a meal in real time while they listen to a curated soundscape. These entries are saved to a database, and available to be displayed and updated in real time. An admin panel allows control over the entries (delete, edit), enable DTLJ to add new restaurants with associated URLs and content, search & filter entries and survey the app stats.

:dancers::sunny::dancers:

[Daily Tous Les Jours](http://www.dailytouslesjours.com/)

![alt tag](./app/_public/assets/dtlj-logo.png)

# Application design

The application's **design document** can be viewed _[here](./app/_public/assets/DTLJ_FoodSessions.pdf)_.

The application's **development board** can be viewed _[here](https://trello.com/b/cQA9OOXq/dtlj-fs)_.

## Goals

1. Maintainability (i.e. documentation, best practices, scalability and simplicity)
2. RESTfulness (i.e. incorporate an API with CRUD endpoints)
3. Reactivity (i.e. views update quickly)
4. Responsivity (i.e. device agnostic)

# API

Route           | Type     | Payload             | Return | Description
--------------- | -------- | ------------------- | ------ | ---------------------------------------------
_/entry_        | **GET**  | n/a                 | Object | Returns the most recent entry
_/entry_        | **POST** | {message: _String_} | Object | Save an entry and returns it
_/entry/:limit_ | **GET**  | n/a                 | Object | Returns the number of entries set in _:limit_

# Development

You will need the following installed and configured on your local machine (i.e. `npm install -g`). These are the tested versions, other _might_ work.

```
node@^6.2.0
npm@^3.9.0
gulp@^3.9.0
jshint@^2.9.2
mocha@^2.4.5
```

You will also need a local `.env` file placed at the root of the project folder with the following variables set:

```
PORT=3000
NODE_ENV='development'
MONGODB_URI='your-mongodb-uri'
DEBUG='foodsessions:*'
```

## Database

I would also suggest to locally installing `mongodb` (>=3.0.12) by following [the instructions here](https://docs.mongodb.com/manual/installation/).

Once `mongodb` is properly installed, you will need to create a directory that will act as a store and point `mongod` to it when you start it in your terminal:

```
mongod --dbpath /absolute/path/to/your/db/folder --smallfiles
```

This will create a `mongod` server that will be available as long as you leave this terminal open. The last thing you need before you are good to go is to create a database. You will only need to do this once.

In a second terminal window:

```
mongo
show dbs
use yourdatabasename
db.testmodel.insert({foo: "bar"})
show dbs
```

By then you should have seen some activity in your `mongod` terminal.

You can now use `mongodb://localhost:27017/yourdatabasename` as your `MONGODB_URI`, just make sure to leave the `mongod` server running in the background when you develop.

## Contributing

First, clone the project on your workstation and switch to the `develop` branch:

```
git clone https://github.com/kuzyn/cuddly-guacamole.git
git checkout develop
```

Second, install the package and run the app locally:

```
npm install
npm start
```

If you want to enable automatic reloading, replace the `npm start` command by `gulp`: all changes will update your browser, making it that much easier to test.

## Commiting

Please make sure to commit all changes to the `develop` branch. Ideally, the commits should also be prefixed by a type:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code * (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Tests

`mocha` will run unit tests<br>
`npm run lint` will do code linting<br>
`npm test` will execute `npm run lint` then do `mocha` tests

You will also notice that some git hooks are set-up to run these tasks in pre-commit and pre-push. If you're sure of what you're doing, you can bypass this with the git argument `--no-verify`.

## Deployment

The branches are setup to be automatically deployed on Heroku when they are pushed to Github.

*develop*
[https://cuddly-guacamole.herokuapp.com/](https://cuddly-guacamole.herokuapp.com/)

*master*
_t.b.c._

# License

See the [LICENSE.md](LICENCE.md) file

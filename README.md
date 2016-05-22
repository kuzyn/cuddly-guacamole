#Overview
Application that allows users to record short textual entries about a meal in real time while they
listen to a curated soundscape. These entries are saved to a database, and available to be
displayed and updated in real time. An admin panel allows control over the entries (delete,
edit), enable DTLJ to add new restaurants with associated URLs and content, search & filter
entries and survey the app stats.  

:dancers::sunny::dancers:

[Daily Tous Les Jours](http://www.dailytouslesjours.com/)

![alt tag](https://s3.amazonaws.com/jobscore-assets/careers_site_header/header_dSkPDOUUqr467CiGak6IKg@2x.png)


#Application design goals
1. Maintainability (i.e. documentation, best practices, scalability and simplicity)
2. RESTfulness (i.e. incorporate an API with CRUD endpoints)
3. Reactivity (i.e. views update quickly)
4. Responsivity (i.e. device agnostic)


#Dependencies
For project dependencies check ```package.json```

As for development dependencies, you will need the following installed and properly configured on your local machine:
```
node    ^6.2.0
npm     ^3.9.0
gulp    ^3.9.0
jshint  ^2.9.2
```

You will also need a local ```.env``` file placed at the root of the project folder with the following variables set:
```
PORT=3000
NODE_ENV='development'
DB_URL='your-mongodb-uri'
DEBUG='foodsessions:*'
```


#Development
First, clone the project on your workstation and switch to the ```develop``` branch:
```
git clone https://github.com/kuzyn/cuddly-guacamole.git
git checkout develop
```

Second, use Gulp to run the app locally and debug:
```
gulp
```

All of your changes will update the app in your browser, making it that much easier to debug.

Please make sure to commit all changes to the **develop** branch. Ideally, the commits should also be prefixed by a type:

* **feat**: A new feature  
* **fix**: A bug fix  
* **docs**: Documentation only changes  
* **style**: Changes that do not affect the meaning of the code   * (white-space, formatting, missing semi-colons, etc)  
* **refactor**: A code change that neither fixes a bug nor adds a feature  
* **perf**: A code change that improves performance  
* **test**: Adding missing tests  
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation  


#Tests

The command ```npm run lint``` will execute JS linting and the command ```npm test``` will also lint, then move to other tests. The linting will also be run automatically on commits by through the ```pre-commit``` npm package.

#API
###TODO


#License
See the [LICENSE.md](LICENCE.md) file

# Phong Project

## Technologies index
- **Docker, Docker-compose** based on Alpine Linux
- **React, Redux** use for  Front-End
- **Ruby on Rails** use for  Back-End
- **Authentication** by cookie
- **PostgreSQL** for Database

## Installation

### Back-End

```bash
docker-compose build # build image
docker-compose run app bundle exec rails db:create # create database
docker-compose run app bundle exec rails db:migrate # migrate
docker-compose run app bundle exec rails db:seed # migrate
docker-compose up # check on http://localhost:3000/
```

### Front-End
The front-end is not yet sync with the docker-compose so we have to some handiwork

```bash
cd front-end # from the project directory
npm install
npm run dev # to start the server -> http://localhost:8080/
```

## Noted
- Use **http://localhost:8080/** for the front-end
- after run **seed**, user can login to with an account below
-- email: admin123@gmail.com, password: **Admin1234**

## Technology Explain
- The Project is not using gem like Devise or CanCanCan to set up admin, the author use his own knowledge to create a simple authorazation
- Using rack-cors to allow request from localhost:80
- Docker-compose for memcached, postgres and ruby server
- the front-end's contruct include:
-- Redux to manage State
-- react-router-dom for Route
-- react-select: to create a select2 for better UI
-- redux-form: to make form
-- Almost components is used hook to describe, only App is class Component
- The main features to meet the requirement is place on:
-- Login Authentication
-- Order filter bar
-- Router and handle State using Redux and react-router-dom
-- Connection and handle background by using Ruby


## Todo
- Still not add test into project
- Beside the login form, other forms is still simple did not have validation yet
- The filter logic is not clean as expect


## Hope you enjoy the project, Thank You!
# FeatherJS & Vuetify

### This project is an admin app for Tradecraft that features multiple small apps created by JP.

## Technologies used

- FeathersJS: Backend
- VueJS: Frontend
- Vuetify: Component Design Library
- MongoDB: Database
- Mongoose: ORM

## Things you need before installing for development

- Node & npm
- MongoDB

### Steps to run it

- Start MongoDB local server (TODO: Figure out best way to distribute database)
```
$ mongod
```

- Clone this repository
```
$ git clone https://github.com/JPML94/vuetify-feathersjs
```

- Move to server directory and install packages
```
$ cd server && npm install
```

- Run the server
```
$ npm run dev
```

- Open new terminal, move to client directory from root project directory and install required packages:
```
$ cd client && npm install
```

- Run client
```
$ npm run serve
```

- Visit [localhost:8080](localhost:8080), create your account and login.

## Current features and next steps on each one

- Gallery: A list of current Tradecraft customers.
    1. Infinite scroll to achieve faster load times
    2. Use smaller sized images
    3. Actual selected card data on modal
    4. Search bar
    5. User settings on card

- TwoByDo: An X/Y board that you can add notes and drag them to different places
    1. Make sticky notes title and body editable
    2. Save sticky notes state on Vuex
    3. Save to MongoDB
    4. Make notes resizable

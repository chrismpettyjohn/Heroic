# Heroic 3S
![enter image description here](https://img.shields.io/badge/Status-Maintained-3379C0.svg?logo=github&longCache=true&style=for-the-badge) ![enter image description here](https://img.shields.io/badge/Version-3S.1-33C070.svg?logo=github&longCache=true&style=for-the-badge) ![enter image description here](https://img.shields.io/badge/Released-05%20NOV%202018-C0338C.svg?logo=github&longCache=true&style=for-the-badge)
## What This Is
### Introduction
Heroic is a **web application** that provides a fast and beautiful interface for habbo retros.  It uses modern technology including, but not limited to **Node.js**, **Vue.js** and additional node based libraries such as **Fastify**, **Babel** and **Objection**.
### Screenshots
https://imgur.com/a/HbiKJpI
### Development Team
chrismpettyjohn - Lead & Sole Developer
## Features

### Developer Oriented
 - Powerful REST API endpoints
 - JWT based authentication 
 - Cross platform compatibility
 - SQL queries processed through an ORM
 - Easy to extend and build onto the API
### User Oriented
 - Very safe and secure
 - Design based on current habbo.com UI
 - Very fast site experience 
 - Custom client loader and ability to visit pages on site without closing client
 - Lots of pages such as top users, online users, staff team and more

## Installation

 1. Install the latest version of Node from https://nodejs.org/en/download/current/
 2. Import Arcturus database which can be found at http://arcturus.pw/mirrors/
 3. Download the latest release from https://github.com/chrismpettyjohn/Heroic/releases
 4. Move the package contents to an easily accessible folder
 5. Import Heroic's tables into your arcturus database which can be found at `heroic.sql`
 6. Edit the settings using a code editor in `config.json`
 7. Open up an instance of terminal in your folder and run `npm start`

## Configuration Help
```json5
{
  "sql": {
    "host": "127.0.0.1",        // Your database host
    "user": "root",             // Your database user
    "password": "password",     // Your database pass
    "database": "habbo"         // Your database name
  },
  "web": {
    "port": "80"               // What port do you want your server to run on
  },
  "hash": "do-not-share-this"    // This is the hash used when signing JWT tokens
}
```

## Modifying Heroic
### Backend

 1. Download the backend source from https://github.com/chrismpettyjohn/Heroic/tree/backend-source
 2. Move the package contents to an easily accessible location
 3. Open a terminal instance in the folder and run `npm i`
 4. Edit your `config.json` as you would normally
 5. Run the command `npm run debug` and any changes will automatically take place
 6. Once finished:
   7. Stop the debug command (CTRL-C)
   8. Run the command `npm run clean`
   9. Rebuild the source to ES5 using `npm run build`
   10. Copy the contents of "production" to your Heroic instance

### Frontend

 1. Download the frontend source from https://github.com/chrismpettyjohn/Heroic/tree/frontend-source
 2. Move the package contents to an easily accessible location
 3. Open a terminal instance in the folder and run `npm i`
 4. Edit the API handler found at `src/app/api.js` and change the URL to your Heroic instance
 5. Now run the command `npm run serve` in terminal
 6. Any changes you make will automatically take place live using hot-reloading
 7. Once finished:
   8. Modify the API handler to route to `/api/`
   9. Stop the serve command (CTRL-C)
   10. Run the command `npm run lint --fix`
   11. Rebuild the instance using `npm run build`
   12. Copy the `dist` folder contents to your instance's public folder  
 

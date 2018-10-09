# Heroic - Frontend 
Basic information on how to get going 


## Sync to API 
Modify `/src/app/api.js` and change "localhost:8090" to your API's domain endpoint (ie: api.site.com)
```javascript
import Axios from 'axios'

const API = Axios.create({
  baseURL: `http://localhost:8090/`
})

export default API
```


## Install Dependencies
```bash
npm i
```

## Compile Project
This will create a `dist` directory which is ready to be deployed to a web server such as NGINX, IIS, Apache and so forth.
```bash
npm run build
```

## Run Development Server 
This will automaticaly reload changes as they appear 
```bash
npm run serve
```

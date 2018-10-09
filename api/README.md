# Heroic - API 

## Configure Server
The config file can be located at `/config/system.json` 
```json
{
	"sql": {
		"host": "127.0.0.1",        (Your database host)
		"user": "root",             (Your database user)
		"password": "password",     (Your database pass)
		"database": "habbo"         (Your database name)
	},
	"web": {
		"http": 1,                  (Should always be set to 1 for now)
		"port": "8090"              (What port do you want your server to run on)
	},
	"advanced": {
		"workers": 1,               (How many processes should Heroic use)
		"secret": "Heroic3"         (This is the key used to sign JWT tokens, never share this)
	}
}
```

## Install Dependencies
```bash
npm install
```


## Build Server
You can build the server to a ES5 based one, so you don't have to Babel transpile at compile time.
```bash
npm run build
```


## Debug Mode 
You can run the server in debug mode which will automatically reload the server when changes are made
```bash
npm run debug
```

# Heroic
Modern web application built with Node and Angular

## Getting Started
Heroic 3S makes it easier than ever to get your retro running quickly.  


### Database
Please import the database file located in `/config/heroic.sql` prior to setting up Heroic 

### Configuration
Your config file is located in `/config/system.json` and looks something like this.  Use it to modify the basics of Heroic
```json5
{
	"sql": {
		"host": "127.0.0.1",        // Your database host
		"user": "root",             // Your database user
		"password": "password",     // Your database pass
		"database": "habbo"         // Your database name
	},
	"web": {
		"http": 1,                  // Should always be set to 1 for now
		"port": "8090"              // What port do you want your server to run on
	},
	"advanced": {
		"workers": 1,               // How many processes should Heroic use
		"secret": "Heroic3"         // This is the key used to sign JWT tokens, never share this
	}
}
```

### Running It 
Simply run this command from your directory to get started.  This will install all dependencies and start the server
```bash
npm start
```

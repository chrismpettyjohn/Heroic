## Heroic Instalation
Instructions on how to install Heroic (2) will be provided below.  Be sure to follow each step directly to avoid error and or confusion.

### Downloads 
- [Node 10.0](https://nodejs.org/dist/v10.0.0/node-v10.0.0.pkg)
- [MariaDB](https://downloads.mariadb.org/interstitial/mariadb-10.2.14/winx64-packages/mariadb-10.2.14-winx64.msi/from/http%3A//mirrors.syringanetworks.net/mariadb/)
- [Navicat](https://www.navicat.com/en/download/navicat-premium)
- [Heroic](http://www.mediafire.com/file/wq7jc47nd94dunw/Heroic%20Two.zip)

#### Discord
[https://discord.gg/y6szGk5](https://discord.gg/y6szGk5)

### Steps 
1. Install Node 10 (First download link)
2. Install MariaDB (Second download link) (*Do not forget your password*)
3. Install Navicat (option) to manage your database 
4. Drag Heroic to your desktop 
5. Import the "database.sql" into your database using Navicat 
6. Open up command prompt and cd into your folder 
7. run "npm i" and wait for it to finish
8. Edit config.ini and check your database details 
9. Right click Heroic.exe and click "start as administrator"

### Issues?

#### Heroic.exe closes upon open?
1. Open up command prompt
2. CD to the directory with your file (cd /dir)
3. Run the command "heroic.exe"
4. If any errors come out; you have found the problem.

#### Port 80 in use 
Try stopping IIS, or any other web servers that may take up port 80.  Also run as administrator.

#### Need more help?
Join the official Discord community at [https://discord.gg/y6szGk5](https://discord.gg/y6szGk5)

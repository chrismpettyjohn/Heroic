# Heroic 3
Retros as never experienced before

## Getting Started
This tutorial assumes you are using CentOS

#### Technical Stack
* MariaDB
* NodeJS

#### Preparation 
1. yum update -y
2. yum install vim

#### Installing DB
1. yum install mariadb-server
2. service mariadb start
3. mysql -u root -p


#### Installing Node
1. curl -sL https://rpm.nodesource.com/setup_11.x | sudo bash -
2. yum install nodejs

#### Downloading Heroic
1. curl -L https://github.com/chrismpettyjohn/heroic/tarball/production > heroic.gz
2. mkdir web
3. tar -xzf heroic.gz -C web --strip-components=1
4. cd web/distribution

#### Preparing Database 
1. mysql -u root -p
2. CREATE DATABASE habbo;
3. exit;
4. mysql -u root -p habbo < arcturus.sql
5. mysql -u root -p habbo < heroic.sql

#### Configuring Heroic
5. npm i
6. vim config.json (You will have to push "i" to edit it) (Update this file to your db config)
7. Push "esc" and type :x

#### Starting
sudo npm start

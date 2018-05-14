# Database Modifications

## users
### change
account_created
type changed to `timestamp` with default value of `current_timestamp()`
length changed to `0`


## permissions
### changed
NEW_COLUMN `cms_admin`
type ENUM `'0','1'`
default `'0'`
<br>
NEW_COLUMN `cms_display_staff`
type ENUM `'0','1'`
default `'0'`
<br>
NEW_COLUMN `badge`
type varchar
default `BE1`

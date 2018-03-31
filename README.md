# README

## I Am Statsman

### Overview
This is a project to create a 'dashboard' of various performance and team based statistics.

Things it will contain:

* Site Performance graphs (page speed)

* Trouble Ticket reports (by severity)

* Code Test Coverage graph 

* Site 3rd Party Tag counts

* Other team based information

### Getting Setup
This project uses the following:

* Postgres Database
* Materialize CSS and JS
* JQuery
* Ruby 2.5.x, Rails 5.x
* Chartkick
* React (react on rails gem)

To get started:

1. clone or fork the repository
2. ensure you have ruby (proper version) installed, and use RVM
3. cd into the repository
4. run 'bundle'
5. setup the database (rails db:create db:migrate)
6. optionally run the database seed file (rails db:seed)
7. run the app (rails s)

__Development__:
I use Sublime Text 2 for my IDE, but you don't have to.  I also use a MacBook, so if you have Windows specific issues, I can't help you there.

__Issues__:
1. Issue with form submission -  need to fix the react form.
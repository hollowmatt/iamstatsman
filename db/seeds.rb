# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Load some default data into the Siteperf table
# pagename:string marketplace:string snapshot:date serverside:integer domload:integer onload:integer pagesize:decimal
#
site_perf_list = [
  {
   	pagename: "Anon Homepage",
   	marketplace: "CA",
    snapshot: Date.new(2018 , 03, 24), 
    serverside: 179,
    domload: 696,
    onload: 817,
    pagesize: 869.54
  },
  {
   	pagename: "Anon Homepage",
   	marketplace: "DE",
    snapshot: Date.new(2018 , 03, 24), 
    serverside: 402,
    domload: 1200,
    onload: 2600,
    pagesize: 2870.00
  }
]

site_perf_list.each do |page|
  Siteperf.create( 
  	pagename: page[:pagename], 
  	marketplace: page[:marketplace], 
  	snapshot: page[:snapshot], 
  	serverside: page[:serverside],
  	domload: page[:domload],
  	onload: page[:onload],
  	pagesize: page[:pagesize]
  )
end
#------------/

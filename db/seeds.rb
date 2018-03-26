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

# Load default team data into Team table
# name:string sdm:string techlead:string tpm:string pm:string sm:string
#
team_list = [
	{
		name: "Team 1",
		sdm: "Person",
		techlead: "Person",
		tpm: "Person",
		pm: "Person", 
		sm: "Person"
	},
	{
		name: "Team 2",
		sdm: "Person",
		techlead: "Person",
		tpm: "Person",
		pm: "Person", 
		sm: "Person"
	},
	{
		name: "Team 3",
		sdm: "Person",
		techlead: "Person",
		tpm: "Person",
		pm: "Person", 
		sm: "Person"	
	},
	{
		name: "Team 4",
		sdm: "Person",
		techlead: "Person",
		tpm: "Person",
		pm: "Person", 
		sm: "Person"
	},
	{
		name: "Team 5",
		sdm: "Person",
		techlead: "Person",
		tpm: "Person",
		pm: "Person", 
		sm: "Person"
	},
	{
		name: "Team 6",
		sdm: "Person",
		techlead: "Person",
		tpm: "Person",
		pm: "Person", 
		sm: "Person"
	}
]

team_list.each do |team|
  Team.create( 
  	name: team[:name], 
  	sdm: team[:sdm], 
  	techlead: team[:techlead], 
  	tpm: team[:tpm],
  	pm: team[:pm],
  	sm: team[:sm]
  )
end
#------------/

# Create some tickets
count = 1
multiplier = 1
tix = 16
tix_count = 0
while count < 100
	ticket_num = count.to_s.rjust(10, '0')
	@team = Team.find(multiplier)
	ticket = @team.tickets.create(severity: 2 + rand(5), ticket_num: ticket_num, title: ticket_num + " description")
	tix_count = tix_count + 1
	if (tix_count >= tix)
		if (multiplier <6)
			multiplier = multiplier + 1
		end
	end
	count = count + 1
end
#------------/

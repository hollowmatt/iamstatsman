class HomeController < ApplicationController
	def index
		# @perfs = Siteperf.all
		@perfdata = [
		  {
		    name: "Page Load", 
		    data: [["This Week", 220], ["Last Week", 1000], ["Last Month", 1200]]
		  },
		  {
		    name: "Dom Load", 
		    data: [["This Week", 400], ["Last Week", 1600], ["Last Month", 1600]]
		  },
		  {
		    name: "Server Side", 
		    data: [["This Week", 100], ["Last Week", 160], ["Last Month", 280]]
		  }
		]
		@perfstats = [
			{
				name: "Missing Coverage",
				data: [["This Week", 19], ["Last Week", 29]]
			},
			{
				name: "Coverage",
				data: [["This Week", 81], ["Last Week", 71]]
			}
		]
	end
end

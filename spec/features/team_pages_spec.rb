require 'rails_helper'

describe "index page", :type => :request do 
	it "displays a list of teams" do 
		team = FactoryBot.create(:team)
		get "/teams"
		assert_select ".team-name", text: 'TestTeam'
	end
end
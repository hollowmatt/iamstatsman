require 'rails_helper'

describe Team do 
	it "is valid with all content provided" do
		team = create(:team)
		expect(team).to be_valid
	end
end

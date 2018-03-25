require 'rails_helper'

describe Team do 
	it "is valid with all content provided" do
		team = create(:team)
		expect(team).to be_valid
	end

	it "is invadlid without a team name" do 
		expect(FactoryBot.build(:team, name: nil)).to_not be_valid
	end

	it "is invalid with a duplicate team name" do 
		team = create(:team)
		expect(team).to be_valid
		expect(FactoryBot.build(:team)).to_not be_valid
	end
end

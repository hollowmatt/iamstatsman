require 'rails_helper'

describe Siteperf do 
	it "is valid with all content provided" do
		siteperf = create(:siteperf)
		expect(siteperf).to be_valid
	end
end
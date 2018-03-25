require 'rails_helper'

describe "home page", :type => :request do 
	it "displays the home page" do 
		get "/"
		assert_select ".section-title", text: 'Site Performance'
	end
end
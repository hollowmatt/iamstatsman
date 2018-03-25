include ActionDispatch::TestProcess

FactoryBot.define do  
  factory :siteperf do
  	pagename 'Test Page'
		marketplace 'CA' 
		snapshot Date.new()
		serverside 100
		domload 200
		onload 400
		pagesize 1200.00
	end
end
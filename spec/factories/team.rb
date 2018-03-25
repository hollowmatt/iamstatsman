include ActionDispatch::TestProcess

FactoryBot.define do  
  factory :team do
  	name 'TestTeam'
		sdm 'Manager' 
		techlead 'Tech Lead'
		tpm 'Program Manager'
		pm 'Product Manager'
		sm 'Scrum Master'
	end
end

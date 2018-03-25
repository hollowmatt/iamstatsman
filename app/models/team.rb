class Team < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :sdm, presence: true
end

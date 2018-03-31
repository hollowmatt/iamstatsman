class Api::V1::TeamsController < Api::V1::BaseController
	
	def index
		render json: Team.all
	end

	def create
		respond_with :api, :v1, Team.create(team_params)
	end

	def destroy
		respond_with Team.destroy(params[:id])
	end

	def update
		team = Team.find(params["id"])
		team.update_attributes(team_params)
		respond_with team, json: team
	end

	def show
		team = Team.find(params["id"])
		respond_with team, json: team
	end

	private
		def team_params
			params.require(:team).permit(:id, :name, :sdm, :techlead, :tpm, :pm, :sm)
		end


end

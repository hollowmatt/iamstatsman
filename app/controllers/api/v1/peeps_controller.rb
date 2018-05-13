class Api::V1::PeepsController < Api::V1::BaseController

	def index
		respond_with Peep.all
	end

	def create
		respond_with :api, :v1, Peep.create(peep_params)
	end

	def destroy
		respond_with Peep.destroy(params[:id])
	end

	def update
		peep = Peep.find(params["id"])
		peep.update_attributes(peep_params)
		respond_with peep, json: peep
	end

	def show
		peep = Peep.find(params["id"])
		respond_with peep, json: peep
	end

	private
		def peep_params
			params.require(:peep).permit(:id, :first_name, :last_name)
		end
end
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :getFeatures

  def getFeatures

  	cookies[:key] = {
       :value => 'a yummy cookie',
       :expires => 1.year.from_now,
       :domain => 'domain.com'
     }
   end
end

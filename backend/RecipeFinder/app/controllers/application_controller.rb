class ApplicationController < ActionController::API
   require 'net/http'
   require 'uri'

   def index
      query = params[:id]
      puts "I'm here"
      recipe_uri = URI("http://www.recipepuppy.com/api/?q=#{query}")
      response = Net::HTTP.get_response(recipe_uri)
      render plain: response.body.squish
   end
end

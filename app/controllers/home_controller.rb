class HomeController < ApplicationController
  def index
    @data = { greeting: 'HelloFromAPI' }
  end
end

class ApplicationController < ActionController::Base
  include SessionsHelper
  # skip CSRF token
  protect_from_forgery
  skip_before_action :verify_authenticity_token

end

class UserMailer < ApplicationMailer
  def status_change_email(status, user_email)
    @status = status
    @url  = 'http://example.com/login'
    mail(to: user_email, subject: 'Order Status Changed')
  end
end

class OrderSetting < ApplicationRecord
  enum status: { open: 0, pending: 1, deliver: 2, paid: 3, close: 4 }

  validates :title, presence: true
  
  belongs_to :user
  before_save :send_notify

  private
    def send_notify
      UserMailer.status_change_email(status, user.email)
    end
  
end


class User < ApplicationRecord
  has_secure_password

  NO_SPECIAL_CHAR = /\A[a-zA-Z0-9 ]+\Z/
  LEAST_1_UP_LOW_NUM = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  validates :password, presence: true, length: { minimum: 4, maximum: 16 }
  validates :password, format: { with: LEAST_1_UP_LOW_NUM, message: 'Should contain at least 1 upper-case, 1 lower-case and 1 number'}
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  before_save { self.email = email.downcase }
  # before_save :create_remember_token

  has_many :order_settings, dependent: :destroy

  private

    def create_remember_token
      self.remember_token = User.digest(User.new_remember_token)
    end

    class << self
      def new_remember_token
        SecureRandom.urlsafe_base64
      end

      def digest(token)
        Digest::SHA1.hexdigest(token.to_s)
      end
    end
end

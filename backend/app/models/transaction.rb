class Transaction < ApplicationRecord
  validates :reference, presence: true, uniqueness: true
  validates :flow_type, presence: true
  validates :status, presence: true
  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :currency, presence: true
  validates :country, presence: true
end
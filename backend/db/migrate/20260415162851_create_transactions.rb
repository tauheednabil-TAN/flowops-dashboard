class CreateTransactions < ActiveRecord::Migration[8.1]
  def change
    create_table :transactions do |t|
      t.string :reference
      t.string :flow_type
      t.string :status
      t.decimal :amount
      t.string :currency
      t.string :country
      t.string :customer_name
      t.string :beneficiary_name
      t.string :masked_account
      t.string :failure_reason

      t.timestamps
    end
  end
end

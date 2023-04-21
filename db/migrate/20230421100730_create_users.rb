class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :phoneNumber
      t.string :amount
      t.string :checkoutRequestID
      t.string :merchantRequestID
      t.string :mpesaReceiptNumber

      t.timestamps
    end
  end
end

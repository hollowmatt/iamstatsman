class CreateTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :tickets do |t|
      t.belongs_to :team, index: true
      t.integer :severity
      t.string :ticket_num
      t.string :title

      t.timestamps
    end
  end
end

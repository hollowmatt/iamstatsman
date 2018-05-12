class CreatePeeps < ActiveRecord::Migration[5.1]
  def change
    create_table :peeps do |t|
      t.first_name :string
      t.last_name :string

      t.timestamps
    end
  end
end

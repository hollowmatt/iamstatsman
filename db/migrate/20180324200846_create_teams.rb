class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :sdm
      t.string :techlead
      t.string :tpm
      t.string :pm
      t.string :sm

      t.timestamps
    end
  end
end

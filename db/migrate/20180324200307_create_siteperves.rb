class CreateSiteperves < ActiveRecord::Migration[5.1]
  def change
    create_table :siteperves do |t|
      t.string :pagename
      t.string :marketplace
      t.date :snapshot
      t.integer :serverside
      t.integer :domload
      t.integer :onload
      t.decimal :pagesize

      t.timestamps
    end
  end
end

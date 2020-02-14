class AddNotesWithArray < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :notes, :string, null: false, array: true, default: []
  end
end

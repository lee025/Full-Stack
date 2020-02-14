class ChangeNotes < ActiveRecord::Migration[5.2]
  def up
    remove_column :tasks, :notes
  end

  def down
    add_column :tasks, :notes, null: false, array: true, default: []
  end
end

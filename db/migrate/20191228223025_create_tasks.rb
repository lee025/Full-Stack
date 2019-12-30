class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :task_name, null: false
      t.integer :list_id, null: false
      t.date :start
      t.date :due
      t.string :notes
      t.boolean :completed, null: false, default: false

      t.timestamps
    end
    add_index :tasks, :list_id
  end
end

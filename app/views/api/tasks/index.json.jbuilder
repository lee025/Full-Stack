@tasks.each do |task|
  json.set! task.id do   
    json.extract! task, :id, :task_name, :list_id, :start, :due, :completed, :notes
    # json.notes []
  end
end
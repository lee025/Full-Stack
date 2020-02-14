json.extract! list, :id, :title, :user_id

# json.tasks do   
#   @list.tasks.each do |task|
#     json.set! task.id do   
#       json.extract! @task, :id, :task_name, :list_id, :start, :due, :notes, :completed 
#     end
#   end
# end 
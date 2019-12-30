# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
List.destroy_all
Task.destroy_all

u1 = User.create!({username: '123', email: '123@123.com', password: '123123'})
u2 = User.create!({username: '1', email: '1@1.com', password: '123123'})


# Lists
l1 = List.create!({title: 'work', user_id: u1.id})
l2 = List.create!({title: 'play', user_id: u1.id})

l3 = List.create!({title: 'fruits', user_id: u2.id})
l4 = List.create!({title: 'ONE FISH', user_id: u2.id})

# Work List Tasks
t1 = Task.create!(task_name: 'MVP 1', list_id: l1.id, start: nil, due: nil, notes: 'UserAuth', completed: false)
t2 = Task.create!(task_name: 'MVP 2', list_id: l1.id, start: nil, due: nil, notes: 'Lists', completed: false)
t3 = Task.create!(task_name: 'MVP 3', list_id: l1.id, start: nil, due: nil, notes: 'Tasks', completed: false)
# Play List Tasks
t4 = Task.create!(task_name: 'boulder', list_id: l2.id, start: nil, due: nil, notes: 'EarthTrek', completed: false)
t5 = Task.create!(task_name: 'hike', list_id: l2.id, start: nil, due: nil, notes: 'Billy Goat', completed: false)


t5 = Task.create!(task_name: 'apple', list_id: l3.id, start: nil, due: nil, notes: 'fuji', completed: false)
t5 = Task.create!(task_name: 'banana', list_id: l3.id, start: nil, due: nil, notes: 'yellow', completed: false)
t5 = Task.create!(task_name: 'two fish', list_id: l4.id, start: nil, due: nil, notes: 'red fish, blue fish', completed: false)


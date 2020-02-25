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

u0 = User.create!({username: 'Demo User', email: 'demo@demo.com', password: '123123'})
u1 = User.create!({username: '123', email: '123@123.com', password: '123123'})
u2 = User.create!({username: '1', email: '1@1.com', password: '123123'})


# Lists
l1 = List.create!({title: 'work', user_id: u1.id})
l2 = List.create!({title: 'play', user_id: u1.id})

l3 = List.create!({title: 'fruits', user_id: u2.id})
l4 = List.create!({title: 'ONE FISH', user_id: u2.id})

l5 = List.create!({title: 'Groceries', user_id: u0.id})
l6 = List.create!({title: 'Chores', user_id: u0.id})

# Work List Tasks
t1 = Task.create!(task_name: 'MVP 1', list_id: l1.id, start: nil, due: nil, notes: ['UserAuth'], completed: false)
t2 = Task.create!(task_name: 'MVP 2', list_id: l1.id, start: nil, due: nil, notes: ['Lists'], completed: false)
t3 = Task.create!(task_name: 'MVP 3', list_id: l1.id, start: nil, due: nil, notes: ['Tasks'], completed: false)
# Play List Tasks
t4 = Task.create!(task_name: 'boulder', list_id: l2.id, start: nil, due: nil, notes: ['EarthTrek'], completed: false)
t5 = Task.create!(task_name: 'hike', list_id: l2.id, start: nil, due: nil, notes: ['Billy Goat'], completed: false)


t5 = Task.create!(task_name: 'apple', list_id: l3.id, start: nil, due: nil, notes: ['fuji'], completed: false)
t5 = Task.create!(task_name: 'banana', list_id: l3.id, start: nil, due: nil, notes: ['yellow'], completed: false)
t5 = Task.create!(task_name: 'two fish', list_id: l4.id, start: nil, due: nil, notes: ['red fish, blue fish'], completed: false)

t6 = Task.create!({task_name: "milk", list_id: l5.id, start: nil, due: nil, notes: ['Almond Milk'], completed: false})
t7 = Task.create!({task_name: "eggs", list_id: l5.id, start: nil, due: nil, notes: ['A dozen large'], completed: false})
t8 = Task.create!({task_name: "butter", list_id: l5.id, start: nil, due: nil, notes: ['Unsalted'], completed: false})
t9 = Task.create!({task_name: "cereal", list_id: l5.id, start: nil, due: nil, notes: ['Cheerios'], completed: false})

t10 = Task.create!({task_name: "Trash", list_id: l6.id, start: nil, due: nil, notes: ['Mondays & Thursdays'], completed: false})
t11 = Task.create!({task_name: "Walk the dog", list_id: l6.id, start: nil, due: nil, notes: ['goPup! app'], completed: false})
t12 = Task.create!({task_name: "workout", list_id: l6.id, start: nil, due: nil, notes: ['[SolidCore]'], completed: false})
t13 = Task.create!({task_name: "laundry", list_id: l6.id, start: nil, due: nil, notes: ['Clothes', 'Sheets', 'Towels'], completed: false})

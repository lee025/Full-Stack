class Task < ApplicationRecord
  validates :task_name, presence: true
  validates_inclusion_of :completed, in: [true, false]

  belongs_to :list
end

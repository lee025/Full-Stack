@lists.each do |list|
  json.set! list.id do    
    json.partial! 'list', list: list 
  end
end

# json.array! @lists do |list|
#   json.extract! list, :id, :title
# end
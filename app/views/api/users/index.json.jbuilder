# Testing ONLY

@users.each do |user|

    json.set! user.id do
      json.username user.username 
      json.email user.email
    end

end
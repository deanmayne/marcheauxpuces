@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :rating, :body, :author_id, :product_id
    json.username review.author.username
  end
end
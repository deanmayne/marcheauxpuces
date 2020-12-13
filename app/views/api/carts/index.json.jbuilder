@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_id, :shopper_id
  end
end
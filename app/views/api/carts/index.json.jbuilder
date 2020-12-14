@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :description, :price, :location, :free_shipping, :category, :owner_id, :img_url
  end
end
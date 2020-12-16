export const fetchFavoriteProducts = (liker_id) =>
  $.ajax({
    url: `/api/favorites/`,
    method: "GET",
    data: { liker_id },
  });

export const addToFavorites = ( product ) =>
  $.ajax({
    url: `/api/favorites/`,
    method: "POST",
    data: { product },
  });

export const removeFromFavorites = (product_id) =>
  $.ajax({
    url: `/api/favorites/${product_id}`,
    method: "DELETE",
  });



export const fetchProducts = () => (
    $.ajax({
        url: `/api/products/`,
        method: 'GET'
    })
);

export const fetchCategoryProducts = (category) => (
    $.ajax({
        url: `/api/products/`,
        method: 'GET',
        data: {category}
    })
);

export const fetchProduct = productId => (
    $.ajax({
        url: `/api/products/${productId}/`,
        method: 'GET'
    })
);

export const createProduct = product => (
    $.ajax({
        url: `/api/products/`,
        method: 'POST',
        data: { product }
    })
);

export const updateProduct = product => (
    $.ajax({
        url: `/api/products/${product.id}`,
        method: 'PATCH',
        data: { product }
    })
);

export const deleteProduct = productId => (
    $.ajax({
        url: `/api/products/${productId}/`,
        method: 'DELETE'
    })
)

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
);
const ApiUrlServices = {
    ADD_PRODUCT: "/products",
    GET_ALL_PRODUCTS: "/products",
    GET_SINGLE_PRODUCT: (id) => `/products/${id}`,
    UPDATE_SINGLE_PRODUCT: (id) => `/products/${id}`,
}

export default ApiUrlServices;
export interface Product {
    _id: number,
    name: string,
    slug: string
}

export interface FetchProductsResponse {
    count: number,
    next: null,
    previous: null,
}
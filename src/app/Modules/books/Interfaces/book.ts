export interface Book {
    _id: number,
    name: string,
    description: string,
    auther: string,
    price: number,
    category: number,
    status: string,
    updatedAt: string,
    createdAt: string,
    __v: number
}

export interface GetAllBooksApi {
    data: Book[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    page: number;
    total: number;
}
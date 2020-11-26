interface User{
    username: string,
    imageUrl: string
}

export default interface Story{
    user: User,
    id: string,
    imageUrl: string,
    relevance: number,
    createdAt: Date
}
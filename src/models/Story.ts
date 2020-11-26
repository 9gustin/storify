import User from "./User";

export default interface Story{
    user: User,
    id: string,
    imageUrl: string,
    createdAt: Date
}
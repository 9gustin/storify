import Story from "./Story";
import User from "./User";

export default interface StoryGroup{
    user: User,
    id: string,
    stories: Story[],
    createdAt: Date
}
import Story from "../models/Story";
import StoryGroup from "../models/StoryGroup";
import { ADD_STORIES, SET_STORIES } from "./StoryActions";

interface Action {
    type: typeof SET_STORIES | typeof ADD_STORIES,
    payload: Story[]
}

const StoryReducer = (state: any, action: Action) => {
    switch (action.type) {
        case SET_STORIES:
            return { stories: mapStories(action.payload) };
        case ADD_STORIES:
            return { stories: mapStories([...state.stories, ...action.payload]) };
        default: return state;
    }
}

const sortStories = (stories: Story[]): Story[] => {
    return stories.sort((a, b) => {
        if (a.user?.relevance > b.user?.relevance) return 1;
        if (a.user?.relevance < b.user?.relevance) return -1;
        if (a.createdAt > b.createdAt) return 1;
        if (a.createdAt < b.createdAt) return -1;

        return -1;
    });
}

const mapStories = (stories: Story[]): StoryGroup[] => {
    let reducedArray: StoryGroup[] = [];

    sortStories(stories).forEach(story => {
        if (!reducedArray.some(s => s.user.username === story.user.username)) {
            let storyGroup: StoryGroup = {
                id: story.id,
                createdAt: story.createdAt,
                user: story.user,
                stories: []
            }
            reducedArray.push(storyGroup);
        }
    });

    return reducedArray.map(story => {
        return { ...story, stories: stories.filter(s => s.user.username === story.user.username) };
    });
}

export default StoryReducer;
import Story from "../models/Story";
import { ADD_STORIES, SET_STORIES } from "./StoryActions";

interface Action {
    type: typeof SET_STORIES | typeof ADD_STORIES,
    payload: Story[]
}

const StoryReducer = (state: any, action: Action) => {
    switch (action.type) {
        case SET_STORIES:
            return { stories: SortStories(action.payload) };
        case ADD_STORIES:
            return { stories: SortStories([...state.stories, ...action.payload]) };
        default: return state;
    }
}

//TODO: GET DATE
const SortStories = (stories: Story[]): Story[] => {
    return stories.sort((a, b) => (a.relevance - b.relevance));
}

export default StoryReducer;
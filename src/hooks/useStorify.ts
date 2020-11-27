import { useEffect, useReducer } from "react";
import { ADD_STORIES, SET_STORIES } from "../context/StoryActions";
import StoryReducer from "../context/StoryReducer";
import Story from "../models/Story";

const useStorify = (initialStories: any[]) => {
    const initialState = { stories: [] };

    const [storiesState, dispatchStories] = useReducer(StoryReducer, initialState);

    const addStories = (stories: Story[]): void => {
        dispatchStories({ type: ADD_STORIES, payload: stories });
    }

    const setStories = (stories: Story[]): void => {
        dispatchStories({ type: SET_STORIES, payload: stories });
    }

    useEffect(() => { setStories && setStories(initialStories); }, [])

    return { stories: storiesState.stories, addStories, setStories };
}

export default useStorify;
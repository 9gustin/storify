import { ReactNode, useReducer } from "react";
import Story from "../models/Story";
import StoryContext from "./StoryContext";
import StoryReducer from "./StoryReducer";
import { ADD_STORIES, SET_STORIES } from "./StoryActions";
interface Props {
    children: ReactNode;
}

const StoryProvider = ({ children }: Props): JSX.Element => {
    const initialState = {stories: []};
    
    const [storiesState, dispatchStories] = useReducer(StoryReducer, initialState);

    const addStories = (stories:Story[]):void =>{
        dispatchStories({type: ADD_STORIES, payload: stories});
    }

    const setStories = (stories:Story[]):void =>{
        dispatchStories({type: SET_STORIES, payload: stories});
    }
    
    return <StoryContext.Provider value={{stories: storiesState.stories, addStories, setStories}}>
        {children}
    </StoryContext.Provider>
}

export default StoryProvider;
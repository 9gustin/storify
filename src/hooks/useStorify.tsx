import { useContext, useEffect } from "react";
import StoryContext from "../context/StoryContext";

const useStorify = (initialStories:any[]) => {
    const { stories, addStories, setStories } = useContext(StoryContext);

    useEffect(() => {setStories && setStories(initialStories);}, [])
    
    return { stories, addStories, setStories };
}

export default useStorify;
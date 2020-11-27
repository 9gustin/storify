import { useEffect, useState } from "react";
import Story from "../models/Story";
import StoryGroup from "../models/StoryGroup";

interface Props{
    stories: StoryGroup[],
    actualStoryGroup: StoryGroup
}

const useStoriesPaginator = ({stories, actualStoryGroup}:Props) => {
    const [actualStory, setActualStory] = useState<Story | null>(null);
    const [storiesLine, setStoriesLine] = useState<Story[] | null>(null);
    const [position, setPosition] = useState<number>(0);

    //TODO: Checkear orden por fecha(ver mas antiguas primero)
    useEffect(() => {
        let storyToView = storiesLine && storiesLine.find(s => (s.user.username === actualStoryGroup.user.username));
        setActualStory(storyToView ?? null);

        setPosition(storiesLine ? storiesLine.findIndex(s => s.id === storyToView?.id) : 0);
    }, [storiesLine])

    const start = () => {
        setStoriesLine(stories
            .map(s => s.stories)
            .reduce((a, b) => [...a, ...b]));
    }

    const movePosition = (isNext: boolean) => {
        let tempPosition = isNext ? position + 1 : position - 1;
        let storyToView = storiesLine && storiesLine[tempPosition];

        if (storyToView) {
            setPosition(tempPosition);
            setActualStory(storyToView);
        }
    }
    const prev = () => movePosition(false);
    const next = () => movePosition(true);


    return {actualStory, prev, next, start};
}

export default useStoriesPaginator;
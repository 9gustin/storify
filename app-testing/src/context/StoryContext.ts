//! deprecated: replaced for useStorify, testing and after this context will be removed

import React from 'react';
import { createContext } from "react";
import Story from "../models/Story";

interface StateType{
    stories?: Story[],
    addStories?: Function,
    setStories?:Function
}

const StoryContext = createContext<StateType>({});

export default StoryContext;
import dateDiff from "../utils/DateDiff";
import User from "./User";

export default interface Story {
    user: User,
    id: string,
    imageUrl: string,
    createdAt: Date,
    viewed: boolean
}

const createdAtToString = (story: Story):string => {
    let result = dateDiff(new Date(), new Date(story.createdAt));
    let strDate:string = '';

    if(result){
        if(result.days && result.days > 0) strDate = `${result.days}d`;
        else if(result.hours && result.hours > 0) strDate = `${result.hours}h`;
        else if(result.minutes && result.minutes > 0) strDate = `${result.minutes}m`;
        else if(result.seconds && result.seconds > 0) strDate = `${result.seconds}s`;
    }

    return strDate;
}

export { createdAtToString };
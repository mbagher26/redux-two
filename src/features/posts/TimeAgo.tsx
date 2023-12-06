import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({timestamp}: {timestamp: string}) =>{

    let timeAgo = ''
    if(timestamp){
        const date = parseISO(timestamp);
        const timePeroid = formatDistanceToNow(date);
        timeAgo = `${timePeroid} ago`
    }
    
    return(
        <span title={timestamp}>
            <i>{timeAgo}</i>
        </span>
    )
}
export default TimeAgo
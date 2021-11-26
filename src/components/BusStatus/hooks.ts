import {format as timeFormat} from "date-fns";
export function useTimer(time:Date|number, format:string){
    return timeFormat(new Date(time),format)
}
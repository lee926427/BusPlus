import {ReactNode, HTMLAttributes,FC,ReactElement} from "react";
import clsx from "clsx";

interface TimerProps{
    format: string
}
interface BoardProps<T> extends HTMLAttributes<HTMLDivElement>{
    value: number;
    frontSide?: (val:number)=>ReactNode;
    backSide?:  (val:number)=>ReactNode;
}
const  Board = <T extends {}>({className,value=0,frontSide,backSide}:BoardProps<T>)=>{
    if(value === undefined) return (<div></div>)
    return (
        <div className={clsx(
            "shadow-lg rounded-md",
            "border border-opacity-40",
            className
        )}>
            {frontSide(value)}
            {backSide(value)}
        </div>
    )
}
// function FlipBoard<T>({content}:BoardProps<T>){
//     return (
//         <div></div>
//     )
// }
interface SideProps extends HTMLAttributes<HTMLDivElement>{
    value:number;
}
function Side({value,className}:SideProps){
    return(
        <span 
            className={clsx(
                "m-auto px-2",
                className
            )}
        >
            {value}
        </span>
    )
};
function Timer({format}:TimerProps){
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div 
                className={clsx(
                    "flex flex-col items-center py-4 px-3",
                    "text-5xl font-bold text-gray-800",
                )}
            >
                <Board 
                    className="relative bg-gray-100" 
                    value={20} 
                    frontSide={(value)=>
                        <Side className="absolute" value={value}/>
                    } 
                    backSide={(value)=>
                        <Side className="absolute transform translate-y-2 rotate-x-flip left-2 top-0 mx-auto" value={value-1}/>
                    }
                />
            </div>
        </div>
    )
}
export default Timer;
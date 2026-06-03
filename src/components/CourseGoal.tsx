import React, { ReactNode } from "react"

interface CourseGoalProps {
    id: number;
    title : string;
    children : ReactNode;
    onDelete: (id:number) => void;
}
export const CourseGoal : React.FC<CourseGoalProps> = ({id, title , children, onDelete}) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
} 
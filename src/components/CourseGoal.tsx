import React, { ReactNode } from "react"

interface CourseGoalProps {
    title : string;
    children : ReactNode
}
export const CourseGoal : React.FC<CourseGoalProps> = ({title , children}) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>Delete</button>
        </article>
    )
} 
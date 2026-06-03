import React from "react";
import { CourseGoal } from "./CourseGoal";
import {CourseGoal  as CGoal} from "./../App"

type CourseGoalListProps = {
    goals : Array<CGoal>;
    onDeleteCourseGoal : (id:number) => void;
}

export const CourseGoalList : React.FC<CourseGoalListProps> = ({goals,onDeleteCourseGoal}) => {
    return (

        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id = {goal.id} title = {goal.title} onDelete = {onDeleteCourseGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
        
        
            
    )
}
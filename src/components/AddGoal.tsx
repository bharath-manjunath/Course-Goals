import React, { FormEvent, useRef } from "react";

type AddGoalProps = {
    onAddGoal : (goal : string, summary: string) => void;
}

export const AddGoal : React.FC<AddGoalProps> = ({onAddGoal}) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    
    function handleAddGoal (event : FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal,enteredSummary);
    }
    return (
        <form onSubmit={handleAddGoal}>
            <p>
                <label htmlFor="goal">YOUR GOAL</label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="description">SUMMARY</label>
                <input id="description" type="text" ref={summary} />
            </p>
            <p>
                <button>ADD GOAL</button>
            </p>
        </form>
    )
}
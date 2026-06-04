import { CourseGoal } from "./components/CourseGoal";
import  goalsImg from "./assets/goals.jpg"
import { Header } from "./components/Header";
import { useState } from "react";
import { CourseGoalList } from "./components/CourseGoalList";
import { AddGoal } from "./components/AddGoal";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<Array<CourseGoal>>([])

  function handleCourseGoal (goal:string, summary:string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id : Math.random(),
        title : goal,
        description : summary
      }
      return [...prevGoals, newGoal]
    }
    )
  }

  const onDeleteCourseGoal = (id:number) => {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }


  return (
    <main>

      <Header image = {{src : goalsImg, alt : "Goals image"}}>
        <h1>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleCourseGoal}>Add Goal</button> */}
      <AddGoal onAddGoal={handleCourseGoal}/>
      <CourseGoalList goals = {goals} onDeleteCourseGoal = {onDeleteCourseGoal}/>


      {/* {goals.map((goal) => (
        <ul>
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        </ul>
      )
      )} */}
      
      {/* <CourseGoal 
        title = "Learn React+TS"
      >

        <p>Learn from ground up</p>

      </CourseGoal> */}
    </main>
  )
}

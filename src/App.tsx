import { CourseGoal } from "./components/CourseGoal";
import  goals from "./assets/goals.jpg"
import { Header } from "./components/Header";

export default function App() {
  return (
    <main>

      <Header image = {{src : goals, alt : "Goals image"}}>
        <h1>Your Course Goals</h1>
      </Header>
      
      <CourseGoal 
        title = "Learn React+TS"
      >

        <p>Learn from ground up</p>

      </CourseGoal>
    </main>
  )
}

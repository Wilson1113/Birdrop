import Header from "../Components/Header/Header"
import SmallCalendar from "../Components/SmallCalendar/SmallCalendar"
import ProjectList from "../Components/ProjectList/ProjectList"
import Todo from "../Components/Todo/Todo"

export default function DailyTracker() {
  return (
    <>
      <Header></Header>
      <div className="main-content">
            <div className="sidebar">
                <SmallCalendar></SmallCalendar>
                <ProjectList></ProjectList>
            </div>
            <Todo></Todo>
        </div>
    </>
  )
}
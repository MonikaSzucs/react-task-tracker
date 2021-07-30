import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  // const name = 'Brad'
  // const x = true
  const [tasks, setTasks] = useState(
      [
          {
              id: 1,
              text: 'Doctors Appointment',
              day: 'Feb 5th at 2:30pm',
              reminder: true,
          },
          {
              id: 2,
              text: 'Meeting at School',
              day: 'Feb 6th at 1:30pm',
              reminder: true
          },
          {
              id: 3,
              text: 'Food Shopping',
              day: 'February 5th at 2:30pm',
              reminder: false,
          }
      ]
  )
  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks}/>
      {/* <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x ? "Yes" : "No"}</h2> */}
    </div>
  );
}

export default App;

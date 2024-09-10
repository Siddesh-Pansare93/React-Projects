import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className='bg-gray-600 text-center'>
      <h1 className='bg-green-400'>Lets learn Redux Toolkit </h1>
      <AddTodo/>
      <Todos/>
      </div>
    </>
  )
}

export default App

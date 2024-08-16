import UserContextProvider from "./context/UserContextProvider"
import Login from "./context/Components/Login"
import Profile from "./context/Components/Profile"
function App() {
  
  return (
    <UserContextProvider>
       <Login/>  
       <Profile/>  
    </UserContextProvider>
  )
}

export default App

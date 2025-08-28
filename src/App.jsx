import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Pages/Layout'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'



 let routes= createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"meal/:id",element:<Details/>}
  ]}
 ])

 const queryClient = new QueryClient()


function App() {
  const [count, setCount] = useState(0)



 

  return (
    <>

    

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}></RouterProvider>
      <ReactQueryDevtools/>
      
    </QueryClientProvider>
      
    </>
  )
}

export default App

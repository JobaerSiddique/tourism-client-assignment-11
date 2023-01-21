
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routes/router';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthProvider/AuthProvider';
import Loading from './Shared/Loading';

function App() {
  const {loading} = useContext(AuthContext)
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className='max-w-7xl mx-auto' >
   <RouterProvider router={router}></RouterProvider>
   <Toaster />
    </div>
  );
}

export default App;

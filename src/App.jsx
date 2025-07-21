import { RouterProvider } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Button, buttonVariants } from './components/ui/button'
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import LandingPage from './pages/LandingPage';
import GraphPage from './pages/GraphPage';
import Convert from './pages/Convert';  
import Dashboard from './pages/Dashboard';
import Uploads from './components/Uploads';
import { ThemeProvider } from './components/Theme-provider';
import AboutUs from './pages/AboutUs';

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children:[
        {
          path: '/',
          element: <LandingPage/>
        },
        {
          path: '/excel-to-graph',
          element: <GraphPage/>
        },
        {
          path: '/excel-to-csv',
          element: <Convert/>
        },
        {
          path: '/dashboard/:id',
          element: <Dashboard/>
        },
        {
          path: '/uploads',
          element: <Uploads/>
        },
        {
          path: '/about',
          element: <AboutUs/>
        }
      ]
    }
  ])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} >
    <header>
      <div>
        <Button 
        className={`${buttonVariants({ variant: 'default' })}`}
        />
      </div>

      
    </header>
    </RouterProvider>
    </ThemeProvider>
  );
}
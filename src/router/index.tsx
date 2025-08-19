import { createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router";
import HomePage from "../Pages";
import ContactPage from "../Pages/Contact";
import AboutPage from "../Pages/About";
import QuickStartPage from "../Pages/Learn";
import LearnLayout from "../Pages/Learn/Layout";
import ThinkingInReactPage from "../Pages/Learn/ThinkingInReact";
import InstallationPage from "../Pages/Learn/Installation";
import ContributePage from "../Pages/Contribute";
import LoginPage from "../Pages/Login";
import RootLayout from "../Pages/Layout";
import ProtectedRoute from "../commponents/auth/ProtectedRoute";
import ErrorHandler from "../commponents/errors/ErrorHandler";
import PageNotFound from "../Pages/PageNotFound";

const isLoggedIn = false;

const userData : {email: string} | null = isLoggedIn ? {email: "email@gmail.com"} : null

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
=    <Route path="/" element={<div> <RootLayout /> </div>} errorElement={<ErrorHandler/>}>
         <Route index element={<HomePage />}/>
        <Route path="contact" element={<ContactPage />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="contribute" element={<ProtectedRoute isAllowed= {isLoggedIn} redirectPath="/login" data={userData}> <ContributePage/> </ProtectedRoute>}/>
        <Route path="login" element={ <ProtectedRoute isAllowed= {!isLoggedIn} redirectPath="/contribute"> <LoginPage/> </ProtectedRoute>}/>
     </Route>

     {/* Learn Layout */}
     <Route path="/learn" element={<LearnLayout/>}>
        <Route index element={<QuickStartPage/>}/>
        <Route path="thinking-in-react" element={<ThinkingInReactPage/>}/>
        <Route path="installation" element={<InstallationPage/>}/>

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound/>}/>
     </Route>
    </>
  )
);

export default router;

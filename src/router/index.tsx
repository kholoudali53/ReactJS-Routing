import { createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import HomePage from "../Pages";
import ContactPage from "../Pages/Contact";
import AboutPage from "../Pages/About";
import LayoutPage from "../Pages/Layout";
import QuickStartPage from "../Pages/Learn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
=    <Route path="/" element={<div> <LayoutPage /> </div>}>
         <Route index element={<HomePage />}/>
        <Route path="contact" element={<ContactPage />}/>
        <Route path="about" element={<AboutPage />}/>
     </Route>

     <Route path="/learn" element={<LayoutPage/>}>
        <Route index element={<QuickStartPage/>}/>
     </Route>
    </>
  )
);

export default router;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./pages/Shared/PrivateRoute";
import Footer from "./pages/Conponent/Footer";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
import useContextAPI from "./Hooks/useContextAPI";
import Loading from "./pages/Shared/Loading";
import MyExperiences from "./pages/Dashboard/User/MyExperiences";
import AddExperience from "./pages/Dashboard/User/AddExperience";
import AllExperiences from "./pages/Dashboard/Admin/AllExperiences";
import PendingExperiences from "./pages/Dashboard/Admin/PendingExperiences";
import MakeAdmin from "./pages/Dashboard/Admin/MakeAdmin";
function App() {
  const { user, userLoading } = useContextAPI();

  if (userLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/verify-email" element={<EmailVerify />}></Route>
        <Route
          path="/blogs/:id"
          element={
            <PrivateRoute>
              <BlogDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="my-experiences" element={<MyExperiences />}></Route>
          <Route path="add-experience" element={<AddExperience />}></Route>
          <Route path="experiences" element={<AllExperiences />}></Route>
          <Route
            path="pending-experiences"
            element={<PendingExperiences />}
          ></Route>
          <Route path="make-admin" element={<MakeAdmin />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PrivateRoute, PublicRoute } from "./components/AuthRequired";
import Register from "./feauture/register/Register";
import Auth from "./feauture/auth/Auth";
import ResetPassword from "./feauture/resetPassword/ResetPassword";
const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="/*">
          {/* public routes*/}
          <Route element={<PublicRoute />}>
            <Route path="auth" element={<Auth />} />
            <Route path="register" element={<Register />} />
            <Route path="resetPass/*" element={<ResetPassword />} />
          </Route>
          {/* private routes */}
          <Route element={<PrivateRoute />}>
            <Route index element={<div>main page</div>} />
            <Route path="profile" element={<div>profile</div>} />
            <Route path="notafication" element={<div>notafication</div>} />
          </Route>

          {/* hendle error */}
          <Route path="*" element={<div>page not found</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

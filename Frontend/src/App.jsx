import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./components/AuthRequired/AuthRequired";
import SignIn from "./pages/SignIn";
import Layout from "./components/Layout/Layout";
import HomeStudent from "./pages/HomeStudent";
import ProfileStudent from "./pages/ProfileStudent";
import NotFound from "./pages/NotFound";
import HomeAdmin from "./pages/HomeAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRequired />}>
          <Route path="/" element={<SignIn />} />
          <Route element={<Layout />}>
            <Route path="student">
              <Route index element={<HomeAdmin />} />
              <Route path="profile" element={<ProfileStudent />} />
            </Route>
            <Route path="admin">
              <Route index element={<HomeAdmin />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

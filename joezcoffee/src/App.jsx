import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About"
export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/about-us" element={<About />}></Route>
        </Routes>
      </Layout>
    </>
  );
};

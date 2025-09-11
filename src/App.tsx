import { Layout } from './components/Layout'
import { MainPage } from './components/MainPage'
import { Footer } from "./components/elements/Footer";
import { Navbar } from "./components/elements/Navbar";

function App() {
  return (
    <Layout title="BIM-Loc">
      <Navbar />
      <MainPage />
      <Footer />
    </Layout>
  )
}

export default App

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
export default function App() {
    return (
        <>
            <Header></Header>
            <main className = "main-content">
            <Sidebar />
                <Dashboard className="dashboard" />
            </main>
            <Footer />
        </>
    )
}
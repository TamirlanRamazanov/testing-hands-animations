import { useState } from "react"
import MainPage from "./components/main-page"
import TestHandPage from "./components/test-hand-page"
import "./app/globals.css"

export default function App() {
    const [currentPage, setCurrentPage] = useState<"main" | "test-hand">("main")

    const goToTestHand = () => setCurrentPage("test-hand")
    const goToMain = () => setCurrentPage("main")

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            {currentPage === "main" ? (
                <MainPage goToTestHand={goToTestHand} />
            ) : (
                <TestHandPage goToMain={goToMain} />
            )}
        </main>
    )
} 
"use client"

import { useState } from "react"
import MainPage from "@/components/main-page.js"
import TestHandPage from "@/components/test-hand-page"

export default function Home() {
    // State-based navigation using useState
    const [currentPage, setCurrentPage] = useState<"main" | "test-hand">("main")

    // Navigation functions
    const goToTestHand = () => setCurrentPage("test-hand")
    const goToMain = () => setCurrentPage("main")

    return (
        <main className="min-h-screen bg-gray-900 text-white">
        {currentPage === "main" ? <MainPage goToTestHand={goToTestHand} /> : <TestHandPage goToMain={goToMain} />}
    </main>
)
}


import type { FC } from "react"

interface MainPageProps {
    goToTestHand: () => void
}

const MainPage: FC<MainPageProps> = ({ goToTestHand }) => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
            {/* Navigation button in top-right corner */}
            <button
                onClick={goToTestHand}
                className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
                Go to Test Hand
            </button>

            {/* Centered content */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Card Game</h1>
                <p className="text-xl text-gray-300">Test your card hand on the Test Hand page.</p>
            </div>
        </div>
    )
}

export default MainPage


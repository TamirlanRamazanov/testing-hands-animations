import type React from "react"

const DeckComponent: React.FC = () => {
    return (
        <div className="relative w-32 h-44">
            {/* Main card back */}
            <div className="absolute inset-0 bg-red-600 rounded-lg border-2 border-white flex items-center justify-center">
                {/* Swirl pattern (simplified) */}
                <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
            </div>

            {/* Shadow cards to create stack effect */}
            <div className="absolute -bottom-1 -right-1 w-32 h-44 bg-red-700 rounded-lg z-[-1]"></div>
            <div className="absolute -bottom-2 -right-2 w-32 h-44 bg-red-800 rounded-lg z-[-2]"></div>
        </div>
    )
}

export default DeckComponent


"use client"

import type { FC } from "react"
import { useState } from "react"
import DeckComponent from "./deck-component"
import CardHandComponent from "./card-hand-component"

interface TestHandPageProps {
    goToMain: () => void
}

// Simple card type for our state management
interface Card {
    id: number
    value: string
}

const TestHandPage: FC<TestHandPageProps> = ({ goToMain }) => {
    // Начинаем с пустой руки
    const [cards, setCards] = useState<Card[]>([])
    const [nextCardId, setNextCardId] = useState(1)

    // Add a card to the hand
    const addCard = () => {
        const newCard = {
            id: nextCardId,
            value: `Card ${nextCardId}`,
        }
        setCards([...cards, newCard])
        setNextCardId(nextCardId + 1)
    }

    // Remove the last card from the hand
    const removeCard = () => {
        if (cards.length > 0) {
            setCards(cards.slice(0, -1))
        }
    }

    return (
        <div className="min-h-screen relative flex flex-col">
            {/* Main content area with deck and hand */}
            <div className="flex-1 flex items-center justify-center">
                {/* Deck on the left side */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                    <DeckComponent />
                </div>

                {/* Card hand in the center - добавлен mt-20 для отступа сверху */}
                <div className="w-full max-w-4xl h-[80vh] flex items-center justify-center mt-16">
                    <CardHandComponent cards={cards} />
                </div>
            </div>

            {/* Buttons at the bottom */}
            <div className="p-6 flex justify-center space-x-4">
                <button
                    onClick={addCard}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                    Add Card
                </button>
                <button
                    onClick={removeCard}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                    disabled={cards.length === 0}
                >
                    Remove Card
                </button>
                <button
                    onClick={goToMain}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                    Back to Main
                </button>
            </div>
        </div>
    )
}

export default TestHandPage


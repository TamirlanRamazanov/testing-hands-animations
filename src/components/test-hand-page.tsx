"use client"

import type { FC } from "react"
import { useState, useEffect } from "react"
import DeckComponent from "./deck-component"
import CardHandComponent from "./card-hand-component"
import { CardData, CARDS_DATA } from "@/constants/cards"

interface TestHandPageProps {
    goToMain: () => void
}

const TestHandPage: FC<TestHandPageProps> = ({ goToMain }) => {
    const [cards, setCards] = useState<CardData[]>([]) // карты в руке
    const [deck, setDeck] = useState<CardData[]>([]) // карты в колоде

    // Инициализация перемешанной колоды при первой загрузке
    useEffect(() => {
        const shuffledDeck = [...CARDS_DATA].sort(() => Math.random() - 0.5);
        setDeck(shuffledDeck);
    }, []);

    // Add a card to the hand
    const addCard = () => {
        if (deck.length === 0) return; // если колода пуста

        const [nextCard, ...remainingDeck] = deck;
        setCards([...cards, nextCard]);
        setDeck(remainingDeck);
    }

    // Remove the last card from the hand
    const removeCard = () => {
        if (cards.length > 0) {
            const removedCard = cards[cards.length - 1];
            setCards(cards.slice(0, -1));
            setDeck([...deck, removedCard]); // возвращаем карту в колоду
        }
    }

    return (
        <div className="min-h-screen relative flex flex-col">
            {/* Main content area with deck and hand */}
            <div className="flex-1 flex items-center justify-center">
                {/* Deck on the left side */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                    <DeckComponent remainingCards={deck.length} />
                </div>

                {/* Card hand in the center */}
                <div className="w-full max-w-7xlh-[80vh] flex items-center justify-center" 
                    style={{ 
                        // marginTop: '100px',  // или любое другое значение в пикселях
                        // или можно использовать transform
                        transform: 'translateY(140px) translateX(80px)'
                        
                        
                    }}>
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


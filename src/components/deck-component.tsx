import type React from "react"
import { CARD_DIMENSIONS } from '../constants/cards'

interface DeckComponentProps {
    remainingCards: number;
}

const DeckComponent: React.FC<DeckComponentProps> = ({ remainingCards }) => {
    return (
        <div className="relative">
            {/* Счетчик карт */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                           bg-gray-800 text-white px-3 py-1 rounded-full 
                           font-bold text-lg z-10">
                {remainingCards}
            </div>
            
            <div style={{
                width: CARD_DIMENSIONS.width * CARD_DIMENSIONS.scale,
                height: CARD_DIMENSIONS.height * CARD_DIMENSIONS.scale
            }}>
                <img 
                    src="/assets/cards/back.png" 
                    alt="Card Back"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    style={{
                        transform: 'scale(1)'
                    }}
                />
                {/* Shadow cards to create stack effect */}
                <div 
                    className="absolute -bottom-1 -right-1 rounded-lg z-[-1]" 
                    style={{
                        width: CARD_DIMENSIONS.width * CARD_DIMENSIONS.scale,
                        height: CARD_DIMENSIONS.height * CARD_DIMENSIONS.scale,
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                    }}
                ></div>
                <div 
                    className="absolute -bottom-2 -right-2 rounded-lg z-[-2]"
                    style={{
                        width: CARD_DIMENSIONS.width * CARD_DIMENSIONS.scale,
                        height: CARD_DIMENSIONS.height * CARD_DIMENSIONS.scale,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)'
                    }}
                ></div>
            </div>
        </div>
    )
}

export default DeckComponent


import type React from "react"
import type { CSSProperties } from "react"
import { CARD_DIMENSIONS, CardData } from '../constants/cards'

interface CardProps {
    value: Pick<CardData, 'name' | 'power' | 'image'>;
    style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({ value, style }) => {
    const imagePath = `/assets/cards/${value.image}`;
    
    return (
        <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
                ...style,
                width: CARD_DIMENSIONS.width * CARD_DIMENSIONS.scale,
                height: CARD_DIMENSIONS.height * CARD_DIMENSIONS.scale,
            }}
        >
            <img 
                src={imagePath}
                alt={value.name}
                className="w-full h-full rounded-lg shadow-lg"
            />
        </div>
    )
}

export default Card


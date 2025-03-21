import type React from "react"
import type { CSSProperties } from "react"
import { CARD_DIMENSIONS, CardData } from '@/constants/cards'
import { useState } from 'react'

// Определяем цвет свечения
const LIGHT_COLOR = '#fbfd4d';

interface CardProps {
    value: Pick<CardData, 'name' | 'power' | 'image'>;
    style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({ value, style }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imagePath = `/assets/cards/${value.image}`;
    
    const baseScale = CARD_DIMENSIONS.scale;
    const hoverScale = 1.0;
    
    return (
        <div
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                !isHovered ? 'transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)]' : ''
            }`}
            style={{
                ...style,
                width: CARD_DIMENSIONS.width * baseScale,
                height: CARD_DIMENSIONS.height * baseScale,
                zIndex: isHovered ? 1000 : style?.zIndex,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={imagePath}
                alt={value.name}
                className="w-full h-full rounded-lg pointer-events-none card_shadow"
                style={{
                    transform: isHovered ? `scale(${hoverScale / baseScale}) translateY(-50px)` : 'scale(1)',
                    boxShadow: isHovered 
                        ? '0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 2px rgba(255, 255, 255, 0.75)'
                        : '0 2px 4px rgba(0, 0, 0, 0.2)',
                    transition: 'all 600ms cubic-bezier(0.19, 1, 0.22, 1)',
                    filter: isHovered 
                        ? `drop-shadow(0 0 20px ${LIGHT_COLOR})` 
                        // : `drop-shadow(0 0 5px ${LIGHT_COLOR})`
                        : 'none',
                }}
            />
        </div>
    )
}

export default Card


"use client"

import { useEffect, useState, useMemo } from "react"
import Card from "./card"
import { CardData } from "../constants/cards"

interface CardHandComponentProps {
    cards: CardData[];
}

const CardHandComponent: React.FC<CardHandComponentProps> = ({ cards }) => {
    const [dimensions, setDimensions] = useState({
        height: typeof window !== "undefined" ? window.innerHeight : 800,
        width: typeof window !== "undefined" ? window.innerWidth : 1200,
    })

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const cardPositions = useMemo(() => {
        const handCount = cards.length
        if (handCount === 0) return []

        const radius = dimensions.height * 0.7
        const maxVisibleCards = 10
        const totalAngleRad = Math.PI / 3 // 90 градусов

        // Для первых карт используем меньший угол, который постепенно увеличивается
        const currentTotalAngle = handCount <= maxVisibleCards 
            ? (totalAngleRad * handCount) / maxVisibleCards 
            : totalAngleRad

        const deltaAngleRad = currentTotalAngle / (Math.min(handCount, maxVisibleCards) - 1 || 1)
        const startAngleRad = Math.PI / 2 - currentTotalAngle / 2

        return cards.map((card, index) => {
            const adjustedIndex = handCount <= maxVisibleCards 
                ? index 
                : (index / (handCount - 1)) * (maxVisibleCards - 1)

            const angleRad = startAngleRad + deltaAngleRad * adjustedIndex
            const x = -Math.cos(angleRad) * radius
            const y = -Math.sin(angleRad) * radius + radius * 0.5
            
            // Добавляем дополнительный поворот для первой карты
            const rotateDeg = index === 0 
                ? ((angleRad - Math.PI / 2) * (180 / Math.PI)) + 3  // +15 градусов для первой карты
                : (angleRad - Math.PI / 2) * (180 / Math.PI)

            return {
                card,
                style: {
                    transform: `translate(${x}px, ${y}px) rotate(${rotateDeg}deg)`,
                    zIndex: index,
                },
            }
        })
    }, [cards, dimensions])

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute left-1/2 top-1/2 w-0 h-0">
                {cardPositions.map(({ card, style }) => (
                    <Card 
                        key={card.id} 
                        value={{
                            name: card.name,
                            power: card.power,
                            image: card.image
                        }} 
                        style={style} 
                    />
                ))}
            </div>
        </div>
    )
}

export default CardHandComponent


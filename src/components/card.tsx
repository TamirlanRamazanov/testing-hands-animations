import type React from "react"
import type { CSSProperties } from "react"

interface CardProps {
    value: string
    style?: CSSProperties
}

const Card: React.FC<CardProps> = ({ value, style }) => {
    return (
        <div
            className="absolute w-28 h-40 bg-white text-black rounded-lg border-2 border-gray-300 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
            style={style}
        >
            {/* Card content */}
            <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">{value.split(" ")[1]}</div>
                <div className="text-5xl mt-2">♠</div>
            </div>

            {/* Card corners */}
            <div className="absolute top-1 left-1 text-sm font-bold">{value.split(" ")[1]}</div>
            <div className="absolute bottom-1 right-1 text-sm font-bold rotate-180">{value.split(" ")[1]}</div>
        </div>
    )
}

export default Card


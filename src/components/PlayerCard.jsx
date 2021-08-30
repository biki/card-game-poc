import React, { useContext } from 'react'
import { GameContext } from '../Game'

/**
 * Single line within the player card. Will never line-break and hides overflow with an ellipsis.
 *
 * @param {JSX} children the string to render
 */
const Line = ({ children }) => {
    return (
        <span className="block overflow-hidden whitespace-nowrap overflow-ellipsis">
            {children}
        </span>
    )
}

/**
 * Single player card the user can select via clicking.
 *
 * @param {object} player the player data object
 * @param {boolean} isSelected whether this player card is selected
 */
export const PlayerCard = ({ player, isSelected }) => {
    const { setSelectedPlayer } = useContext(GameContext)

    return (
        <div
            onClick={() => setSelectedPlayer(player)}
            className={`p-6 select-none rounded border-2 bg-gray-900 shadow-lg cursor-pointer hover:shadow-xl hover:translate-y-[-2px] transition-all ${
                isSelected ? 'border-pink-500' : ''
            }`}>
            <Line>{player.name}</Line>
            <Line>{player.username}</Line>
            <Line>{player.asset}</Line>
        </div>
    )
}

import React, { useContext } from 'react'
import { GameContext } from '../Game'
import { PlayerCard } from './PlayerCard'
import { SortButton } from './SortButton'
import Loading from './svg/Loading'

/**
 * Overview renders all available player cards in a 3-column grid.
 * While loading the player data, a loading indicator is shown.
 */
export const Overview = () => {
    const { players, selectedPlayer } = useContext(GameContext)

    return (
        <section className="mt-auto">
            <div className="flex flex-wrap items-center justify-between">
                <h2>Available Players</h2>
                <SortButton />
            </div>
            <div className="grid grid-cols-3 gap-6">
                {players === null && (
                    <Loading className="col-span-3 animate-spin justify-self-center" />
                )}
                {players?.map((player, index) => {
                    return (
                        <PlayerCard
                            key={index}
                            player={player}
                            isSelected={selectedPlayer?.id === player.id}
                        />
                    )
                })}
            </div>
        </section>
    )
}

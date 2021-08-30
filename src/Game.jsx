import React, { createContext, useEffect, useState } from 'react'

import playersJsonData from './assets/data/players.json?url' // ?url is Vite specific

import { DetailView } from './components/DetailView'
import { Overview } from './components/Overview'
import { sortMultipartName } from './utils/sort'
import { SORT_DIRECTIONS } from './utils/constants'

/**
 * Context holding the game's state, for easier access in nested components.
 * This small example could have done with passing state in props.
 */
export const GameContext = createContext()

/**
 * Game is the entry point and wrapper for our little project.
 * Renders all sub-components and handles the game state.
 */
const Game = () => {
    const [players, setPlayers] = useState(null)
    const [selectedPlayer, setSelectedPlayer] = useState(null)
    const [sortDirection, setSortDirection] = useState(SORT_DIRECTIONS.NONE)

    /**
     * Upon initial render, loads the player data asynchronously.
     */
    useEffect(() => {
        async function loadPlayerData() {
            const response = await fetch(playersJsonData, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
            const data = await response.json()
            setPlayers(data)
        }

        loadPlayerData()
    }, [])

    /**
     * Upon change of sortDirection state, performs the actual sorting of player data.
     */
    useEffect(() => {
        if (sortDirection !== SORT_DIRECTIONS.NONE && players !== null) {
            const sortedPlayers = sortMultipartName([...players], sortDirection)
            setPlayers(sortedPlayers)
        }
    }, [sortDirection])

    return (
        <GameContext.Provider
            value={{
                players,
                selectedPlayer,
                setSelectedPlayer,
                sortDirection,
                setSortDirection,
            }}>
            <h1>AOE Card Game</h1>
            <DetailView />
            <Overview />
        </GameContext.Provider>
    )
}

export default Game

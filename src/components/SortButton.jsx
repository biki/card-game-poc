import React, { useContext } from 'react'
import { GameContext } from '../Game'
import { SORT_DIRECTIONS } from '../utils/constants'
import SortAZ from './svg/SortAZ'
import SortZA from './svg/SortZA'

/**
 * SortButton renders either an A-to-Z or a Z-to-A svg icon to indicate the
 * currently active sortDirection. Clicking it will change direction.
 */
export const SortButton = () => {
    const { sortDirection, setSortDirection } = useContext(GameContext)

    const handleSort = () => {
        setSortDirection(
            sortDirection === SORT_DIRECTIONS.ASC
                ? SORT_DIRECTIONS.DESC
                : SORT_DIRECTIONS.ASC
        )
    }

    return sortDirection === SORT_DIRECTIONS.NONE ||
        sortDirection === SORT_DIRECTIONS.DESC ? (
        <SortAZ
            onClick={handleSort}
            title="Click to sort ascending"
            className="transition-all cursor-pointer hover:text-pink-500"
        />
    ) : (
        <SortZA
            onClick={handleSort}
            className="transition-all cursor-pointer hover:text-pink-500"
        />
    )
}

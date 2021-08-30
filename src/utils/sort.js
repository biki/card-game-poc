import { SORT_DIRECTIONS } from './constants'

/**
 * Handles sorting the player array with their name structure of:
 * Firstname, optional middlename, surname
 *
 * @param {Array} playerArray the player array to sort
 * @param {string} sortDirection the sort direction
 * @returns {Array} the newly sorted player array
 */
const sortMultipartName = (playerArray, sortDirection) => {
    return playerArray.slice().sort((a, b) => {
        let firstObject, secondObject
        if (sortDirection === SORT_DIRECTIONS.ASC) {
            firstObject = a
            secondObject = b
        } else {
            firstObject = b
            secondObject = a
        }
        const [aNames, aSurname] = firstObject.name
            .match(/(.*)\s(\w+)$/)
            .slice(1)
        const [bNames, bSurname] = secondObject.name
            .match(/(.*)\s(\w+)$/)
            .slice(1)

        if (aSurname.localeCompare(bSurname)) {
            return aSurname.localeCompare(bSurname)
        } else {
            return aNames.localeCompare(bNames)
        }
    })
}

export { sortMultipartName }

import axios from 'axios'
import React, { useContext, useState } from 'react'
import { GameContext } from '../Game'

/**
 * Stylized label
 *
 * @param {JSX} children
 */
const Label = ({ children }) => {
    return <span className="text-xs text-gray-500 uppercase">{children}</span>
}

/**
 * DetailView is responsible for displaying the selected player data and presenting
 * a submit button to send the selected player's data to an API in JSON format.
 */
export const DetailView = () => {
    const { selectedPlayer } = useContext(GameContext)

    /**
     * State to disable submit button if POST request is taking longer than expected
     */
    const [submitting, setSubmitting] = useState(false)

    /**
     * Submits the currently selected player to a mock API (httpbin) and logs the response
     */
    const handleSubmit = async () => {
        if (submitting) {
            return
        }
        setSubmitting(true)
        const res = await axios.post(
            'https://httpbin.org/post',
            selectedPlayer,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        console.log(res.data.json)
        setSubmitting(false)
    }

    return (
        <div className="p-4 border-black rounded shadow-md bg-white/10">
            {selectedPlayer && (
                <div className="flex flex-wrap flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:items-center sm:justify-between">
                    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                        <img
                            src={`https://avatars.dicebear.com/4.7/api/bottts/player-${selectedPlayer.id}.svg`}
                            className="w-20 h-20"
                        />
                        <div>
                            <h4 className="text-2xl text-pink-500">
                                {selectedPlayer.name}
                            </h4>
                            <span className="block space-x-2">
                                <Label>Username</Label>
                                <span>{selectedPlayer.username}</span>
                            </span>
                            <span className="block space-x-2">
                                <Label>Asset</Label>
                                <span>{selectedPlayer.asset}</span>
                            </span>
                        </div>
                    </div>
                    <button disabled={submitting} onClick={handleSubmit}>
                        Play!
                    </button>
                </div>
            )}
            {!selectedPlayer && (
                <strong className="block text-center animate-pulse">
                    Please select an available player card
                </strong>
            )}
        </div>
    )
}

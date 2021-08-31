import React from 'react'
import { render, screen } from '@testing-library/react'
import Game from './Game'

jest.mock(
    './assets/data/players.json?url',
    () => [
        {
            id: 1,
            name: 'Brianna Forbes',
            username: 'Dreamlurk The Unstoppable',
            asset: 'Foghammer Lead',
        },
        {
            id: 2,
            name: 'Darcy Candice Ball',
            username: 'Crystaldash',
            asset: 'Secret Glowquake Gold',
        },
    ],
    { virtual: true }
)

test('renders all components', () => {
    render(<Game />)

    expect(screen.getByText(/AOE Card Game/i)).toBeInTheDocument()
    expect(screen.getByText(/Available Players/i)).toBeInTheDocument()
    expect(
        screen.getByText(/Please select an available player card/i)
    ).toBeInTheDocument()
})

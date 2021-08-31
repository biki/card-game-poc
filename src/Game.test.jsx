import React from 'react'
import { render, screen } from '@testing-library/react'
import Game from './Game'

test('renders all components', () => {
    render(<Game />)

    expect(screen.getByText(/AOE Card Game/i)).toBeInTheDocument()
    expect(screen.getByText(/Available Players/i)).toBeInTheDocument()
    expect(
        screen.getByText(/Please select an available player card/i)
    ).toBeInTheDocument()
})

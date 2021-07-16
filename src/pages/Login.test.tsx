import { render, screen } from '@testing-library/react'
import { PlayerProvider } from '../contexts/PlayerContext';


import LoginPage from './Login';

const renderPage = () => {
    return render(<PlayerProvider><LoginPage /></PlayerProvider>)
}

describe('Login page', () => {
    it('Play button is in the page and it should be only one', () => {
        renderPage();
        screen.getByText('Play')
    })

    it('Player one input is in the page', () => {
        renderPage();
        screen.getByPlaceholderText('Enter the player one name');
    })
    it('Player Two input is in the page', () => {
        renderPage();
        screen.getByPlaceholderText('Enter the player two name');
    })
    it('There is only Two inputs in the page', async () => {
        renderPage();
        const inputs = await screen.findAllByRole('input')
        expect(inputs).toHaveLength(2)
    })
})
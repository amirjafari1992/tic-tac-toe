import { render } from "@testing-library/react";

import { Player } from ".";

describe('Player', () => {
    it('Renders without crashing', () => {
        render(<Player active>test</Player>)
    }) 
    it('Props work', () => {
        const player = <Player active={false}>test</Player>
        expect(player.props.active).toBe(false)
        expect(player.props.children).toBe('test')
    })
})
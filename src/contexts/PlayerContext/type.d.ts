type PlayerItem = {
    playerOne: string;
    playerTwo: string;
}
type ScoreBoardItem = {
    name: string;
    object: string;
    date: Date;
}
type Action = {
    payload: PlayerItem | ScoreBoardItem,
    type: 'ADD_NAMES' | 'ADD_WINNER';
}
type Dispatch = (action: Action) => void;
type State = typeof defaultState;
type PlayerContextType = { state: State; dispatch: Dispatch; }
type PlayerContext = PlayerContextType | undefined;

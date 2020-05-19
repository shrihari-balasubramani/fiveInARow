export const getState = (gameMatrix, lastPlayedCell, currentPlayer) => ({
	gameMatrix,
	lastPlayedCell,
	currentPlayer
});

const recordTurn = (state, action) => {
	const newGameMatrix = [...state.gameMatrix]; // it's ok to not deep copy.
	const currentPlayer = action.playedBy === 1 ? 2 : 1;
	newGameMatrix[action.row][action.column] = action.playedBy;
	return getState(newGameMatrix, [action.row, action.column], currentPlayer);
};

const resetFunction = (state, action) => {
	const initGameMatrix = Array.from({ length: 15 }, () =>
		Array.from({ length: 15 }, () => null)
	);
	const lastPlayedCell = [null, null];
	return getState(initGameMatrix, lastPlayedCell, 1);
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'turn_played':
			return recordTurn(state, action);
		case 'reset':
			return resetFunction();
		default:
			throw new Error();
	}
};

export default reducer;

function checkWinner(matrix, lastPlayedCell) {
	//return the player number if he is a winner. Else return 0

	if (lastPlayedCell[0] === null) {
		return 0;
	}

	const row = lastPlayedCell[0];
	const column = lastPlayedCell[1];
	const checkForValue = matrix[row][column];

	const checkCellUndefined = (currentRow, currentColumn) => {
		if (
			typeof currentRow === 'undefined' ||
			typeof currentColumn === 'undefined'
		) {
			return true;
		}
		return false;
	};

	function checkCellAndCallBack(calledRow, calledColumn, callBack) {
		if (checkCellUndefined(calledRow, calledColumn)) {
			return 0;
		} else if (calledRow < 0 || calledColumn < 0) {
			return 0;
		} else if (matrix[calledRow][calledColumn] === checkForValue) {
			return callBack(calledRow, calledColumn) + 1;
		} else {
			return 0;
		}
	}

	function checkNeighboursAndAssert() {
		this.checkNorthNeighbour = function (calledFromRow, calledFromColumn) {
			const currentRow = calledFromRow - 1;
			const currentColumn = calledFromColumn;

			const value = checkCellAndCallBack(
				currentRow,
				currentColumn,
				this.checkNorthNeighbour.bind(this)
			);
			return value;
		};
		this.checkEastNeighbour = function (calledFromRow, calledFromColumn) {
			const currentRow = calledFromRow;
			const currentColumn = calledFromColumn + 1;

			const value = checkCellAndCallBack(
				currentRow,
				currentColumn,
				this.checkEastNeighbour.bind(this)
			);
			return value;
		};
		this.checkSouthNeighbour = function (calledFromRow, calledFromColumn) {
			const currentRow = calledFromRow + 1;
			const currentColumn = calledFromColumn;

			const value = checkCellAndCallBack(
				currentRow,
				currentColumn,
				this.checkSouthNeighbour.bind(this)
			);
			return value;
		};
		this.checkWestNeighbour = function (calledFromRow, calledFromColumn) {
			const currentRow = calledFromRow;
			const currentColumn = calledFromColumn - 1;

			const value = checkCellAndCallBack(
				currentRow,
				currentColumn,
				this.checkWestNeighbour.bind(this)
			);
			return value;
		};

		this.checkNorthEastNeighbour = function (calledFromRow, calledFromColumn) {
			const currentRow = calledFromRow - 1;
			const currentColumn = calledFromColumn + 1;

			const value = checkCellAndCallBack(
				currentRow,
				currentColumn,
				this.checkNorthEastNeighbour.bind(this)
			);
			return value;
		};
		this.checkSouthEastNeighbour = function (calledFromRow, calledFromColumn) {
			const currentRow = calledFromRow + 1;
			const currentColumn = calledFromColumn + 1;

			const value = checkCellAndCallBack(
				currentRow,
				currentColumn,
				this.checkSouthEastNeighbour.bind(this)
			);
			return value;
		};
		this.checkNorthWestNeighbour = function (calledFromRow, calledFromColumn) {
			const currentRow = calledFromRow - 1;
			const currentColumn = calledFromColumn - 1;

			const value = checkCellAndCallBack(
				currentRow,
				currentColumn,
				this.checkNorthWestNeighbour.bind(this)
			);
			return value;
		};
		this.checkSouthWestNeighbour = function (calledFromRow, calledFromColumn) {
			const currentRow = calledFromRow + 1;
			const currentColumn = calledFromColumn - 1;

			const value = checkCellAndCallBack(
				currentRow,
				currentColumn,
				this.checkSouthWestNeighbour.bind(this)
			);
			return value;
		};

		this.horizontalScore =
			this.checkEastNeighbour(row, column) +
			this.checkWestNeighbour(row, column);
		this.verticalScore =
			this.checkNorthNeighbour(row, column) +
			this.checkSouthNeighbour(row, column);
		this.leftTopDiagonalScore =
			this.checkNorthWestNeighbour(row, column) +
			this.checkSouthEastNeighbour(row, column);
		this.rightTopDiagonalScore =
			this.checkNorthEastNeighbour(row, column) +
			this.checkSouthWestNeighbour(row, column);

		const isTopOrHorizontalWin =
			this.horizontalScore === 4 || this.verticalScore === 4;
		const isDiagonalWin =
			this.leftTopDiagonalScore === 4 || this.rightTopDiagonalScore === 4;
		if (isTopOrHorizontalWin || isDiagonalWin) {
			return checkForValue;
		}
		return 0;
	}

	return checkNeighboursAndAssert.call({});
}

export default checkWinner;

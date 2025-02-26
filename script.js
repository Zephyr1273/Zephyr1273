var board,
    game = new Chess();

function onDragStart(source, piece, position, orientation) {
    if (game.in_checkmate() === true || game.in_draw() === true ||
        piece.search(/^b/) !== -1) {
        return false;
    }
}

function onDrop(source, target) {
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    if (move === null) return 'snapback';

    updateStatus();
}

function onSnapEnd() {
    board.position(game.fen());
}

function updateStatus() {
    var status = '';

    if (game.in_checkmate() === true) {
        status = 'Game over, you won!';
    } else if (game.in_draw() === true) {
        status = 'Game over, it\'s a draw!';
    } else {
        status = 'Your move';
    }

    document.getElementById('status').innerText = status;
}

var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
};

board = Chessboard('board', config);
updateStatus();

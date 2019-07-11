function newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
    var width;
    if (x == numberXslots) {
        width = Math.floor(maxArea.width / numberXslots);
    } else {
        width = Math.ceil(maxArea.width / numberXslots);
    }

    var height;
    if (y == numberYslots) {
        height = Math.floor(maxArea.height / numberYslots);
    } else {
        height = Math.ceil(maxArea.height / numberYslots);
    }

    var newX = maxArea.x + width * x;
    var newY = maxArea.y + height * y;
    return [newX, newY, width * xSlotToFill, height * ySlotToFill]
}

function reposition(client, newX, newY, w, h) {
    client.geometry = {
        x: newX,
        y: newY,
        width: w,
        height: h
    };
}

function move(workspace, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var client = workspace.activeClient;
    if (client.moveable) {
        arr = newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill);
        var newX = arr[0],
            newY = arr[1],
            w = arr[2],
            h = arr[3];
        reposition(client, newX, newY, w, h)
    }
}

function center(workspace) {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var newX = maxArea.x + ((maxArea.width - client.width) / 2);
        var newY = maxArea.y + ((maxArea.height - client.height) / 2);
        reposition(client, newX, newY, client.width, client.height)
    }
}

// GRID 3x2
registerShortcut("MoveWindowToUpLeft3x2", "jUltrawideWindows: Move Window to up-left (3x2)", "Meta+Num+7", function () {
    move(workspace, 5, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToUpCenter3x2", "jUltrawideWindows: Move Window to up-center (3x2)", "Meta+Num+8", function () {
    move(workspace, 5, 2, 1, 0, 3, 1)
});

registerShortcut("MoveWindowToUpRight3x2", "jUltrawideWindows: Move Window to up-right (3x2)", "Meta+Num+9", function () {
    move(workspace, 5, 2, 4, 0, 1, 1)
});

registerShortcut("MoveWindowToDownLeft3x2", "jUltrawideWindows: Move Window to down-left (3x2)", "Meta+Num+1", function () {
    move(workspace, 5, 2, 0, 1, 1, 1)
});

registerShortcut("MoveWindowToDownCenter3x2", "jUltrawideWindows: Move Window to down-center (3x2)", "Meta+Num+2", function () {
    move(workspace, 5, 2, 1, 1, 3, 1)
});

registerShortcut("MoveWindowToDownRight3x2", "jUltrawideWindows: Move Window to down-right (3x2)", "Meta+Num+3", function () {
    move(workspace, 5, 2, 4, 1, 1, 1)
});

registerShortcut("MoveWindowToLeftHeight3x2", "jUltrawideWindows: Move Window to left-height (3x2)", "Meta+Num+4", function () {
    move(workspace, 5, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToCenterHeight3x2", "jUltrawideWindows: Move Window to center-height (3x2)", "Meta+Num+5", function () {
    move(workspace, 5, 1, 1, 0, 3, 1)
});

registerShortcut("MoveWindowToRightHeight3x2", "jUltrawideWindows: Move Window to right-height (3x2)", "Meta+Num+6", function () {
    move(workspace, 5, 1, 4, 0, 1, 1)
});

// GRID 2x2

registerShortcut("MoveWindowToUpLeft2x2", "jUltrawideWindows: Move Window to up-left (2x2)", "ctrl+Num+7", function () {
    move(workspace, 2, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToUpCenter2x2", "jUltrawideWindows: Move Window to up-width (2x2)", "ctrl+Num+8", function () {
    move(workspace, 1, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToUpRight2x2", "jUltrawideWindows: Move Window to up-right (2x2)", "ctrl+Num+9", function () {
    move(workspace, 2, 2, 1, 0, 1, 1)
});

registerShortcut("MoveWindowToDownLeft2x2", "jUltrawideWindows: Move Window to down-left (2x2)", "ctrl+Num+1", function () {
    move(workspace, 2, 2, 0, 1, 1, 1)
});

registerShortcut("MoveWindowToDownCenter2x2", "jUltrawideWindows: Move Window to down-width (2x2)", "ctrl+Num+2", function () {
    move(workspace, 1, 2, 0, 1, 1, 1)
});

registerShortcut("MoveWindowToDownRight2x2", "jUltrawideWindows: Move Window to down-right (2x2)", "ctrl+Num+3", function () {
    move(workspace, 2, 2, 1, 1, 1, 1)
});

registerShortcut("MoveWindowToLeftHeight2x2", "jUltrawideWindows: Move Window to left-height (2x2)", "ctrl+Num+4", function () {
    move(workspace, 2, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToRightHeight2x2", "jUltrawideWindows: Move Window to right-height (2x2)", "ctrl+Num+6", function () {
    move(workspace, 2, 1, 1, 0, 1, 1)
});

// Fit 3/4 screen
registerShortcut("MoveWindowToUpLeft34", "jUltrawideWindows: Move Window to fit up-left 3/4 width ", "alt+Num+7", function () {
    move(workspace, 4, 2, 0, 0, 3, 1)
});

registerShortcut("MoveWindowToUpCenter34", "jUltrawideWindows: Move Window to up-width 3/4", "alt+Num+8", function () {
    move(workspace, 1, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToUpRight34", "jUltrawideWindows: Move Window to fit up-right 3/4 width ", "alt+Num+9", function () {
    move(workspace, 4, 2, 1, 0, 3, 1)
});

registerShortcut("MoveWindowToFitDownLeft34", "jUltrawideWindows: Move Window to fit down-left 3/4 width ", "alt+Num+1", function () {
    move(workspace, 4, 2, 0, 1, 3, 1)
});

registerShortcut("MoveWindowToDownCenter34", "jUltrawideWindows: Move Window to down-width 3/4", "alt+Num+2", function () {
    move(workspace, 1, 2, 0, 1, 1, 1)
});

registerShortcut("MoveWindowToFitDownRight34", "jUltrawideWindows: Move Window to fit down-right 3/4 width ", "alt+Num+3", function () {
    move(workspace, 4, 2, 1, 1, 3, 1)
});

registerShortcut("MoveWindowToLeftHeight34", "jUltrawideWindows: Move Window to fit left-height 3/4 width ", "alt+Num+4", function () {
    move(workspace, 4, 1, 0, 0, 3, 1)
});

registerShortcut("MoveWindowToRightHeight34", "jUltrawideWindows: Move Window to fit right-height 3/4 width ", "alt+Num+6", function () {
    move(workspace, 4, 1, 1, 0, 3, 1)
});

// General
registerShortcut("MoveWindowToMaximize", "jUltrawideWindows: Maximize Window", "Meta+Num+0", function () {
    move(workspace, 1, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToMaximize1", "jUltrawideWindows: Maximize Window (copy)", "alt+Num+0", function () {
    move(workspace, 1, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToMaximize2", "jUltrawideWindows: Maximize Window (copy2)", "ctrl+Num+0", function () {
    move(workspace, 1, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToCenter", "jUltrawideWindows: Center Window", "ctrl+Num+5", function () {
    center(workspace)
});

registerShortcut("MoveWindowToCenter1", "jUltrawideWindows: Center Window (copy)", "alt+Num+5", function () {
    center(workspace)
});

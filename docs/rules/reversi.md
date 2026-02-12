
# Reversi

Capture the board by **sandwiching** your opponent's pieces!

## The Sandwich Move
To capture pieces, you must place your disc so it traps the opponent's discs between two of yours.

<div class="bg-indigo-50 dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-center gap-4"><div class="flex flex-col items-center"><span class="text-xs font-bold text-slate-400 mb-2">BEFORE</span><svg viewBox="0 0 140 40" class="w-32"><circle cx="20" cy="20" r="15" fill="black" stroke="none"/><circle cx="60" cy="20" r="15" fill="white" stroke="#ccc" stroke-width="2"/><circle cx="100" cy="20" r="15" fill="white" stroke="#ccc" stroke-width="2"/><circle cx="120" cy="20" r="8" fill="none" stroke="black" stroke-width="2" stroke-dasharray="4 2" class="animate-pulse"/></svg></div><div class="text-2xl text-slate-300">➜</div><div class="flex flex-col items-center"><span class="text-xs font-bold text-slate-400 mb-2">AFTER</span><svg viewBox="0 0 140 40" class="w-32"><circle cx="20" cy="20" r="15" fill="black"/><circle cx="60" cy="20" r="15" fill="black"/><circle cx="100" cy="20" r="15" fill="black"/><circle cx="140" cy="20" r="15" fill="black"/></svg></div></div>

## Rules
*   **Must Capture**: You can only place a disc if it flips at least one opponent disc.
*   **Flip Lines**: You can flip discs horizontally, vertically, or diagonally.
*   **Most Pieces Wins**: When the board is full, the player with the most color showing wins!

## Pro Tip
**Corners are Safe!** If you put a piece in the corner, it can never be flipped. Try to get there first!

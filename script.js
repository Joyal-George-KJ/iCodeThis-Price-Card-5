const card = document.querySelectorAll('.card')
const button = document.querySelectorAll('.button')
let prevFocused = 0;

function focused(i) {
    card[prevFocused].className = 'card';
    button[prevFocused].className = 'button p-4';

    card[i].className = 'card active';
    button[i].className = 'button p-4 active';

    prevFocused = i
    console.log(`Focused!: ${i}`);
}
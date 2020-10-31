import { rgb, randomIntFromInterval } from './Model';
import { renderTargets, displayTarget, stateWon, stateLost, elements, toggleDificulty } from './UI';
let state = {};

function clickTargets(e) {
    if (e.target.matches('.square') && !state.stateWon) {
        const isCurrect = state.currentTarget.id === e.target.id;
        if (isCurrect) {
            stateWon(state.currentTarget);
            state.stateWon = true;
        } else {
            stateLost(e.target);
        }
    }
}

function controlDificulity(e) {
    if (e.target.dataset.difival !== state.dificulity && !state.stateWon) {
        state.dificulity = state.dificulity === 'hard' ? 'easy' : 'hard';
        toggleDificulty();
        run(state.dificulity);
    }
}

function controlNew(e) {
    run(state.dificulity);
    const headerInitVal = window.getComputedStyle(elements.header).getPropertyValue('--color-primary');
    elements.header.style.backgroundColor = headerInitVal;
    state.stateWon = false;
    elements.newBtn.textContent = 'New Colors';
}

function setEvents() {
    elements.squaresContainer.addEventListener('click', clickTargets);
    elements.dificulity.addEventListener('click', controlDificulity);
    elements.newBtn.addEventListener('click', controlNew);
}

function run(dif) {
    state.targets = dif === 'hard' ? [new rgb(), new rgb(), new rgb(), new rgb(), new rgb(), new rgb()] : [new rgb(), new rgb(), new rgb()];
    state.currentTarget = state.targets[randomIntFromInterval(0, state.targets.length - 1)];

    renderTargets(state.targets);
    displayTarget(state.currentTarget);
    elements.message.textContent = '';
}

state.dificulity = 'hard';
run(state.dificulity);
setEvents();
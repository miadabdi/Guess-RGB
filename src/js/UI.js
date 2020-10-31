function renderTarget(target) {
    let template = `<div class="square" id="${target.id}" style="background-color: ${target.htmlRespresent()}"></div>`;
    document.querySelector('.container-targets').insertAdjacentHTML('beforeend', template);
}

export const elements = {
    btnHard: document.querySelector('.dificulity__level--hard'),
    btnEasy: document.querySelector('.dificulity__level--easy'),
    header: document.querySelector('.header'),
    newBtn: document.querySelector('.new'),
    squaresContainer: document.querySelector('.container-targets'),
    dificulity: document.querySelector('.dificulity'),
    message: document.querySelector('.message'),
    UIRGBTarget: document.querySelector('.rgb-target')
};

export const renderTargets = arr => {
    elements.squaresContainer.innerHTML = '';
    arr.forEach(renderTarget);
};

export const displayTarget = target => {
    elements.UIRGBTarget.textContent = target.htmlRespresent();
}

export const stateWon = currentTarget => {
    document.querySelectorAll('.square, .header').forEach(el => el.style.backgroundColor = currentTarget.htmlRespresent());
    elements.message.textContent = 'Currect!';
    elements.newBtn.textContent = 'PLAY AGIAN?';
}
export const stateLost = target => {
    elements.message.textContent = 'Try again';
    target.style.backgroundColor = 'transparent';
}

export const toggleDificulty = () => {
    elements.btnHard.classList.toggle('dificulity__level--selected');
    elements.btnEasy.classList.toggle('dificulity__level--selected');
};
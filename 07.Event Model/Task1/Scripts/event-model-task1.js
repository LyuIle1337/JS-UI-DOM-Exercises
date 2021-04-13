function showHide(elementId) {
    let validateDataResult = validateData(elementId),
        containerElement = [];
    if (!validateDataResult.isDataValid) {
        return;
    } else {
        containerElement = validateDataResult.containerElement;
    }

    let container = [...containerElement.children];
    container.forEach(setButtonContentToHide);
}

function validateData(elementId) {
    let validData = true,
        containerElement = {};
    try {
        if (typeof (elementId) !== 'string' && !(elementId instanceof HTMLElement)) {
            validData = false;
            throw (`Provided element Id is not valid.`);
        }
        containerElement = document.getElementById(elementId);
        if (containerElement === null) {
            validData = false;
            throw (`There is no such element woth id: ${elementId}`);
        }
    } catch (exception) {
        console.error(exception);
    }

    return {
        isDataValid: validData,
        containerElement: containerElement,
    }
}

function setButtonContentToHide(element) {
    for (let i = 0; i < element.attributes.length; i++) {
        let currentAttr = element.attributes[i]
        if (currentAttr.nodeName === 'class' && currentAttr.nodeValue === 'button') {
            element.innerHTML = 'hide';
            element.addEventListener('click', buttonClickEvent, false);
            element.style.display = 'block';
        }
    }
}

function buttonClickEvent(event) {
    let buttonClicked = event.target,
        allPreviousElements = [],
        previousElement = buttonClicked.previousElementSibling,
        nextElement = buttonClicked.nextElementSibling;

    while (previousElement !== null) {
        let previousElementClassList = [...previousElement.classList];
        if (previousElementClassList.includes('button')) {
            break;
        } else if (previousElementClassList.includes('content')) {
            allPreviousElements.push(previousElement);
        }
        previousElement = previousElement.previousElementSibling;
    }

    if (allPreviousElements !== undefined && allPreviousElements.length > 0 && nextElement !== null) {
        let elementToBeShownOrHidden = allPreviousElements[allPreviousElements.length - 1];
        if (buttonClicked.innerHTML === 'hide') {
            buttonClicked.innerHTML = 'show'
            elementToBeShownOrHidden.style.display = 'none';
        } else {
            buttonClicked.innerHTML = 'hide'
            elementToBeShownOrHidden.style.display = ''
        }
    }
}

showHide('container');
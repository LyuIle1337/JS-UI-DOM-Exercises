function solve() {
    function validateData(elementId, content) {
        let validData = true,
            element = {};
        try {
            if (elementId === null || elementId === '' || elementId === undefined) {
                validData = false;
                throw ('Element Id not provided.');
            }

            if (typeof (elementId) !== 'string' && !(element instanceof HTMLElement)) {
                validData = false;
                throw ('Provided element id is not valid.');
            }

            element = document.getElementById(elementId);

            if (element === null) {
                validData = false;
                throw (`There is no such element woth id: ${elementId}`);
            }

            if (content === null || content.length < 1 || content === undefined) {
                validData = false;
                throw ('Content not provided.')
            }

            if (!Array.isArray(content)) {
                validData = false;
                throw ('Content must be of type array.');
            }

            function areAllStringOrNimber(contentElement) {
                return typeof (contentElement) === 'string' || typeof (contentElement) === 'number'
            }

            if (!content.every(areAllStringOrNimber)) {
                validData = false;
                throw (`Not all content elements are of type 'string' or 'number'.`);
            }
        } catch (exception) {
            console.error(exception);
        }

        return {
            isDataValid: validData,
            element: element,
            content: content
        }
    }

    return function addContentByElementId(elementId, content) {
        let element,
            data = validateData(elementId, content);
        if (data.isDataValid) {
            element = data.element;
        } else {
            return;
        }

        element.innerHTML = '';

        for (let i = 0; i < content.length; i++) {
            let newElement = document.createElement('div');
            newElement.innerHTML = content[i];
            element.appendChild(newElement);
        }
    };
}

module.exports = solve();
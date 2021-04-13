function solve() {
    let consts = {
        buttonSelector: '.button',
        contentSelector: '.content',
        hide: 'hide',
        show: 'show',
        notAstringErrorMessage: 'Provided selector is not of type string.',
        noElementFoundErrorMessage: 'No element found with that selector'
    }

    function validateInput(containerSelector) {
        if (typeof containerSelector != 'string') {
            console.error(consts.notAstringErrorMessage);
            throw `${consts.notAstringErrorMessage}`;
        }
        if ($(containerSelector).length < 1) {
            console.log(consts.noElementFoundErrorMessage);
            throw `${consts.noElementFoundErrorMessage}`;
        }
    }

    function buttonClickEvent(containerSelector) {
        $(`${containerSelector} > ${consts.buttonSelector}`).text(consts.hide).click(function () {
            let $contentElement = $(this).prevUntil(consts.buttonSelector).last();
            let $nextContentElement = $(this).next();

            if ($contentElement.length > 0 && $nextContentElement.length > 0 && $nextContentElement.attr('class') !== 'button') {
                if (this.textContent === consts.hide) {
                    this.textContent = consts.show;
                    $contentElement.hide();
                } else {
                    this.textContent = consts.hide;
                    $contentElement.show();
                }
            }
        });
    }
    return function (selector) {
        validateInput(selector);
        buttonClickEvent(selector);
    };
};

module.exports = solve;
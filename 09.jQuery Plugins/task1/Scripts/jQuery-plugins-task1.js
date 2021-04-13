$.fn.dropdown = function () {
    $('select').hide();

    let $dropdownContainer = $('<div />')
        .addClass('dropdown-list')
        .appendTo($('body')),
        $dropdown = $('<div />')
            .appendTo($dropdownContainer)
            .addClass('select-option'),
        $dropdownBtn = $('<a href="#"></a>')
            .text('Select Option')
            .appendTo($dropdown)
            .addClass('select-option-btn'),
        $optionsContainer = $('<div />')
            .appendTo($dropdownContainer)
            .addClass('options-container')
            .css('position', 'absolute')
    $chosenOption = $('<h3 />').appendTo('body')
        .css({ 'visibility': 'hidden', 'margin': '0', 'height': '20px' });

    $('select option').each(function (index) {
        $('<div />')
            .addClass('option-container')
            .appendTo($optionsContainer)
            .attr('data-value', $(this).val())
            .attr('data-index', index)
            .text($(this).text())
            .on('click', function () {
                $chosenOption.text(`You have selected ${$(this).text()}`)
                    .css({ 'visibility': 'visible' })
            });
    });

    $optionsContainer.hide();

    $dropdownBtn.on('click', function () {
        $optionsContainer.toggle();
        if ($optionsContainer.css('display') == 'none') {
            $chosenOption.css({ 'visibility': 'hidden' });
        }
    });

    $('body').append($dropdownContainer);
};

// Note the absence of variables/consts is intentional. For some reason every variable used instead of the string itself returned undefined.
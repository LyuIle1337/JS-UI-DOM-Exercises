$.fn.listview = function (data) {
    let $list = $('#books-list'),
        templateSelector = '#' + $list.attr('data-template'),
        template = Handlebars.compile($(templateSelector).html());

    for (let i = 0; i < data.books.length; i++) {
        let listItem = template(data.books[i]);
        $list.append(listItem);
    }
    return $list;
};
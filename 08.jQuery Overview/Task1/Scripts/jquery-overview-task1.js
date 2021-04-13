function solve() {
     let consts = {
          ulClass: 'items-list',
          liClass: 'list-item',
          countNaNorMissingMessage: 'Count is either missing or is not a number.',
          countNegativeMessage: 'Count must be a positive number'
     }

     function validateInput(selector, count) {
          function validateCount(count) {
               if (count === undefined || count === null || isNaN(count)) {
                    console.error(consts.countNaNorMissingMessage)
                    throw (consts.countNaNorMissingMessage);
               }
               if (count < 0) {
                    console.error(consts.countNegativeMessage);
                    throw (consts.countNegativeMessage);
               }
          }

          function validateSelector(selector) {
               if (!($(selector).length)) {
                    // * If the provided selector does not selects anything, do nothing.
                    // ok I do nothing.
               }
          }
          validateCount(count);
          validateSelector(selector);
     }

     function appendUl(count) {
          let $ul = $('ul').addClass(consts.ulClass);
          for (let i = 0; i < count; i++) {
               $('<li />').html(`List item ${i}`).addClass(consts.liClass).appendTo($ul);
          }
     }

     return function (selector, count) {
          validateInput(selector, count);
          appendUl(count);
     };
};

module.exports = solve();
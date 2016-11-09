var AjaxAPP = (function ($, Handlebars) {

    var textTemplate = $("#li-template").html();
    var compiledTemplate = Handlebars.compile(textTemplate);
    var $list = $(".js_list");
    var $form = $(".js_form");
    var $button = $form.find("button");

    function init() {
        addEvents();
    }

    function addEvents() {
        $button.on('click', getData)
    }

    function getData(e) {
        e.preventDefault();

        $.get('https://jsonplaceholder.typicode.com/users', function (data) {
            addElement(data)
        });

        $button.prop('disabled', true);
    }

    function addElement(data) {
        var df = document.createDocumentFragment();

        $.each(data, function (i, el) {
            $(df).append(compiledTemplate(el));
        });

        $list.append(df);
    }

    return {
        init: init
    }
})(jQuery, Handlebars);

$(document).ready(function () {
    AjaxAPP.init()
});
var AjaxAPP = (function ($) {

    var $list = $(".js_list");
    var $form = $(".js_form");
    var $button = $form.find("button");

    function init() {
        addEvents();
    }

    function addEvents() {
        $button.on('click', getData)
    }

    function getData() {

    }

    function addElement(value) {
        var $li = $("<li></li>").text(value);

        $list.append($li);
    }

    return {
        init: init
    }
})(jQuery);

$(document).ready(function () {
    AjaxAPP.init()
});
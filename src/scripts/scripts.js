var AdderAPP = (function ($) {

    var $list = $(".js_list");
    var $form = $(".js_form");
    var $input = $form.find("input");
    var $button = $form.find("button");

    function init() {
        addEvents();
    }

    function addEvents() {
        $button.on('click', validate)
    }

    function validate(e) {
        e.preventDefault();

        if($.trim($input.val()) === ""){
            $form.find('.form-group').addClass('has-danger');
        } else {
            $form.find('.form-group').removeClass('has-danger');
            addElement($input.val());
        }
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
    AdderAPP.init()
});
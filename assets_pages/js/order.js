$(function() {
    var isSubmit = false;
	$('form.main-order-form').submit(function(e) {

        if (isSubmit){
            return false;
        }

        var btn = $("button, input[type=submit]", $(this));

        e.preventDefault();

        let form = $(this),
            phone = $.trim($("[name=phone]", form).val());

        if (phone.length<5){
            return alert('Номер должен содержать не меннее 5 символов');
        }

        btn.prop("disabled", true);
        isSubmit = true;
		Lib.request('/Order/Create', $(this).serialize(), function(result, data) {
            if (!result && data){
                isSubmit = false;
                btn.prop("disabled", false);
				return alert(data);
            }
			if (data.redirect)
				return document.location.href = data.redirect;
		});
	});
});
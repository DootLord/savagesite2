$(document).ready(function () {
    setTimeout(function () {
        M.toast({ html: "Scroll down to see more!", class: "green" });
    }, 2500);

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});


$(".quote-select").change(function () {
    var validQuery = true;
    var queryIssue = false;
    var resultValue = 0;
    $(".quote-select").each(function (index) {
        if ($(this).val() == null) {
            validQuery = false
            return false;
        }

        switch($(this).val()) {
            case "time":
                resultValue = "A meeting will be required to discuss pricing due to the length of the video."
                queryIssue = true;
                return false;
                break;
            case "graphic":
                resultValue = "A meeting will be required to discuss pricing due to the requirements of graphic effects."
                queryIssue = true;
                return false;
                break;
            default:
                resultValue = resultValue + parseInt($(this).val());
                break;
        }
    });

    if(validQuery && queryIssue) {
        $("#result").text(resultValue);
    } else if(validQuery) {
        $("#result").text("Quote Price: £" + resultValue);
    }

   
})


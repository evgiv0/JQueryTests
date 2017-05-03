$(document).ready(function () {
    $(".guess_box").click(checkForSale);

    function getRandom(num) {
        var result = Math.floor(Math.random() * num);
        return result;
    }

    var hideCode = function () {
        var numRand = getRandom(3);
        $(".guess_box").each(function (index, value) {
            if (numRand == index) {
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }

    hideCode();

    function checkForSale() {
        var discount;
        if ($.contains(this, document.getElementById("has_discount"))) {
            var my_num = getRandom(5);
            discount = "<p>Your sale is: " + my_num + "%</p>";
        }
        else {
            discount = "<p>Sorry, no discount this time</p>";
        }
        $(this).append(discount);
        $(".guess_box").each(function () {
            $(this).unbind('click');
        });
    }
});
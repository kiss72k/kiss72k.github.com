/*!
 * link-page.js
 * Copyright 2011-2014 My Company, Inc.
 * Simple javascript file.
 */

$(".readMore").click(function() {
    var This=$(this);

    $(this).next().toggle(function() {
        if(This.text()=="Read") {
            This.text("Hide");
        }
        else {
            This.text("Read");
        }
    })
});

$(document).ready(function(){
    var d="<div id='canvas'></div>";
    $("body").html(d);    
    
    var b=davis.quickBox();
    
    zi.css();
    
    var c=new Raphael("canvas");
    
    var cc={
        Luke:50,
        loves:100,
        Morgan:50,
        "and Fiona":30,
        "and Rowan":30,
        "and other stuff":10,
        "but much less":3
    };
    
    opts={};
    opts.data=cc;
    opts.bounds=b;
    opts.canvas=c;
    
    geo.donut(opts);
    
    
});
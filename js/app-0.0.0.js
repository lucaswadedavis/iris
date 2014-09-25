$(document).ready(function(){
app.c.init();
});

/////////////////////////////////////////////
/////////////////////////////////////////////


var app={};
app.m={};
app.v={};
app.c={};


/////////////////////////////////////////////
/////////////////////////////////////////////



/////////////////////////////////////////////
/////////////////////////////////////////////

app.c.init=function(){
    app.v.init();
};


/////////////////////////////////////////////
/////////////////////////////////////////////

app.v.init=function(){
    zi.css();
    app.v.LAYOUT();
};

app.v.LAYOUT=function(){
    var d="<div id='canvas'></div>";
    $("body").html(d);    
    app.v.IRIS("canvas");
};

app.v.IRIS=function(target){
    var target=target||"canvas";
    var b=davis.quickBox();
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
    
    var opts={};
    opts.data=cc;
    opts.bounds=b;
    opts.canvas=c;
    
    geo.donut(opts);
};

/////////////////////////////////////////////
/////////////////////////////////////////////
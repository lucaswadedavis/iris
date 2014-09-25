$(document).ready(function(){ app.c.init(); });
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
    Parse.initialize("EHse3gUBrkDSdmoAv0vUt269OLvBlIxDh54gQhYx", "oAXUTPxxFBfsaEjn2E8eOD3UwHyzAJReAga8opsH");
    app.v.init();
};

app.c.create_object=function(opts){
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
        alert("yay! it worked");
        });
};

app.c.create_user=function(opts){
    var user = new Parse.User();
    
    user.set("username", opts.username);
    user.set("password", opts.password);
    user.set("email", opts.email);
    // other fields can be set just like with Parse.Object
    user.set("phone", opts.phone);
    user.set("color", opts.color);
    
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
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
    var b=davis.quickBox();
    var c=new Raphael("canvas");
    
    app.v.RAIN(c,b);
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

app.v.RAIN=function(canvas,bounds){
    var c=canvas;
    var b=bounds;
    
    $('#canvas').mousedown(function (e) { //Relative ( to its parent) mouse position 
        var posX = e.pageX;
        var posY = e.pageY;
        var circle=c.circle(posX,posY,0).attr({"opacity":1,"fill":"#fff"});
        circle.animate({"r":200,"opacity":0},3000,">",function(){this.remove();});  
        });
    
};

/////////////////////////////////////////////
/////////////////////////////////////////////
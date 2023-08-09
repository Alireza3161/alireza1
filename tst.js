
class test{
    constructor(width,height){
        this.width=width
        this.height=height
    }

}

class test2 extends test{
    constructor(width , height , color){
        super(width,height)
        this.color=color

    }
    show(){
        return "<div style='width:"+this.width+"px; height:"+this.height+"px;background:"+this.color+"'></div>"
    }
}

var obj=new test2(100,200,"green");
var obj2=new test2(100,300,"black");
var obj3=new test2(100,400,"red");
var x=document.getElementById("test");
x.innerHTML=obj.show();
x.innerHTML=obj2.show();
x.innerHTML=obj3.show();

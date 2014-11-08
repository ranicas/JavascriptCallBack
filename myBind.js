Function.prototype.myBind = function (context) {
    var fun = this;
    return function(){
        fun.apply(context);
    }
}
const counter = ( function(){
    let privateCounter = 0;

    function changeBy(val){
        privateCounter+=val;
    }

    return {
        increment(){
            changeBy(1)
        },

        decrement(){
            changeBy(-1);
        },

        value(){
            return privateCounter;
        }
    };
})();

console.log(counter.value());

counter.increment();
counter.increment();

console.log(counter.value());

function a(){
    var a=7;
    function b(){
        console.log(a);
    }
    b();
}

a();
const stairs = {
    step: 0,
    up: function() {
        this.step ++;
        console.log("You moved up")
    },
    down: function() {
        this.step --;
        console.log("You moved down")
    },
    printStep: function() {
        console.log("You are on", this.step, "stair");
    }
}
console.log("You are inside, where are you going now?")
stairs.up();
stairs.up();
stairs.up();
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep()

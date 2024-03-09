b.addEventListener("click", function (event) {
  // Tutaj this wskazuje na element DOM o id b
  console.log("b: ", this); // ✅

  // var self = this;

  function innerFuncOne() {
  // const innerFuncOne = () => {
    // Tutaj this wskazuje na element Window, bo funkcja została
    //wywołana bez żadnego kontekstu.
    console.log("innerFuncOne: ", this); // 🛑
    // console.log("innerFuncOne: ", event.currentTarget);
    // console.log("innerFuncOne: ", b);
    // console.log("innerFuncOne: ", self);
  }

  innerFuncOne(this);
  // innerFuncOne.call(this);

});
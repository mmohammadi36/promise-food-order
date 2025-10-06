const startBtn = document.getElementById("startBtn");
const output = document.getElementById("output");

// تابع برای چاپ پیام داخل div
function print(msg) {
  output.textContent += msg + "\n";
}
function orderFood() {
  return new Promise((res) => {
    setTimeout(() => {
     res("Burger ordered")
    }, 1000);
  });
}
function cookFood() {
  return new Promise((res) => {
    setTimeout(() => {
     res("Burger cooked")
    }, 1000);
  });
}
function servedFood() {
  return new Promise((res) => {
    setTimeout(() => {
     res("Burger served")
    }, 1000);
  });
}
startBtn.addEventListener("click", () => {
orderFood()
.then(ordered=>{print(ordered);return cookFood()
})
.then(cooked=>{print(cooked);return servedFood()
})
.then(served=>{print(served); print("🎉 Meal is ready!");
})
.catch(err=>{print("something went wrong:"+err)})
});

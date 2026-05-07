let display = document.querySelector("#display");
let btn = document.querySelectorAll("button");

btn.forEach((btn) => {
    btn.addEventListener("click", function (detail) {
        if (detail.target.value === "=") {
            let save = eval(display.value);
            display.value = save;

        } else if (detail.target.value === "AC") {
            display.value = " ";
        } else if (detail.target.value === "Del") {
            display.value = display.value.slice(0, -1);
        }
        else {
            display.value += detail.target.value;
        }

    })
});
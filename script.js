const batterySlider = document.querySelector(".variable-battery input");
const led = document.querySelector(".led span");

batterySlider.addEventListener("input", function () {
    let opacity = this.value * (1 / 3);
    led.style.backgroundColor = `rgba(55, 55, 255, ${opacity})`;
    led.style.boxShadow = `0px 0px 20px ${opacity * 10}px rgba(55, 55, 255, ${opacity / 2})`
});

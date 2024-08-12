export default function hello() {
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("color-background");
    const greeting = document.getElementById("text");
  
    function randomRGB() {
      function randomNum() {
        return Math.round(Math.random() * 255);
      }
      const result = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
      return result;
    }
  
    greeting.innerHTML = "Hello World!";
  
    body.style.backgroundColor = randomRGB();
    greeting.style.color = randomRGB();
  
    setInterval(() => {
      body.style.backgroundColor = randomRGB();
      greeting.style.color = randomRGB();
    }, 2000);
  });
  return "Hello World!";
}

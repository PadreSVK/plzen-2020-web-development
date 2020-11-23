function removeButton() {
  this.event.target.style.display = "none"
}

setTimeout(() =>
  document.getElementById("btn_1").addEventListener("click", function (e) {
    return console.log(e)
  }), 1000)

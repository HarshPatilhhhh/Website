function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const people = document.getElementById("people").value;

  const data = {
    name: name,
    phone: phone,
    date: date,
    time: time,
    people: people
  };

  fetch("https://script.google.com/macros/s/AKfycbwNtoKIfH4vNGwozoAjLQLpwogl9VFntT_JtvuvYlqariwbr8lCr0YNzOhE_BxRsXFx/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    alert("Reservation successful!");
    document.getElementById("reservationForm").reset();
  })
  .catch(error => console.error("Error:", error));
}
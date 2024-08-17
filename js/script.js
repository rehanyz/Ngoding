document.addEventListener("DOMContentLoaded", function () {
  const ticketList = document.getElementById("ticket-list");
  const ticketDescription = document.getElementById("ticket-description");
  const ticketSelect = document.getElementById("ticket");

  // Sample ticket data
  const tickets = [
    { id: 1, name: "Bus Jakarta to Bandung ", description: "Comfortable bus with AC.", price: "$25" },
    { id: 2, name: "Bus B to City Y", description: "Economical bus with basic amenities.", price: "$15" },
    { id: 3, name: "Bus C to City Z", description: "Luxury bus with Wi-Fi and meals.", price: "$45" },
  ];

  // Populate ticket list
  if (ticketList) {
    tickets.forEach((ticket) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="description.html?id=${ticket.id}">${ticket.name} - ${ticket.price}</a>`;
      ticketList.appendChild(li);
    });
  }

  // Display ticket description
  if (ticketDescription) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const ticket = tickets.find((t) => t.id == id);
    if (ticket) {
      ticketDescription.innerHTML = `<h2>${ticket.name}</h2><p>${ticket.description}</p><p>Price: ${ticket.price}</p><a href="purchase.html?id=${ticket.id}">Purchase Ticket</a>`;
    } else {
      ticketDescription.innerHTML = `<p>Ticket not found.</p>`;
    }
  }

  // Populate purchase form with ticket options
  if (ticketSelect) {
    tickets.forEach((ticket) => {
      const option = document.createElement("option");
      option.value = ticket.id;
      option.textContent = `${ticket.name} - ${ticket.price}`;
      ticketSelect.appendChild(option);
    });
  }
});

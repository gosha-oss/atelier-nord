const form = document.getElementById("form");
const status = document.getElementById("status");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      "Termin-Anfrage Atelier Nord (Demo)",
      "Name: " + data.get("name"),
      "Telefon: " + data.get("telefon"),
      "Leistung: " + data.get("leistung"),
      "Wunschdatum: " + data.get("datum")
    ].join("\n");
    const href =
      "mailto:demo@invalid.example?subject=" +
      encodeURIComponent("Termin-Anfrage Demo") +
      "&body=" +
      encodeURIComponent(lines);
    status.hidden = false;
    status.textContent =
      "Demo: es öffnet sich Ihr Mailprogramm. Es wird kein echter Salon benachrichtigt.";
    window.location.href = href;
  });
}

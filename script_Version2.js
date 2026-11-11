document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("requestForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() || "Клиент";
    const phone = formData.get("phone")?.toString().trim() || "";
    const device = formData.get("device")?.toString().trim() || "Не указано";
    const message = formData.get("message")?.toString().trim() || "Без подробностей";

    const text =
      "Здравствуйте! Хочу вызвать мастера.\n" +
      `Имя: ${name}\n` +
      `Телефон: ${phone}\n` +
      `Тип техники: ${device}\n` +
      `Проблема: ${message}`;

    const encodedText = encodeURIComponent(text);

    const whatsappUrl = `https://wa.me/79241143646?text=${encodedText}`;
    const telegramUrl = `https://t.me/share/url?url=https://example.com&text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      window.open(telegramUrl, "_blank");
    }, 300);

    alert("Заявка подготовлена. Откроется WhatsApp и Telegram для отправки сообщения.");
    form.reset();
  });
});
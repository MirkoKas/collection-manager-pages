(function () {
  const user = "collection-manager" + "-support";
  const domain = "kasparek-home" + "." + "de";
  const address = user + "@" + domain;

  document.querySelectorAll("[data-email-text]").forEach((node) => {
    const link = document.createElement("a");
    link.href = "mailto:" + address;
    link.textContent = address;
    node.replaceChildren(link);
  });

  document.querySelectorAll("[data-email-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const subject = button.getAttribute("data-subject") || "Collection Manager";
      window.location.href = "mailto:" + address + "?subject=" + encodeURIComponent(subject);
    });
  });
})();

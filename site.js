
(function () {
  var steps = [
    { label: "STORE", body: "Integrate sales channels", live: "ORDER SIGNAL RECEIVED" },
    { label: "INVENTORY", body: "Shipfront receives and inventories.", live: "INVENTORY" },
    { label: "FULFILLMENT", body: "We build custom workflows to pick, pack, label, and ship your products exactly how you would like.", live: "FULFILLMENT" },
    { label: "QUALITY CHECK", body: "We get your products to your customers, quickly and accurately.", live: "QUALITY CHECK" },
    { label: "CARRIER", body: "Working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery.", live: "CARRIER" },
    { label: "CUSTOMER", body: "Happy Customers!", live: "CUSTOMER" }
  ];
  var process = [
    "Find a cool product",
    "Get it manufactured",
    "Ship inventory from supplier to Shipfront",
    "Shipfront receives and inventories",
    "Integrate sales channels",
    "We ship",
    "Happy Customers!"
  ];

  function setNet(i) {
    var live = document.getElementById("net-live");
    var label = document.getElementById("net-label");
    var body = document.getElementById("net-body");
    if (!live) return;
    var step = steps[i];
    live.textContent = step.live;
    label.textContent = step.label;
    body.textContent = step.body;
    document.querySelectorAll("[data-net]").forEach(function (el) {
      el.setAttribute("aria-pressed", el.getAttribute("data-net") === String(i) ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-net]").forEach(function (el) {
    el.addEventListener("click", function () {
      setNet(Number(el.getAttribute("data-net")));
    });
  });

  var net = document.getElementById("network");
  if (net) {
    window.addEventListener("scroll", function () {
      var rect = net.getBoundingClientRect();
      var total = net.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      var scrolled = Math.min(Math.max(-rect.top, 0), total);
      setNet(Math.min(steps.length - 1, Math.floor((scrolled / total) * steps.length)));
    }, { passive: true });
  }

  function setProcess(i) {
    var title = document.getElementById("process-active");
    if (!title) return;
    title.textContent = process[i];
    document.querySelectorAll("[data-process]").forEach(function (el) {
      var on = el.getAttribute("data-process") === String(i);
      if (on) el.setAttribute("aria-current", "step");
      else el.removeAttribute("aria-current");
    });
    document.querySelectorAll("[data-dot]").forEach(function (el) {
      var on = el.getAttribute("data-dot") === String(i);
      el.setAttribute("r", on ? "14" : "8");
      el.setAttribute("fill", "#000000");
      el.setAttribute("stroke", "rgba(255,255,255,0.38)");
    });
  }
  document.querySelectorAll("[data-process]").forEach(function (el) {
    el.addEventListener("click", function () {
      setProcess(Number(el.getAttribute("data-process")));
    });
  });

  var form = document.getElementById("quote-form");
  if (form) {
    function show(id, on) { document.getElementById(id).style.display = on ? "block" : "none"; }
    function val(id) { return document.getElementById(id).value.trim(); }
    form.addEventListener("submit", function (event) {
      var name = val("name");
      var email = val("email");
      var phone = val("phone");
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      show("name-error", !name);
      show("email-error", !email || !emailOk);
      show("phone-error", !phone);
      if (!name || !email || !emailOk || !phone) {
        event.preventDefault();
      }
    });
  }
})();

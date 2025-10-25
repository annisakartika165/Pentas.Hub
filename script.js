// Efek loading sebelum pindah ke sukses.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formTiket");
  const loading = document.getElementById("loading");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("hidden");
      loading.classList.remove("hidden");

      setTimeout(() => {
        window.location.href = "sukses.html";
      }, 3000); // pindah ke sukses.html setelah 3 detik
    });
  }
});

// Efek confetti saat pembayaran berhasil
function confettiEffect() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 100 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 0.02 + 0.01,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach((p) => {
      p.y += p.d * 100;
      if (p.y > canvas.height) p.y = -10;
    });
  }

  draw();
}
// Kalkulasi total tiket
document.addEventListener("DOMContentLoaded", () => {
  const kategori = document.getElementById("kategoriTiket");
  const jumlah = document.getElementById("jumlahTiket");
  const total = document.getElementById("totalHarga");

  function updateTotal() {
    const harga = parseInt(kategori.value || 0);
    const qty = parseInt(jumlah.value || 0);
    const hasil = harga * qty;

    total.textContent = hasil
      ? `Rp${hasil.toLocaleString("id-ID")}`
      : "Rp0";
  }

  if (kategori && jumlah) {
    kategori.addEventListener("change", updateTotal);
    jumlah.addEventListener("input", updateTotal);
  }

  // Loading sebelum redirect ke sukses.html
  const form = document.getElementById("formTiket");
  const loading = document.getElementById("loading");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("hidden");
      loading.classList.remove("hidden");

      setTimeout(() => {
        window.location.href = "sukses.html";
      }, 3000);
    });
  }
});

// Efek confetti saat pembayaran berhasil
function confettiEffect() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 100 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 0.02 + 0.01,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach((p) => {
      p.y += p.d * 100;
      if (p.y > canvas.height) p.y = -10;
    });
  }

  draw();
}

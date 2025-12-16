const note = document.getElementById("note");

// load catatan saat halaman dibuka
note.value = localStorage.getItem("note") || "";

// simpan otomatis setiap ngetik
note.addEventListener("input", () => {
  localStorage.setItem("note", note.value);
});

// Sahifa yuklanayotganda ismni ko'rsatish
document.addEventListener("DOMContentLoaded", function() {
    var savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('displayName').textContent = savedName;
    }
});

// Ismni saqlash funksiyasi
function saveName() {
    var name = document.getElementById('nameInput').value;
    localStorage.setItem('userName', name);
    document.getElementById('displayName').textContent = name;
}

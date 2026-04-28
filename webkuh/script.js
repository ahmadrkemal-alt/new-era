document.addEventListener("DOMContentLoaded", function () {

    let selectedGame = "";

    const games = [
        { nama: "Mobile Legends", gambar: "img/ml.png" },
        { nama: "Free Fire", gambar: "img/ff.png" },
        { nama: "PUBG Mobile", gambar: "img/pubg.png" },
        { nama: "Genshin Impact", gambar: "img/genshin.png" }
    ];

    const gameList = document.getElementById("gameList");

    // TAMPILKAN GAME
    games.forEach(game => {
        let div = document.createElement("div");
        div.className = "game";

        div.innerHTML = `
            <img src="${game.gambar}" 
                 onerror="this.src='https://via.placeholder.com/100'">
            <p>${game.nama}</p>
        `;

        div.onclick = () => {
            selectedGame = game.nama;

            document.querySelectorAll(".game").forEach(el => {
                el.classList.remove("active");
            });

            div.classList.add("active");
        };

        gameList.appendChild(div);
    });

    // ORDER + KIRIM DATABASE
    window.order = function () {
        let id = document.getElementById("playerID").value;
        let nominal = document.getElementById("nominal").value;
        let payment = document.getElementById("payment").value;

        if (!selectedGame || !id || !nominal || !payment) {
            alert("Lengkapi semua data dulu!");
            return;
        }

        fetch("order.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `game=${selectedGame}&player_id=${id}&nominal=${nominal}&payment=${payment}`
        })
        .then(res => res.text())
        .then(res => {

            if (res === "success") {

                document.getElementById("detail").innerHTML = `
                    Game: ${selectedGame}<br>
                    ID: ${id}<br>
                    Nominal: ${nominal}<br>
                    Pembayaran: ${payment}
                `;

                document.getElementById("popup").classList.add("active");

            } else {
                alert("Gagal menyimpan ke database!");
            }

        })
        .catch(() => {
            alert("Server error!");
        });
    };

    // CLOSE POPUP
    window.closePopup = function () {
        document.getElementById("popup").classList.remove("active");
    };

});
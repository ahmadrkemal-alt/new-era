<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Top Up Game Pro</title>

<link rel="stylesheet" href="kemal.css">
</head>
<body>

<h1>⚡ Mamang Top Up</h1>
        
    </h1>
</header>

<div class="container">

    <h2 class="title">Pilih Game</h2>
    <div class="games" id="gameList"></div>

    <div class="form">
        <h2>Top Up Sekarang</h2>

        <input type="text" id="playerID" placeholder="Masukkan ID Player">

        <select id="nominal">
            <option value="">Pilih Nominal</option>
            <option>50.000</option>
            <option>100.000</option>
            <option>200.000</option>
            <option>500.000</option>
        </select>

        <select id="payment">
            <option value="">Metode Pembayaran</option>
            <option>DANA</option>
            <option>OVO</option>
            <option>GoPay</option>
            <option>ShopeePay</option>
            <option>QRIS</option>
        </select>

        <button onclick="order()">⚡ Beli Sekarang</button>
    </div>

</div>

<!-- POPUP -->
<div class="popup" id="popup">
    <div class="popup-box">
        <h3>🎉 Berhasil!</h3>
        <p id="detail"></p>
        <button onclick="closePopup()">OK</button>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
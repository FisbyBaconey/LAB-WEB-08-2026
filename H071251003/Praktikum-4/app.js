const dataPraktikan = [ 
    { nama: "Budi", nilaiTugas: [80, 85, 90] }, 
    { nama: "Siti", nilaiTugas: [60, 90, 55] },
    { nama: "Andi", nilaiTugas: [85, 90, 80] },
    { nama: "Dewi", nilaiTugas: [75, 65, 80] },
    { nama: "Hana", nilaiTugas: [85, 65, 80] },
    { nama: "Eko", nilaiTugas: [45, 80, 65] } 
];

let listLulus = [];
let listGagal = [];

let namaAsisten = "";

while (!namaAsisten || !namaAsisten.trim()) {
    const input = prompt("Masukkan Nama Asisten Lab:");
    if (input === null) {
        break; 
    }
    namaAsisten = input;
}

if (namaAsisten) {
    namaAsisten = namaAsisten.trim();
}

//ja
dataPraktikan.forEach(siswa => {
    let scores = siswa.nilaiTugas;
    let total = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = total / scores.length;
    siswa.rataRata = average;
    if (average < 75) {
        listGagal.push(average);
        console.log("rata-rata nilai " + siswa.nama + ": " + average + " (Tidak Lulus)");
    } else {
        listLulus.push(average);
        console.log("rata-rata nilai " + siswa.nama + ": " + average + " (Lulus)");
    }
});

const bgAccents = [
    { numBg: "bg-rose-800", textBg: "bg-rose-500" },
    { numBg: "bg-orange-800", textBg: "bg-orange-500" },
    { numBg: "bg-amber-800", textBg: "bg-amber-500" },
    { numBg: "bg-emerald-800", textBg: "bg-emerald-500" },
    { numBg: "bg-indigo-800", textBg: "bg-indigo-500" }
];

// HTML PARRTT
let htmlOutput =
    `<header>
        <h1>Asisten Lab: ${namaAsisten}</h1>
        <p>selamat datang!</p>
    </header>
    `;

    `<div class="rounded-md text-xl p-5">
    <div name="list">`;

dataPraktikan.forEach((siswa, index) => {
    const isGagal = listGagal.includes(siswa.rataRata);
    const textColorClass = isGagal ? "text-red-600" : "text-green-600";
    const statusText = isGagal ? "Tidak Lulus" : "Lulus";
    const accent = bgAccents[index % bgAccents.length];

    htmlOutput += `
        <div class="grid grid-cols-1 md:grid-cols-7 rounded-md gap-3 text-white font-bold text-xl md:text-3xl my-4">
            <div class="col-span-1 ${accent.numBg} rounded-md p-2 w-full h-20 flex items-center justify-center">
                ${index + 1}.
            </div>
            <div class="col-span-2 ${accent.textBg} rounded-md p-2 w-full h-20 flex items-center px-5">
                ${siswa.nama}
            </div>
            <div class="col-span-2 ${accent.textBg} rounded-md p-2 w-full h-20 flex items-center px-5 text-lg md:text-2xl">
                ${siswa.nilaiTugas.join(", ")}
            </div>
            <div class="score col-span-2 ${textColorClass} flex justify-between items-center px-5 font-bold">
                <span>${siswa.rataRata.toFixed(1)}</span>
                <span class="text-sm md:text-xl">(${statusText})</span>
            </div>
        </div>
    `;
});

htmlOutput += `</div></div>`;

document.write(htmlOutput);

console.log("Data Hasil Akhir Praktikan:", dataPraktikan);
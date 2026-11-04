const data = [
    ["Al-Khwarizmi","Persia","Matematika"],
    ["Ibnu Sina","Persia","Kedokteran"],
    ["Al-Biruni","Persia","Astronomi"],
    ["Ibnu al-Haytham","Irak","Optik"],
    ["Al-Razi","Persia","Kedokteran"],
    ["Al-Zahrawi","Andalusia","Bedah"],
    ["Ibnu Rusyd","Andalusia","Filsafat"],
    ["Jabir ibn Hayyan","Dunia Islam","Kimia"],
    ["Al-Jazari","Mesopotamia","Teknik"],
    ["Al-Tusi","Persia","Astronomi"],
    ["Euclid","Yunani","Geometri"],
    ["Archimedes","Yunani","Fisika"],
    ["Hippocrates","Yunani","Kedokteran"],
    ["Aristoteles","Yunani","Filsafat"],
    ["Pythagoras","Yunani","Matematika"],
    ["Copernicus","Polandia","Astronomi"],
    ["Galileo Galilei","Italia","Fisika"],
    ["Johannes Kepler","Jerman","Astronomi"],
    ["Isaac Newton","Inggris","Fisika"],
    ["Robert Boyle","Irlandia","Kimia"],
    ["Lavoisier","Prancis","Kimia"],
    ["Michael Faraday","Inggris","Fisika"],
    ["James Maxwell","Skotlandia","Fisika"],
    ["Charles Darwin","Inggris","Biologi"],
    ["Louis Pasteur","Prancis","Biologi"],
    ["Gregor Mendel","Austria","Genetika"],
    ["Mendeleev","Rusia","Kimia"],
    ["Marie Curie","Polandia","Fisika"],
    ["Albert Einstein","Jerman","Fisika"],
    ["Max Planck","Jerman","Kuantum"],
    ["Niels Bohr","Denmark","Fisika"],
    ["Schrödinger","Austria","Kuantum"],
    ["Heisenberg","Jerman","Kuantum"],
    ["Alan Turing","Inggris","Komputer"],
    ["Nikola Tesla","Serbia","Teknologi"],
    ["Thomas Edison","Amerika","Teknologi"],
    ["Alexander Bell","Skotlandia","Telekomunikasi"],
    ["Rachel Carson","Amerika","Lingkungan"],
    ["Rosalind Franklin","Inggris","DNA"],
    ["Stephen Hawking","Inggris","Kosmologi"],
    ["Linnaeus","Swedia","Biologi"],
    ["Vesalius","Belgia","Anatomi"],
    ["Leonardo da Vinci","Italia","Sains"],
    ["Ramanujan","India","Matematika"],
    ["C. V. Raman","India","Fisika"],
    ["J. C. Bose","India","Biologi"],
    ["Tu Youyou","Tiongkok","Farmasi"],
    ["Katherine Johnson","Amerika","Astronautika"],
    ["Kary Mullis","Amerika","Biologi"],
    ["Abdus Salam","Pakistan","Fisika"]
];

const people = document.getElementById("people");

people.innerHTML = data.map((person,index) => `
    <div class = "person">
        <span class = "index">${String(index + 1).padStart(2,"0")}</span>
        <b>${person[0]}</b>
        <small>${person[1]}</small>
        <br>
        <span class = "tag">${person[2]}</span>
    </div>
`).join("");
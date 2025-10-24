import QRCode from "qrcode";
import fs from "fs";

const oeuvres = [
  {
    "id": "1",
    "titre": "Masque Baoulé",
    "artiste": "Inconnu",
    "date": "XIXe siècle",
    "origine": "Côte d’Ivoire",
    "type": "Masque rituel",
    "materiaux": "Bois sculpté",
    "description": {
      "fr": "Masque utilisé lors de cérémonies...",
      "en": "Mask used during ceremonies...",
      "wo": "Mask bi ci daan na ci waxtaan yi..."
    },
    "image": "/images/baoule.jpg",
    "audio": "/audio/baoule-fr.mp3"
  },
  {
    "id": "2",
    "titre": "Statuette Dogon",
    "artiste": "Inconnu",
    "date": "XVIIIe siècle",
    "origine": "Mali",
    "type": "Sculpture",
    "materiaux": "Bronze",
    "description": {
      "fr": "Statuette représentant un ancêtre Dogon...",
      "en": "Statue representing a Dogon ancestor...",
      "wo": "Statue bu mujj ci askan Dogon..."
    },
    "image": "/images/dogon.jpg",
    "audio": "/audio/dogon-fr.mp3"
  }
]
oeuvres.forEach((o) => {
  QRCode.toFile(
    `./public/qrcodes/${o.id}.png`,
    o.url,
    {
      color: { dark: "#000000", light: "#ffffff" },
      width: 300
    },
    (err) => {
      if (err) throw err;
      console.log(`QR Code généré pour ${o.titre}`);
    }
  );
});
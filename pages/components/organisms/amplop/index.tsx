import React from "react";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";

export default function Amplop() {
  return (
    <section id="calon">
      <div className="containerssa">
        <div className="card-container">
          <div className="card-amp">
            <div className="text-undangan">
              <p className="deskripsi">
                Merupakan kehormatan & kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
                kepada kedua mempelai. Atas kehadiran dan do’a restunya kami
                sampaikan banyak terima kasih.
              </p>
              <p className="kami-yang-berbahagia">Kami yang berbahagia,</p>
            </div>

            <div className="foto-pasangan">
              <Image
                src="/img/s.jpg"
                className="rounded-circle pasangan-img"
                width={100}
                height={100}
                alt="Trias & Zulfa"
              />
            </div>

            <div className="nama-pasangan">
              <p>trias & zulfa</p>
            </div>

            <div className="keluarga-container">
              <div className="keluarga">
                <h3>Keluarga Besar Pria</h3>
                <p>Asep Sudrajat & Upi</p>
                <p>Keluarga Besar Sudrajat</p>
              </div>

              <div className="keluarga">
                <h3>Keluarga Besar Wanita</h3>
                <p>Cartab & Dewi Komalasari</p>
                <p>Keluarga Besar Cartab</p>
              </div>
            </div>

            <div className="btn-container">
              <button className="btn-kirim">Kirim Hadiah</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

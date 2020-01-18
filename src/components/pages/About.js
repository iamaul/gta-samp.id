import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <div className="col-md-6">
                <Link to="/" className="btn btn-link">
                    <i className="fas fa-arrow-circle-left"></i> Back
                </Link>
            </div>
            
            <div className="container">
                <div className="card border-2 shadow my-5">
                    <div className="card-body p-5">
                    <h1 className="font-weight-light">SA-MP</h1>
                    <p className="lead text-justify">
                        <b>San Andreas Multiplayer (SAMP)</b> adalah mod multiplayer untuk Grand Theft Auto: San Andreas versi client Microsoft Windows yang menambahkan kemampuan untuk bermain multiplayer melalui Internet maupun LAN.
                        SA-MP bermula dari mod multiplayer dari GTA: Vice City yaitu Vice City Multiplayer (VC:MP) yang berawal pada April 2005. Diputuskan bahwa VC:MP akan dikerjakan sebagai basis kode utama untuk SA:MP, karena game San Andreas belum dirilis pada saat tim mulai mengembangkannya. 
                        Tim ini terdiri dari beberapa anggota komunitas modding GTA yang terkenal, dan dipimpin oleh kyeman.
                        Setelah melakukan percobaan beta testing, mod ini mendapat jumlah minat yang sangat tinggi (begitu tinggi sehingga menunggu sangat lama untuk mendapatkan pengumuman slot pada server beta) dan pada akhirnya saat itu VC:MP dirilis juga dan mendapat sambutan yang sanga baik. 
                        Sejak saat itu pengembangan dari v0.1 beralih ke v0.1d, dan perilisan kode sumber terbuka masih dalam tahap proses. 
                        Kode sumber ini sekarang telah digunakan oleh anggota komunitas lain untuk maju dengan VC:MP sebagai basis utama dalam pengembangan SA:MP. <br />
                        <a
                            href='https://id.wikipedia.org/wiki/San_Andreas_Multiplayer'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sumber
                        </a>
                        <br />
                        <br />
                        <b>Cara Bermain</b>:
                        <ul>
                            <u>Pastikan</u> kalian sudah menginstal Grand Theft Auto: San Andreas di komputer. Lalu ikuti langkah berikut untuk menginstal <i>client</i> SA-MP:
                            <ul>
                                <i className="fas fa-download"></i> <b>SA-MP Client</b>:
                                <li>
                                    <span className="badge badge-secondary">0.3.7</span> <a href="http://files.sa-mp.com/sa-mp-0.3.7-R3-1-install.exe">Unduh</a> <br />
                                </li> 
                                <li>    
                                    <span className="badge badge-info">0.3.DL</span> <a href="http://files.sa-mp.com/sa-mp-0.3.DL-R1-install.exe">Unduh</a>
                                </li>
                            </ul>
                        </ul>
                    </p>
                    <hr />
                    <h1 className="font-weight-light">gta-samp.id</h1>
                    <p className="lead text-justify">
                        Stand-alone website yang menyajikan daftar server khususnya komunitas Indonesia pada mod GTA San Andreas yaitu SA-MP. Tujuan website ini dibuat untuk menjadi wadah tempat bermain para <i>Players</i> yang ingin mencari komunitas SA:MP Server Indonesia,
                         demi bersatunya komunitas SA-MP Indonesia yang mulai saat ini sangat berkembang pesat.
                    </p>
                    <p className="lead mb-0"><mark>Kontak: agit@gta-samp.id</mark></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

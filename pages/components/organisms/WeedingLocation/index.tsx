import React from "react";
import { MdDateRange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsClock } from "react-icons/bs";

export default function WeedingLocation() {
  return (
    <div className="section w-details-area center-text" id="weddingDate">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2 className="section-titles">Save The Date</h2>
            <h3 className="card-title">Akad Nikah</h3>
            <h3 className="card-titla">
              Insya Allah rangkaian acara akan diselenggarakan pada :
            </h3>
            <div className="save-the-date">
              <span className="day">Minggu</span>
              <div className="date-container">
                <span className="date">28</span>
                <hr className="date-line" />
              </div>
              <span className="month">September</span>
              <span className="year">2025</span>
            </div>
            <div className="event-detail">
            </div>
            <div className="event-detail">
              <h4>08.00 s.d 10.00 WIB</h4>
            </div>
            <div className="event-detail">
              <h4>Jl. Pangeran Cakrabuana No.102, Sendang, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Walimah</h3>
            <div className="event-detail">
              <div className="save-the-date">
                <span className="day">Minggu</span>
                <div className="date-container">
                  <span className="date">28</span>
                  <hr className="date-line" />
                </div>
                <span className="month">September</span>
                <span className="year">2025</span>
              </div>
            </div>
            <div className="event-detail">
              <h4>12.00 s.d 15.00 WIB</h4>
            </div>
            <div className="event-detail">
              <h4>Jl. Pangeran Cakrabuana No.102, Sendang, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

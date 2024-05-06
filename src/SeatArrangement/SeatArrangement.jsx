import React, { useState, useEffect } from "react";
import "./SeatArrangement.css";
import axios from "axios";

const SeatArrangement = () => {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(80);
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/events").then((res) => {
      const data = res.data[0]; // Assuming there is only one event
      setRows(data.rows);
      setColumns(data.columns);
    });
  }, []);

  const renderSeats = () => {
    const seats = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        const seatNumber = String.fromCharCode(65 + i) + (j + 1);
        const isSelected = selectedSeats.some(seat => seat.seatNumber === seatNumber); // Check if seat is selected
        row.push(
          <div 
            key={`${i}-${j}`} 
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
      seats.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }
    return seats;
  };

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prev) => {
      if (prev.some(seat => seat.seatNumber === seatNumber)) {
        return prev.filter((seat) => seat.seatNumber !== seatNumber);
      } else {
        return [...prev, {
          seatNumber,
          status: "booked",
          price: "200",
          name: "Rajesh",
          email: "rajesh@gmail.com",
          phone: "1234567890",
          bookingId: "123456"
        }];
      }
    });
  };

  const handleBookTickets = () => {
    axios.patch("http://localhost:3001/events/1", { bookedSeats: selectedSeats })
      .then((res) => {
        console.log("Tickets booked successfully:", res.data);
      })
      .catch((error) => {
        console.error("Error booking tickets:", error);
      });
  };

  return (
    <div className="SeatArrangementMain">
      <div className="seatContainer">{renderSeats()}</div>
      <button className="bookingBtn" onClick={handleBookTickets}>Book Tickets</button>
    </div>
  );
};

export default SeatArrangement;

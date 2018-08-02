export let flightsImitation = [
  {
    time: "13:12",
    flight: "D 312",
    airport: "CDG",
    type: "departure",
    status: "ON TIME",
    city: "Paris"
  },
  {
    time: "17:00",
    flight: "R 256",
    airport: "LHR",
    type: "arrival",
    status: "ON TIME",
    city: "London"
  },
  {
    time: "09:45",
    flight: "AA 17",
    airport: "JFK",
    type: "departure",
    status: "ON TIME",
    city: "New York"
  },
  {
    time: "21:12",
    flight: "S 47",
    airport: "LHR",
    type: "arrival",
    status: "ON TIME",
    city: "London"
  },
  {
    time: "21:12",
    flight: "TU 98",
    airport: "HRG",
    type: "arrival",
    status: "DELAYED",
    city: "Hurghada"
  },
  {
    time: "21:12",
    flight: "D 123",
    airport: "LAX",
    type: "departure",
    status: "DELAYED",
    city: "Los-Angeles"
  },
  {
    time: "12:06",
    flight: "AA 241",
    airport: "JFK",
    type: "arrival",
    status: "ON TIME",
    city: "New York"
  },
  {
    time: "15:34",
    flight: "F 31",
    airport: "LAX",
    type: "departure",
    status: "DELAYED",
    city: "Los-Angeles"
  },
  {
    time: "07:37",
    flight: "TE 657",
    airport: "BUD",
    type: "departure",
    status: "ON TIME",
    city: "Budapest"
  },
  {
    time: "18:03",
    flight: "PAN 210",
    airport: "BUD",
    type: "arrival",
    status: "ON TIME",
    city: "Budapest"
  },
  {
    time: "20:45",
    flight: "TE 15",
    airport: "BUD",
    type: "departure",
    status: "DELAYED",
    city: "Budapest"
  },
  {
    time: "22:55",
    flight: "HB 21",
    airport: "CDG",
    type: "arrival",
    status: "ON TIME",
    city: "Paris"
  },
  {
    time: "12:20",
    flight: "BA 34",
    airport: "LHR",
    type: "departure",
    status: "DELAYED",
    city: "London"
  },
  {
    time: "08:55",
    flight: "GH 743",
    airport: "PRG",
    type: "departure",
    status: "ON TIME",
    city: "Prague"
  },
  {
    time: "10:10",
    flight: "TE 634",
    airport: "LIS",
    type: "arrival",
    status: "DELAYED",
    city: "Lisbon"
  },
  {
    time: "03:25",
    flight: "AE 118",
    airport: "PRG",
    type: "arrival",
    status: "ON TIME",
    city: "Prague"
  },
  {
    time: "14:30",
    flight: "TE 185",
    airport: "LIS",
    type: "arrival",
    status: "ON TIME",
    city: "Lisbon"
  },
  {
    time: "17:05",
    flight: "BA 560",
    airport: "LHR",
    type: "departure",
    status: "ON TIME",
    city: "London"
  },
  {
    time: "21:40",
    flight: "TE 631",
    airport: "PRG",
    type: "arrival",
    status: "DELAYED",
    city: "Prague"
  },
  {
    time: "06:30",
    flight: "PAN 814",
    airport: "LIS",
    type: "departure",
    status: "ON TIME",
    city: "Lisbon"
  },
  {
    time: "23:15",
    flight: "CA 11",
    airport: "PRG",
    type: "departure",
    status: "ON TIME",
    city: "Prague"
  },
  {
    time: "13:10",
    flight: "AP 30",
    airport: "LIS",
    type: "arrival",
    status: "ON TIME",
    city: "Lisbon"
  },
  {
    time: "19:45",
    flight: "TS 89",
    airport: "MAD",
    type: "arrival",
    status: "ON TIME",
    city: "Madrid"
  },
  {
    time: "18:19",
    flight: "IA 318",
    airport: "TRN",
    type: "departure",
    status: "ON TIME",
    city: "Turin"
  },
  {
    time: "16:00",
    flight: "TA 42",
    airport: "TRN",
    type: "departure",
    status: "ON TIME",
    city: "Turin"
  },
  {
    time: "15:58",
    flight: "SA 774",
    airport: "MAD",
    type: "arrival",
    status: "DELAYED",
    city: "Madrid"
  },
  {
    time: "14:24",
    flight: "IA 456",
    airport: "TRN",
    type: "arrival",
    status: "DELAYED",
    city: "Turin"
  },
  {
    time: "22:05",
    flight: "TE 249",
    airport: "MAD",
    type: "departure",
    status: "ON TIME",
    city: "Madrid"
  }
];

export function getData(fn) {
  setTimeout(() => {
    return fn(flightsImitation);
  }, 1200);
}

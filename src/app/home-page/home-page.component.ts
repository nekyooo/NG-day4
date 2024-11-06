import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
destinations: {name: string, country: string, price: number, desc: string, duration: number, imgURL?: string}[] =
[
  {
    name: "San José",
    country: "Costa Rica",
    price: 1749,
    desc: "The capital San José, spectacular Arenal and its volcano, 3 relaxing days in Playa Hermosa; travel on your own with flights & hotel included. Optional pre-tour to Tortuguero.",
    duration: 7,
    imgURL: "https://res.cloudinary.com/friendly-planet/image/fetch/q_auto,f_auto,w_480,h_240,c_lfill/https://m.friendlyplanet.com/media/gallery/central_america/costa_rica/arenal-volcano-erupting.640x320.bmp"
  },
  {
    name: "Athens",
    country: "Greece",
    price: 2349,
    desc: "Ancient Athens, then a 3 day cruise to Mykonos, Kusadasi, Ephesus, Patmos, Santorini & Crete; independent adventure with flights & hotel included. Optional Classical Greece extension.",
    duration: 8,
    imgURL: "https://res.cloudinary.com/friendly-planet/image/fetch/q_auto,f_auto,w_480,h_240,c_lfill/https://m.friendlyplanet.com/media/gallery/europe/greece/mykonos-town-seaside.640x320.jpg"
  },
  {
    name: "Paris and Normandy",
    country: "France",
    price: 3699,
    desc: "7 night Paris & Normandy River cruise with shore excursions; optional 2 nights Paris Pre-cruise extension",
    duration: 9,
    imgURL: "https://res.cloudinary.com/friendly-planet/image/fetch/q_auto,f_auto,w_480,h_240,c_lfill/https://m.friendlyplanet.com/media/gallery/europe/france/seine-river-ama-lyra.640x320.bmp"
  },
  {
    name: "Dubai",
    country: "India",
    price: 3499,
    desc: "Exhilarating Dubai plus explore the lost empires of India in Delhi, Agra, the Taj Mahal, and the pink city of Jaipur; Optional Extension to Nepal",
    duration: 12,
    imgURL: "https://res.cloudinary.com/friendly-planet/image/fetch/q_auto,f_auto,w_480,h_240,c_lfill/https://m.friendlyplanet.com/media/gallery/asia/india/delhi-jama-masjid-birds.640x320.bmp"
  },
]
}

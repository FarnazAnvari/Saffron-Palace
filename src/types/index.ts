// Menu
export interface MenuItem {
  name: string;
  description: string;
  price: number;
  tag?: "Popular" | "Chef's Choice" | "Vegan" | "New";
}

export interface MenuCategory {
  title: string;
  arabicTitle?: string;
  items: MenuItem[];
}

// Reservation
export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

// Contact
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

"use client";

import { useState } from "react";

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="flex flex-col bg-background">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-[600px] h-[600px] rounded-full border border-gold" />
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Reserve Your Table
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream italic">
            Reservations
          </h1>
          <div className="w-16 h-px bg-gold/60 mt-6" />
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Confirmed
              </p>
              <h2 className="font-display text-4xl text-cream italic mb-4">
                Thank you, {form.name}
              </h2>
              <p className="font-body text-cream/50 text-sm">
                We have received your reservation request. Our team will confirm
                your booking via email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field
                  label="Full Name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gold/20 text-cream font-body text-sm py-2 outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                  >
                    {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                      <option key={n} value={n} className="bg-background">
                        {n} {n === "1" ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field
                  label="Date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60">
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="bg-transparent border-b border-gold/20 text-cream font-body text-sm py-2 outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-background">
                      Select a time
                    </option>
                    {[
                      "12:00",
                      "12:30",
                      "13:00",
                      "13:30",
                      "19:00",
                      "19:30",
                      "20:00",
                      "20:30",
                      "21:00",
                      "21:30",
                    ].map((t) => (
                      <option key={t} value={t} className="bg-background">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60">
                  Special Requests
                </label>
                <textarea
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Dietary requirements, occasions, seating preferences..."
                  className="bg-transparent border-b border-gold/20 text-cream font-body text-sm py-2 outline-none focus:border-gold transition-colors duration-300 resize-none placeholder:text-cream/20"
                />
              </div>

              <button type="submit" className="btn-gold mt-4">
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

// Reusable field component
function Field({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent border-b border-gold/20 text-cream font-body text-sm py-2 outline-none focus:border-gold transition-colors duration-300 placeholder:text-cream/20"
      />
    </div>
  );
}

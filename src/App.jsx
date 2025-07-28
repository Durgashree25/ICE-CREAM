// App.jsx
import React from "react";
import "./App.css"; // CSS must be present
import iceCreamImage from "./dashboard.png"; // Replace with your image name
import vanillaImg from "./vanilla.png";
import chocolateImg from "./chocolate.png";
import strawberryImg from "./strawberry.png";
import mangoImg from "./mango.png";
import pistachio from "./pistachio.png";
import blueberry from "./blueberry.png";

// 🍦 Inline FlavorSlider Component
function FlavorSlider() {
  const flavors = [
    { name: "🍦 Vanilla Bean Bliss", img: vanillaImg },
    { name: "🍫 Chocolate Thunder", img: chocolateImg },
    { name: "🍓 Strawberry Dream", img: strawberryImg },
    { name: "🥭 Mango Tango", img: mangoImg },
   { name: "🍐 Nutty Pistachio", img: pistachio },
    { name: "🫐 Delight BlueBerry", img: blueberry}
      ];

  return (
    <section id="flavors" className="section">
      <h2>Our Flavors</h2>
      <div className="flavor-gallery">
        {flavors.map((flavor, index) => (
          <div key={index} className="flavor-card">
            <img src={flavor.img} alt={flavor.name} />
            <p>{flavor.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 🍨 Main App
export default function IceCreamLanding() {
  return (
    <div className="page" style={{ backgroundColor: '#ffffff' }}>
      <header className="header">
        <div className="logo">🍦 ChillCream</div>
        <nav className="nav">
          <a href="#flavors">Flavors</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <img src={iceCreamImage} alt="Ice Cream UI" className="hero-image" />
        <h1 className="title">Scoop into Sweetness 🍨</h1>
        <p className="subtitle">
          A delightful way to explore flavors, order online, and enjoy the creamy magic of ChillCream.
        </p>
        <button className="cta-btn">Sign up for free</button>
      </main>

      <FlavorSlider />

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          At ChillCream, we believe ice cream is more than dessert — it's a celebration of life! 
          From sourcing fresh ingredients to crafting unique flavors, our mission is to spread joy one scoop at a time.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Got questions or sweet feedback? We'd love to connect.</p>
        <p>Email: hello@chillcream.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Location: 123 Scoop Street, Dessert City, Sweetland</p>
      </section>

      <footer className="footer">
        © 2025 ChillCream. All rights reserved.
      </footer>
    </div>
  );
}

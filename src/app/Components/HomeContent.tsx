import React from "react";

const HomeContent = () => {
  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div>
          <h1 className="fade-in">Welcome to Rolex Watches</h1>
          <p>Your one-stop shop for the best watches</p>
          <button>Shop now</button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;

"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            We are a passionate team dedicated to building seamless digital
            experiences. Our mission is to bring creativity and technology
            together for a better future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To craft user-friendly solutions that empower businesses and
            individuals, making their digital presence impactful and efficient.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mission"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-gray-600 mt-3">
            The people behind our vision and success.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Alice Johnson", role: "CEO", img: "https://i.pravatar.cc/200?img=47" },
            { name: "Brian Smith", role: "CTO", img: "https://i.pravatar.cc/200?img=52" },
            { name: "Sophia Lee", role: "Designer", img: "https://i.pravatar.cc/200?img=56" },
          ].map((person, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold text-lg">{person.name}</h4>
              <p className="text-gray-500">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-pink-500 to-orange-500 text-white">
        <h2 className="text-4xl font-extrabold mb-6">Let’s Work Together</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Ready to build something amazing? Join us in shaping the future with
          innovative solutions.
        </p>
        <button className="px-8 py-4 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}

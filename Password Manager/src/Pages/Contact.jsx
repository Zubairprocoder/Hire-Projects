import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({ username: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load saved messages
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(saved);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.message) {
      toast.error("Please fill all fields!", { position: "top-center" });
      return;
    }

    let updatedMessages;
    if (editId) {
      updatedMessages = messages.map((msg) =>
        msg.id === editId ? { ...form, id: editId } : msg
      );
      toast.success("Message updated successfully!", { position: "top-center" });
      setEditId(null);
    } else {
      const newMsg = { ...form, id: Date.now() };
      updatedMessages = [...messages, newMsg];
      toast.success("Message sent successfully!", { position: "top-center" });
    }

    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
    setForm({ username: "", email: "", message: "" });
  };

  // Handle Edit
  const handleEdit = (msg) => {
    setForm({ username: msg.username, email: msg.email, message: msg.message });
    setEditId(msg.id);
    toast.success("Message Editing successfully!", { position: "top-center" });
    setEditId(null);
  };

  // Handle Delete
  const handleDelete = (id) => {
    const updated = messages.filter((msg) => msg.id !== id);
    setMessages(updated);
    localStorage.setItem("messages", JSON.stringify(updated));
    toast.success("Message deleted!", { position: "top-center" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-12">
      <ToastContainer />

      {/* Intro Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Contact Zubair Pro Coder
        </h1>
        <p className="text-lg text-gray-700">
          Hi 👋 I'm <span className="font-semibold text-blue-500">Zubair</span>,
          a passionate Frontend Developer specializing in React, Next.js,
          Tailwind CSS, and Firebase. I love creating fast, user-friendly, and
          modern web applications that solve real-world problems.
        </p>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          {editId ? "Edit Your Message" : "Send Me a Message"}
        </h2>

        {/* === Contact Form === */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow-md"
        >
          {/* === Name Field === */}
          <div className="relative">
            <input
              type="text"
              name="username"
              placeholder=" "
              value={form.username}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-text"
              required
            />
            <label
              className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600 cursor-text"
            >
              Your Name
            </label>
          </div>

          {/* === Email Field === */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-text"
              required
            />
            <label
              className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600 cursor-text"
            >
              Your Email
            </label>
          </div>

          {/* === Message Field === */}
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              placeholder=" "
              value={form.message}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none cursor-text"
              required
            ></textarea>
            <label
              className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600 cursor-text"
            >
              Your Message
            </label>
          </div>

          {/* === Submit Button === */}
          <button
            type="submit"
            className={`w-full ${editId ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"
              } text-white font-semibold py-2 rounded-md transition cursor-pointer`}
          >
            {editId ? "Update Message" : "Send Message"}
          </button>
        </form>

        {/* === Messages List === */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3 text-center">
            Submitted Messages
          </h2>

          {messages.length === 0 ? (
            <p className="text-gray-500 text-sm text-center">No messages yet.</p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) =>
                editId === msg.id ? null : ( // hide when editing
                  <div
                    key={msg.id}
                    className="bg-white border border-purple-200 shadow-sm rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 transition hover:shadow-md"
                  >
                    <div className="flex flex-col space-y-1 w-full md:w-3/4 gap-2  md:items-start">
                      <p className="text-gray-800 text-sm flex items-center gap-2 font-semibold">
                        <FaUser className="text-purple-600" /> {msg.username}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-purple-700">Email:</span>{" "}
                        {msg.email}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-purple-700">Message:</span>{" "}
                        {msg.message}
                      </p>
                    </div>

                    {/* === Actions === */}
                    <div className="flex items-center justify-end gap-3 text-purple-600">
                      <button
                        onClick={() => handleEdit(msg)}
                        className="hover:text-purple-800 transition cursor-pointer"
                      >
                        <FaEdit size={22} />
                      </button>
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="hover:text-red-600 transition cursor-pointer"
                      >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

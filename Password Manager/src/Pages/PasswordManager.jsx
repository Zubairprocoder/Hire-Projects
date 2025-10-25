import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { FaCheckSquare, FaRegSquare, FaTrash } from "react-icons/fa";
const PasswordManager = () => {
  const [passwords, setPasswords] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const [form, setForm] = useState({ site: "", username: "", password: "" });

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const savedPasswords = localStorage.getItem("passwords");
    try {
      if (
        savedPasswords &&
        savedPasswords !== "undefined" &&
        savedPasswords !== "null"
      ) {
        setPasswords(JSON.parse(savedPasswords));
      }
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      localStorage.removeItem("passwords");
    } finally {
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("passwords", JSON.stringify(passwords));
    }
  }, [passwords, initialized]);

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      // Agar already select ho, to deselect karo
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      // Nahi to select karo
      setSelectedIds([...selectedIds, id]);
    }
  };
  // ✅ Select / Deselect All
  const handleSelectAll = () => {
    if (selectedIds.length === passwords.length) {
      setSelectedIds([]); // deselect all
    } else {
      setSelectedIds(passwords.map((item) => item.id)); // select all
    }
  };
  const handleDeleteSelected = () => {
    const updated = passwords.filter((item) => !selectedIds.includes(item.id));
    setPasswords(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
    setSelectedIds([]);
    toast.success(`${selectedIds.length} password(s) deleted!`, {
      position: "top-center",
      autoClose: 1500,
    });
  };

  // ✅ Handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Add new password
  const handleSave = (e) => {
    e.preventDefault();

    // Check all fields are filled & min length 4
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      // 🆔 Create password entry with unique id
      const newPassword = { ...form, id: uuidv4() };

      // 📦 Update state and localStorage together
      const updated = [...passwords, newPassword];
      setPasswords(updated);
      localStorage.setItem("passwords", JSON.stringify(updated));

      // 🔄 Reset form
      setForm({ site: "", username: "", password: "" });

      toast.success("Password added successfully!", {
        position: "top-center",
        autoClose: 1500,
      });
    } else {
      toast.error("Please fill all fields with at least 4 characters!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  // ✅ Delete password
  const handleDelete = (index, id) => {
    console.log("Deleting password with id ", id);
    const updated = passwords.filter((_, i) => i !== index);
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwords.filter((item) => item.id !== id))
    );
    setPasswords(updated);
    toast.error("Password deleted!", {
      position: "top-center",
      autoClose: 1500,
    });
  };

  // ✅ Edit password
  const handleEdit = (index, id) => {
    console.log("Editing password with id ", id);
    setForm(passwords.filter((item) => item.id === id)[0]);
    setPasswords(passwords.filter((item) => item.id !== id));
    toast.info("Editing password...", {
      position: "top-center",
      autoClose: 1500,
    });
  };

  // ✅ Copy password
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Password copied to clipboard!", {
      position: "top-center",
      autoClose: 1500,
    });
  };

  return (
    <>
      <div className="mx-auto w-full container bg-white rounded-lg shadow-lg p-8 mt-10">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            Pass
          </span>
          <span className="text-purple-700">🔒Vault</span>
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSave}
          className="mb-3 text-sm mx-auto w-full container"
        >
          <p className="text-green-700 text-center text-lg mb-3">
            Your own Password Manager
          </p>

          <div className="grid md:grid-cols-1 gap-4 mb-4">
            {/* Website */}
            <div className="relative">
              <input
                required
                type="text"
                name="site"
                value={form.site}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md px-3 pt-8 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <label
                htmlFor="site"
                className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600"
              >
                Website / App Name
              </label>
            </div>

            {/* Username */}
            <div className="relative">
              <input
                required
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md px-3 pt-8 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <label
                htmlFor="username"
                className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600"
              >
                Username / Email
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                required
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md px-3 pt-8 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600"
              >
                Password
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            >
              Add Password
            </button>
          </div>
        </form>

        {/* Saved Passwords */}
        <div className="bg-green-100 rounded-lg p-6 shadow-inner mt-6 w-full">
          <h3 className="text-xl font-bold text-green-700 mb-4 text-center">
            <lord-icon
              src="https://cdn.lordicon.com/hmpomorl.json"
              trigger="hover"
              className="inline-block p-1"
              style={{ width: "33px", height: "33px" }}
            ></lord-icon>{" "}
            Saved Passwords
          </h3>

          {passwords.length === 0 ? (
            <p className="text-gray-600 text-sm text-center">
              No passwords saved yet.
            </p>
          ) : (
            <>
              {/* ✅ Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                {/* Multi-select delete icon */}
                <div className="flex justify-around items-center mb-2 mx-auto">
                  <lord-icon
                    src="https://cdn.lordicon.com/jzinekkv.json"
                    trigger="hover"
                    onClick={handleDeleteSelected}
                    cl
                    style={{ width: "35px", height: "35px", cursor: selectedIds.length ? "pointer" : "not-allowed", opacity: selectedIds.length ? 1 : 0.5 }}
                  ></lord-icon>

                  {/* ✅ All Select Icon + Text */}
                  <button
                    onClick={handleSelectAll}
                    className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-md shadow hover:bg-green-600 transition"
                  >
                    {selectedIds.length === passwords.length && passwords.length > 0 ? (
                      <FaCheckSquare size={18} />
                    ) : (
                      <FaRegSquare size={18} />
                    )}
                    <span>All</span>
                  </button>
                </div>
                <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md border border-green-300">
                  <thead className="bg-green-200 text-green-800 font-semibold border-b-2 border-green-300">
                    <tr className="text-center text-sm md:text-md">
                      <th className="py-2 px-2 border-r border-green-300">
                        Website Name
                      </th>
                      <th className="py-2 px-2 border-r border-green-300">
                        Email / Username
                      </th>
                      <th className="py-2 px-2 border-r border-green-300">
                        Password
                      </th>
                      <th className="py-2 px-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {passwords.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-green-200 transition text-center text-sm md:text-base 
    ${selectedIds.includes(item.id) ? "bg-green-200" : "hover:bg-green-100"}`}
                        onClick={() => handleSelect(item.id)} // optional click for selection
                      >
                        <td className="py-2 px-2 border-r border-green-200 text-green-700 font-semibold break-words underline  flex items-center jusitfy-around gap-2">
                          <input
                            type="checkbox"
                            className="w-3 h-3    " // 10px se thoda bada, responsive
                            checked={selectedIds.includes(item.id)}
                            onChange={() => handleSelect(item.id)}
                          />
                          <Link
                            to={`https://www.${item.site.trim()}.com`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.site}
                          </Link>
                        </td>

                        <td className="py-2 px-2 border-r border-green-200 text-gray-700 break-words">
                          {item.username}
                        </td>

                        <td className="py-2 px-2 border-r border-green-200">
                          <div className="flex items-center justify-center gap-2">
                            <input
                              type={show ? "text" : "password"}
                              value={item.password}
                              readOnly
                              className="outline-none bg-transparent text-gray-700 w-24 md:w-32 font-mono text-sm text-center"
                            />
                            <button
                              onClick={() => setShow(!show)}
                              className="cursor-pointer hover:scale-110 transition"
                            >
                              {show ? (
                                <lord-icon
                                  src="https://cdn.lordicon.com/dicvhxpz.json"
                                  trigger="hover"
                                  style={{ width: "28px", height: "28px" }}
                                ></lord-icon>
                              ) : (
                                <lord-icon
                                  src="https://cdn.lordicon.com/dnoiydox.json"
                                  trigger="hover"
                                  className="inline-block p-1 "
                                  style={{ width: "28px", height: "28px" }}
                                ></lord-icon>
                              )}
                            </button>
                            <button
                              onClick={() => handleCopy(item.password)}
                              className="text-blue-600 hover:text-blue-800 cursor-pointer hover:scale-110 transition"
                            >
                              <FaCopy size={20} />
                            </button>
                          </div>
                        </td>

                        <td className="py-2 px-2 flex items-center justify-center gap-5">
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            onClick={() => handleEdit(index, item.id)}
                            style={{
                              width: "25px",
                              height: "25px",
                              cursor: "pointer",
                            }}
                          ></lord-icon>

                          <lord-icon
                            src="https://cdn.lordicon.com/jzinekkv.json"
                            trigger="hover"
                            onClick={() => handleDelete(index, item.id)}
                            style={{
                              width: "25px",
                              height: "25px",
                              cursor: "pointer",
                            }}
                          ></lord-icon>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ✅ Mobile Card View */}
              <div className="md:hidden flex flex-col gap-4">
                {/* Multi-select delete icon */}
                <div className="flex justify-center mb-2 mx-auto">
                  <lord-icon
                    src="https://cdn.lordicon.com/jzinekkv.json"
                    trigger="hover"
                    onClick={handleDeleteSelected}
                    cl
                    style={{ width: "28px", height: "28px", cursor: selectedIds.length ? "pointer" : "not-allowed", opacity: selectedIds.length ? 1 : 0.5 }}
                  ></lord-icon>
                </div>
                {passwords.map((item, index) => (

                  <div
                    key={index}
                    className={`border-b p-3 rounded-md border-green-200 transition text-center text-sm md:text-base 
    ${selectedIds.includes(item.id) ? "bg-green-200" : "bg-white hover:bg-green-100"}`}
                    onClick={() => handleSelect(item.id)} // optional click for selection
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                    />

                    <p className="text-green-700 font-semibold break-words py-1.5 text-start ">
                      <span className="font-bold">Website :</span>{" "}
                      <Link
                        to={`https://www.${item.site.trim()}.com`}
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.site}
                      </Link>
                    </p>
                    <p className="text-gray-700 break-words mt-2 text-start">
                      <span className="font-bold text-blue-600">Username : </span>{" "}
                      {item.username}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-gray-700 font-mono text-sm">
                        <span className="font-bold text-blue-600">Password :</span>{" "}
                        {show ? item.password : "••••••••"}
                      </p>
                      <div className="flex items-center gap-3">
                        <button onClick={() => setShow(!show)}>
                          {show ? (
                            <lord-icon
                              src="https://cdn.lordicon.com/dicvhxpz.json"
                              trigger="hover"
                              style={{ width: "24px", height: "24px" }}
                            ></lord-icon>
                          ) : (
                            <lord-icon
                              src="https://cdn.lordicon.com/dnoiydox.json"
                              trigger="hover"
                              className="inline-block p-1"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          )}
                        </button>
                        <button onClick={() => handleCopy(item.password)}>
                          <FaCopy size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-around items-center gap-5 mt-2">
                      <p className="text-blue-600 font-bold">Actions :</p>
                      <lord-icon
                        src="https://cdn.lordicon.com/exymduqj.json"
                        trigger="hover"
                        onClick={() => handleEdit(index, item.id)}
                        style={{
                          width: "22px",
                          height: "22px",
                          cursor: "pointer",
                        }}
                      ></lord-icon>

                      <lord-icon
                        src="https://cdn.lordicon.com/jzinekkv.json"
                        trigger="hover"
                        onClick={() => handleDelete(index, item.id)}
                        style={{
                          width: "22px",
                          height: "22px",
                          cursor: "pointer",
                        }}
                      ></lord-icon>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ✅ Single ToastContainer (keep only one) */}
      <ToastContainer />
    </>
  );
};

export default PasswordManager;

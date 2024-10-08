"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Nav } from "@/app/component/navbar/nav";
import { BACKEND_URL } from "@/config";

const Home = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    language: "",
    trailerUrl: "",
    genre: [],
    director: "",
    duration: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "genre") {
      setFormData({
        ...formData,
        genre: value.split(",").map((g:string) => g.trim()), 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/movie/add-movie`,
        formData
      );
      console.log(response.data);
      alert("Movie added successfully!");
      const id = response.data.id;
      console.log("id is ", id);
      console.log("Movie created successfully");
      push(`/movie/get/${id}`);
    } catch (error) {
      console.error("Error adding movie:", error);
      alert("Failed to add movie.");
    }
  };

  return (
    <div>
      <Nav/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add a New Movie</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Other input fields remain unchanged */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Language:</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Trailer URL:</label>
            <input
              type="text"
              name="trailerUrl"
              value={formData.trailerUrl}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Genre (comma separated):</label>
            <input
              type="text"
              name="genre"
              value={formData.genre.join(", ")} // Join array back to string for display
              onChange={handleChange}
              required
              placeholder="e.g., Action, Drama, Thriller"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Director:</label>
            <input
              type="text"
              name="director"
              value={formData.director}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Duration (in minutes):</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Home;

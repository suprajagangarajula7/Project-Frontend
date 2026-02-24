import { useState } from "react";
import { createCapsule } from "../services/api";

function CapsuleForm({ refreshCapsules }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    unlock_date: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  try {
    const formattedData = {
      ...formData,
      unlock_date: new Date(formData.unlock_date).toISOString(),
    };

    await createCapsule(formattedData);

    setStatus("Capsule created successfully 🎉");
    setFormData({
      title: "",
      description: "",
      content: "",
      unlock_date: "",
    });

    refreshCapsules();
  } catch (error) {
    setStatus("Error creating capsule ❌");
  }

  setLoading(false);
};

  return (
    <div className="card">
      <h2>Create Capsule</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="Write your message..."
          value={formData.content}
          onChange={handleChange}
          required
        />

        <input
  type="datetime-local"
  name="unlock_date"
  value={formData.unlock_date}
  onChange={handleChange}
  required
/>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Capsule"}
        </button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default CapsuleForm;
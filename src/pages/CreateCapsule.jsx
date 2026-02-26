import { useState } from "react";
import { createCapsule } from "../services/api";

const CreateCapsule = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    unlock_date: "",
  });

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    formDataToSend.append(
      "unlock_date",
      new Date(formData.unlock_date).toISOString()
    );

    if (file) {
      formDataToSend.append("file", file); // ✅ correct key
    }

    await createCapsule(formDataToSend);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
      />

      <input
        type="date"
        value={formData.unlock_date}
        onChange={(e) =>
          setFormData({ ...formData, unlock_date: e.target.value })
        }
      />

      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) =>
          setFormData({ ...formData, content: e.target.value })
        }
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button type="submit">Create Capsule</button>
    </form>
  );
};

export default CreateCapsule;  // ✅ VERY IMPORTANT
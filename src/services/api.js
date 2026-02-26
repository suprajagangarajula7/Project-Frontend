const BASE_URL = "http://localhost:5000/api/capsule";

export const createCapsule = async (data) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: data, // ✅ don't stringify
  });

  if (!response.ok) {
    throw new Error("Failed to create capsule");
  }

  return response.json();
};

export const getCapsules = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch capsules");
  }

  return response.json();
};

export const deleteCapsule = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete capsule");
  }

  return response.json();
};
import { useEffect, useState } from "react";
import { getCapsules, deleteCapsule } from "../services/api";
import CapsuleCard from "../components/CapsuleCard";

function Memories() {
  const [capsules, setCapsules] = useState([]);

  const fetchCapsules = async () => {
    try {
      const data = await getCapsules();
      setCapsules(data);
    } catch (error) {
      console.error("Error fetching capsules");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCapsule(id);
      fetchCapsules(); // refresh after delete
    } catch (error) {
      console.error("Error deleting capsule");
    }
  };

  useEffect(() => {
    fetchCapsules();
  }, []);

  const isLocked = (unlockDate) => {
    return new Date(unlockDate) > new Date();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Memories</h2>

      {capsules.length === 0 ? (
        <p>No memories yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {capsules.map((capsule) => (
            <CapsuleCard
              key={capsule._id}
              capsule={capsule}
              isLocked={isLocked(capsule.unlock_date)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Memories;
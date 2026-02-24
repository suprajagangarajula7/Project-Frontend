import { useEffect, useState } from "react";
import CapsuleForm from "./components/CapsuleForm";
import CapsuleList from "./components/CapsuleList";
import { getCapsules } from "./services/api";
import "./index.css";

function App() {
  const [capsules, setCapsules] = useState([]);

  const fetchCapsules = async () => {
    try {
      const data = await getCapsules();
      setCapsules(data);
    } catch (error) {
      console.error("Error fetching capsules");
    }
  };

  useEffect(() => {
    fetchCapsules();
  }, []);

  return (
    <div className="container">
      <h1>⏳ Digital Time Capsule</h1>
      <CapsuleForm refreshCapsules={fetchCapsules} />
     <CapsuleList
  capsules={capsules}
  refreshCapsules={fetchCapsules}
/>
    </div>
  );
}

export default App;
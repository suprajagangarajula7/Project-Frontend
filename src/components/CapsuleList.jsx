function CapsuleList({ capsules, refreshCapsules }) {

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/capsule/${id}`, {
        method: "DELETE",
      });

      refreshCapsules(); // reload capsules after delete
    } catch (error) {
      console.error("Error deleting capsule:", error);
    }
  };

  return (
    <div className="card">
      <h2>All Capsules</h2>

      {capsules.length === 0 ? (
        <p>No capsules found.</p>
      ) : (
        capsules.map((capsule) => (
          <div key={capsule.id} className="capsule">
            <h3>{capsule.title}</h3>
            <p>{capsule.description}</p>
            <p>{capsule.content}</p>

            <small>
              Unlock Date: {new Date(capsule.unlock_date).toLocaleString()}
            </small>

            <br />

            <button
              onClick={() => handleDelete(capsule.id)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CapsuleList;
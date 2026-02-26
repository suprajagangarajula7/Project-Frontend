function CapsuleCard({ capsule, onDelete }) {
  const isLocked =
    new Date(capsule.unlock_date) > new Date();

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-2">
        {capsule.title}
      </h3>

      {isLocked ? (
        <div className="text-red-500 font-semibold">
          🔒 Locked until{" "}
          {new Date(
            capsule.unlock_date
          ).toDateString()}
        </div>
      ) : (
        <div>
          <p className="text-gray-600 mb-3">
            {capsule.description}
          </p>

          {capsule.media_urls?.map((url, i) => (
            <a
              key={i}
              href={`http://localhost:5000${url}`}
              target="_blank"
              className="text-blue-500 block"
            >
              View File
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => onDelete(capsule.id)}
        className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default CapsuleCard;
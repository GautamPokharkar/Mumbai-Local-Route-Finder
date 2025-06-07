import React, { useState } from "react";

const TrainTimings = () => {
  const [station, setStation] = useState("");
  const [showTable, setShowTable] = useState(false);

  // Dummy Train Timetable Data
  const trainSchedule = [
    { train: "Fast Express", time: "10:30 AM", platform: "1", status: "On Time" },
    { train: "Local Train", time: "11:00 AM", platform: "2", status: "Delayed" },
    { train: "Metro Express", time: "11:45 AM", platform: "3", status: "On Time" },
  ];

  const handleSearch = () => {
    if (station.trim() !== "") {
      setShowTable(true);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Train Timings</h2>

      {/* Input for station name */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={station}
          onChange={(e) => setStation(e.target.value)}
          placeholder="Enter station name"
          className="p-2 border rounded-lg w-64 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Get Trains
        </button>
      </div>

      {/* Display table only when search is done */}
      {showTable && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white">
              <tr>
                <th className="px-4 py-2 text-left">🚆 Train</th>
                <th className="px-4 py-2 text-left">🕒 Time</th>
                <th className="px-4 py-2 text-left">🛤 Platform</th>
                <th className="px-4 py-2 text-left">📢 Status</th>
              </tr>
            </thead>
            <tbody>
              {trainSchedule.map((train, index) => (
                <tr key={index} className="border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2">{train.train}</td>
                  <td className="px-4 py-2">{train.time}</td>
                  <td className="px-4 py-2">{train.platform}</td>
                  <td className={`px-4 py-2 font-semibold ${train.status === "Delayed" ? "text-red-500" : "text-green-500"}`}>
                    {train.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TrainTimings;

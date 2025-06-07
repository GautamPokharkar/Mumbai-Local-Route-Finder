import React, { useState } from "react";
import { findShortestPath, PathResponse } from "../api";

// Sample station list (replace with API data)
const stationsList = [
    "Andheri", "Bandra", "Borivali", "CST", "Churchgate", "Dadar", "Goregaon",
    "Kalyan", "Kurla", "Panvel", "Thane", "Vasai Road", "Vashi", "Virar"
];

const RouteSearch: React.FC = () => {
    const [departure, setDeparture] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [result, setResult] = useState<PathResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    // Separate suggestion states for each input
    const [departureSuggestions, setDepartureSuggestions] = useState<string[]>([]);
    const [destinationSuggestions, setDestinationSuggestions] = useState<string[]>([]);
    
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [activeField, setActiveField] = useState<"departure" | "destination" | null>(null);

    const filterSuggestions = (input: string) => {
        return input
            ? stationsList.filter(station =>
                station.toLowerCase().includes(input.toLowerCase())
            )
            : [];
    };

    const handleInputChange = (value: string, setState: React.Dispatch<React.SetStateAction<string>>, setSuggestions: React.Dispatch<React.SetStateAction<string[]>>, field: "departure" | "destination") => {
        setState(value);
        setSuggestions(filterSuggestions(value));
        setActiveField(field);
        setActiveIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>, suggestions: string[], setSuggestions: React.Dispatch<React.SetStateAction<string[]>>) => {
        if (e.key === "ArrowDown") {
            setActiveIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
            setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === "Enter" && activeIndex >= 0) {
            setState(suggestions[activeIndex]);
            setSuggestions([]);
            setActiveIndex(-1);
            setActiveField(null);
            e.preventDefault();
        }
    };

    const handleSuggestionClick = (station: string, setState: React.Dispatch<React.SetStateAction<string>>, setSuggestions: React.Dispatch<React.SetStateAction<string[]>>) => {
        setState(station);
        setSuggestions([]);
        setActiveField(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const data = await findShortestPath(departure, destination);
        if (data.error) {
            setError(data.error);
        } else {
            setResult(data);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
            <form onSubmit={handleSubmit}>
                {/* Departure Input */}
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Departure Station"
                        value={departure}
                        onChange={(e) => handleInputChange(e.target.value, setDeparture, setDepartureSuggestions, "departure")}
                        onKeyDown={(e) => handleKeyDown(e, setDeparture, departureSuggestions, setDepartureSuggestions)}
                        onFocus={() => setActiveField("departure")}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {activeField === "departure" && departureSuggestions.length > 0 && (
                        <ul className="absolute left-0 w-full bg-white border rounded shadow-md mt-1 z-10">
                            {departureSuggestions.map((station, index) => (
                                <li
                                    key={station}
                                    className={`p-2 cursor-pointer ${index === activeIndex ? "bg-gray-200" : ""}`}
                                    onMouseDown={() => handleSuggestionClick(station, setDeparture, setDepartureSuggestions)}
                                >
                                    {station}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Destination Input */}
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Destination Station"
                        value={destination}
                        onChange={(e) => handleInputChange(e.target.value, setDestination, setDestinationSuggestions, "destination")}
                        onKeyDown={(e) => handleKeyDown(e, setDestination, destinationSuggestions, setDestinationSuggestions)}
                        onFocus={() => setActiveField("destination")}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {activeField === "destination" && destinationSuggestions.length > 0 && (
                        <ul className="absolute left-0 w-full bg-white border rounded shadow-md mt-1 z-10">
                            {destinationSuggestions.map((station, index) => (
                                <li
                                    key={station}
                                    className={`p-2 cursor-pointer ${index === activeIndex ? "bg-gray-200" : ""}`}
                                    onMouseDown={() => handleSuggestionClick(station, setDestination, setDestinationSuggestions)}
                                >
                                    {station}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Find Path
                </button>
            </form>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Display Result */}
            {result && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <h3 className="font-bold text-lg">Route Details:</h3>
                    <ul className="list-disc ml-4">
                        {result.detailed_path.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                    <h3 className="font-bold mt-2">Shortest Path:</h3>
                    <p>{result.short_path.join(" → ")}</p>
                </div>
            )}
        </div>
    );
};

export default RouteSearch;

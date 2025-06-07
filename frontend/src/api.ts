const API_URL = "http://127.0.0.1:5000/api";

export interface PathResponse {
    detailed_path: string[];
    short_path: string[];
    error?: string;
}

export const findShortestPath = async (departure: string, destination: string): Promise<PathResponse> => {
    const response = await fetch(`${API_URL}/findpath`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ departure, destination }),
    });

    return response.json();
};

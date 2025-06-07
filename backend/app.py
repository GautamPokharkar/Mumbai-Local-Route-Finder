from flask import Flask, request, jsonify
import pandas as pd
import networkx as nx
from flask_cors import CORS  # Enable CORS for frontend-backend communication

app = Flask(__name__)
CORS(app)  # Allow requests from the React frontend

# Load the dataset
data = pd.read_csv('data/Mumbai Local Train Dataset.csv', encoding='latin1')

# Create a MultiGraph to store the train network
G = nx.MultiGraph()
data['Station'] = data['Station'].str.lower()

# Add edges to graph
for i in range(len(data) - 1):
    if data['Line'][i] == data['Line'][i + 1]:
        G.add_edge(data['Station'][i], data['Station'][i + 1], line=data['Line'][i])

# Function to find shortest path
def find_shortest_path(graph, start, end):
    if start not in graph.nodes or end not in graph.nodes:
        return {"error": "Invalid station name."}

    path = nx.shortest_path(graph, source=start, target=end)
    detailed_path = []
    short_path = [start]
    prev_line = None

    for i in range(len(path) - 1):
        station = path[i]
        next_station = path[i + 1]
        edge_data = graph.get_edge_data(station, next_station)
        if edge_data:
            line = list(edge_data.values())[0]['line']
            if line != prev_line and prev_line:
                detailed_path.append(f"Change to {line} line at {station} station")
                short_path.append(f"--{prev_line} line-->")
                short_path.append(station)
            prev_line = line

        detailed_path.append(station)

    detailed_path.append(end)
    short_path.append(f"--{prev_line} line-->")
    short_path.append(end)

    return {"detailed_path": detailed_path, "short_path": short_path}

# API endpoint for finding shortest path
@app.route("/api/findpath", methods=["POST"])
def find_path():
    data = request.json
    departure = data.get("departure", "").lower()
    destination = data.get("destination", "").lower()

    result = find_shortest_path(G, departure, destination)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)

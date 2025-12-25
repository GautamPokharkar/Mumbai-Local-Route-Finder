# 🚆 Mumbai Local Train Route Finder – Graph Algorithms API

A **graph-based backend API** built using **Flask, NetworkX, and Pandas** to compute the **shortest route between Mumbai local train stations**, including **line change detection**.  
The system is designed to support frontend clients (e.g., React) via REST APIs.

---

## ✅ Features

- Computes the **shortest path** between two train stations  
- Detects and reports **line changes** along the route  
- Models the railway network using a **NetworkX MultiGraph**  
- Exposes routing logic through a **Flask REST API**  
- Returns both **detailed** and **compact** route representations  

---

## 🧠 How It Works

- Loads a real-world dataset containing Mumbai local stations and line information  
- Constructs a **graph-based network model** using NetworkX  
- Applies **shortest path algorithms** to compute optimal routes  
- Identifies line transitions and annotates them in the output  

---

## 🔌 API Endpoint

**POST** `/api/findpath`

**Request Body:**
```json
{
  "departure": "andheri",
  "destination": "churchgate"
}

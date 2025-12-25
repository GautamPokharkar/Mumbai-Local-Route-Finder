# 🚆 Mumbai Local Train Route Finder – Full-Stack Graph Algorithms System

A **full-stack route-finding system** with a **React (TypeScript) frontend** and a **Flask backend**, designed to compute the **shortest routes and line changes** in the Mumbai local train network using **graph algorithms**.

---

## ✅ Features

- Computes the **shortest route** between two Mumbai local train stations  
- Detects and reports **line changes** along the route  
- Models the railway network using a **NetworkX MultiGraph**  
- Full-stack integration with a **React (TypeScript) frontend**  
- REST API communication between frontend and backend  
- Returns both **detailed** and **compact** route representations  

---

## 🧠 How It Works

- Loads a real-world dataset containing Mumbai local stations and line information  
- Constructs a **graph-based network model** using NetworkX  
- Applies **shortest path algorithms** to compute optimal routes  
- Identifies line transitions and annotates them in the result  
- Exposes routing logic through a **Flask REST API**, consumed by a React UI  

---

## 🖥️ Frontend Overview

- Built using **React with TypeScript**
- Accepts user input for source and destination stations  
- Displays computed routes and line changes in a user-friendly format  
- Communicates with backend APIs using HTTP requests  

---

## 🔌 API Endpoint

**POST** `/api/findpath`

**Request Body:**
```json
{
  "departure": "andheri",
  "destination": "churchgate"
}

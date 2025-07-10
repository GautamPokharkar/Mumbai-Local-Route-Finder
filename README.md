# 🚆 Mumbai Local Train Route Finder (Flask + React)

A smart backend API built using **Flask**, **NetworkX**, and **Pandas**, designed to support a React-based UI for finding the **shortest path** between two Mumbai local train stations, with **line change alerts**.

---

## ✅ Features

- 📍 Find shortest route between two local stations
- 🔁 Detects and suggests **line changes** mid-route
- 🚦 Uses **NetworkX MultiGraph** to model the railway system
- 🔁 Seamless communication with React frontend via **CORS**
- 📄 Returns both detailed and summarized route instructions

---

## 🧪 Sample API Input/Output

> 🔗 POST `/api/findpath`

# 🚆 Mumbai Local Train Route Finder (Flask + React)

A smart backend API built using **Flask**, **NetworkX**, and **Pandas**, designed to support a React-based UI for finding the **shortest path** between two Mumbai local train stations, with **line change alerts**.

---

## ✅ Features

- 📍 Find shortest route between two local stations
- 🔁 Detects and suggests **line changes** mid-route
- 🚦 Uses **NetworkX MultiGraph** to model the railway system
- 🔁 Seamless communication with React frontend via **CORS**
- 📄 Returns both detailed and summarized route instructions

---

# 1. Clone the repository
git clone https://github.com/your-username/mumbai-local-guide
cd mumbai-local-guide

# 2. Create virtual environment
python -m venv env

# 3. Activate it
# Windows:
.\env\Scripts\activate
# macOS/Linux:
source env/bin/activate

# 4. Install requirements
pip install -r requirements.txt

# 5. Run the Flask server
python app.py
🧠 How It Works
📊 The app loads a dataset (Mumbai Local Train Dataset.csv) containing stations and lines

🔄 Converts it into a NetworkX MultiGraph

🔍 Uses shortest path algorithms to compute the route

🔃 Detects when a line change is required and includes it in the result

🧰 Tech Stack
[Flask] – Python web server

[Pandas] – Data manipulation

[NetworkX] – Graph-based routing

[Flask-CORS] – For React-to-Flask API communication

[React] (Frontend – optional) – Consumes this API

🚧 Future Enhancements
🗺️ Visual map of train network

📱 Mobile-first UI in React

⏱️ Add train timings and delay support

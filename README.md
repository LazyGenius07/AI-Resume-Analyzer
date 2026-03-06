🤖 AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes using Google Gemini LLM, extracts skills, analyzes job-market demand, and provides intelligent suggestions to improve resume quality.

This project combines React frontend, FastAPI backend, and Gemini AI to create an intelligent resume feedback system.

🚀 Features

✅ Upload resume (PDF/DOCX)
✅ Extract key information (skills, education, experience)
✅ AI-powered resume analysis
✅ Skill gap analysis based on market demand
✅ Visual skill analytics
✅ Resume improvement suggestions
✅ REST API architecture

🏗 Project Architecture
User
 │
 ▼
React Frontend
 │
 │ REST API
 ▼
FastAPI Backend
 │
 ├── Resume Parser
 ├── AI Analyzer
 └── Market Trend Analyzer
 │
 ▼
Google Gemini API
 │
 ▼
Analysis Results
📂 Project Structure
ai-resume-analyzer
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── ResumeUpload.jsx
│   │   │   ├── AnalysisResult.jsx
│   │   │   └── SkillChart.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── main.py
│   ├── resume_parser.py
│   ├── ai_analyzer.py
│   ├── trend_analyzer.py
│   └── requirements.txt
│
└── README.md
🛠 Tech Stack
Frontend

React

Vite

JavaScript

HTML/CSS

Chart.js / Recharts

Backend

FastAPI

Python

Uvicorn

AI / NLP

Google Gemini API

spaCy

PyPDF / pdfplumber

Tools

Node.js

npm

VS Code

Git

⚙️ Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/ai-resume-analyzer.git

cd ai-resume-analyzer
🖥 Backend Setup

Navigate to backend:

cd backend

Create virtual environment:

python -m venv venv

Activate environment:

Windows
venv\Scripts\activate
Mac/Linux
source venv/bin/activate

Install dependencies:

pip install -r requirements.txt
🔑 Setup Gemini API Key

Create a .env file in backend:

GEMINI_API_KEY=your_api_key_here
▶ Run Backend Server
uvicorn main:app --reload

Backend runs at:

http://127.0.0.1:8000

API docs:

http://127.0.0.1:8000/docs
💻 Frontend Setup

Navigate to frontend:

cd ../frontend

Install dependencies:

npm install

Run frontend:

npm run dev

Frontend runs at:

http://localhost:5173
📡 API Endpoint
Analyze Resume
POST /analyze

Upload resume file.

Example Response:

{
 "parsed_resume": {
   "name": "John Doe",
   "skills": ["Python", "React", "Machine Learning"]
 },
 "ai_analysis": "Your resume is strong but lacks cloud skills.",
 "market_trends": {
   "missing_skills": ["Docker", "Kubernetes"]
 }
}
📊 Example Workflow

1️⃣ User uploads resume
2️⃣ Frontend sends file to backend
3️⃣ Backend parses resume text
4️⃣ AI analyzes resume using Gemini
5️⃣ Market analyzer checks skill demand
6️⃣ Results sent back to frontend
7️⃣ User sees skill charts and suggestions

📈 Future Improvements

ATS compatibility scoring

Job recommendation system

Resume rewriting using AI

LinkedIn profile analysis

Multi-language resume support

Deployment on cloud (AWS / GCP)

👨‍💻 Author

Developed by Razzaq

Department: Artificial Intelligence & Machine Learning
College: BMS College of Engineering

⭐ Contribution

Contributions are welcome!

Fork the repository

Create a new branch

Commit changes

Open a Pull Request

📜 License

This project is licensed under the MIT License.

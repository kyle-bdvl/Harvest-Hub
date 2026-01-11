# Rebound AI - Your AI-Powered Business Assistant
 Rebound AI is an advanced conversational AI assistant designed specifically for business strategy, planning, and organizational productivity. Built with React, TypeScript, and powered by Google's Gemini AI, it provides a secure, intuitive interface for users to interact with AI for various business-related tasks.

## Features
### 🤖 AI Chat Interface
* Real-time conversation with Gemini 2.5 Flash AI model
* Markdown rendering for formatted responses
* Message history with timestamps
* Typing indicators for better user experience
* Dark/Light theme toggle
### 🔒 Security Features
* Prompt injection protection with system-level safeguards
* Secure API key management
* Content validation and sanitization
### 📊 Business Tools
* Custom Rules: Define AI instruction rules to customize behavior
* MCP Integration: Generate and manage API keys for Model Context Protocol integration
* Chat History: Save and reload previous conversations
* Quick Actions: Pre-built prompts for common business tasks
### 🎨 Modern UI/UX
* Glassmorphism design with gradient backgrounds
* Responsive layout for desktop and mobile
* Sidebar navigation with collapsible menu
* Smooth animations and transitions
* ShadCN UI components for consistent design
### 🗂️ State Management
* Redux Toolkit for global state
* Persistent chat history
* Session management
* Initial prompt handling from home page
## Tech Stack
* Frontend Framework: React 19 with TypeScript
* Build Tool: Vite
* Styling: Tailwind CSS v4 with custom theme
* UI Components: ShadCN UI (Radix UI primitives)
* State Management: Redux Toolkit
* Routing: React Router v7
* AI Integration: Google Gemini API
* Icons: Lucide React
## Project Structure 
```bash 
src/
├── components/          # Reusable React components
│   ├── CustomSidebar.tsx
│   └── Header.tsx
├── pages/              # Route pages
│   ├── Home.tsx        # Landing page with quick actions
│   ├── Chat.tsx        # Main chat interface
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Rules.tsx       # AI instruction rules manager
│   └── MCP.tsx         # API key generation for MCP
├── routes/             # Routing configuration
│   └── routes.tsx
├── store/              # Redux state management
│   ├── store.ts        # Store configuration
│   ├── chat.ts         # Chat state slice
│   ├── history.ts      # History state slice
│   └── hooks.ts        # Typed Redux hooks
├── shadcn/ui/          # ShadCN UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```
## Setup Instructions 
### CLone the repo 
```bash 
git clone <your-repository-url>
cd HarvestHub
```
### install Dependencies 
```npm install ```

### Setting up environment 
* Create a .env file and then place your gemini API key
``` VITE_AI_API_KEY=your_gemini_api_key_here ```

### Start the development 
```npm run dev ```

import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navi = useNavigate()
  const [prompt, setPrompt] = useState("")

  const examples = useMemo(
    () => [
      { label: "Study plan", emoji: "📚", text: "Make me a 7-day study plan for SWE3305" },
      { label: "Explain simply", emoji: "🧠", text: "Explain this topic like I'm 10" },
      { label: "Project ideas", emoji: "💡", text: "Give me AI project ideas and modules" },
      { label: "Writing help", emoji: "✍️", text: "Help me write a report introduction" },
    ],
    []
  )

  return (
    <div style={styles.page}>
      <div style={styles.center}>
        <h1 style={styles.title}>Rebound AI</h1>
        <p style={styles.subtitle}>
          Your AI assistant for studying, planning, and getting work done.
        </p>

        <div style={styles.inputBox}>
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Try: "Generate a study plan for SWE3305"'
            style={styles.input}
          />
          <button
            onClick={() => navi("/chat")}
            disabled={!prompt.trim()}
            style={{
              ...styles.button,
              opacity: prompt.trim() ? 1 : 0.5,
            }}
          >
            Start Chat →
          </button>
        </div>

        <div style={styles.chips}>
          {examples.map((ex) => (
            <button
              key={ex.label}
              onClick={() => setPrompt(ex.text)}
              style={styles.chip}
            >
              {ex.emoji} {ex.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    margin: 0,
    background:
      "radial-gradient(900px 600px at 20% 10%, rgba(99,102,241,0.35), transparent 60%)," +
      "radial-gradient(700px 500px at 80% 20%, rgba(236,72,153,0.35), transparent 60%)," +
      "linear-gradient(180deg, #05070f, #0b1024)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  center: {
    maxWidth: 720,
    width: "100%",
    padding: 32,
    textAlign: "center",
    background: "rgba(255,255,255,0.08)",
    borderRadius: 24,
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(18px)",
  },

  title: {
    fontSize: 48,
    marginBottom: 10,
  },

  subtitle: {
    opacity: 0.85,
    marginBottom: 30,
  },

  inputBox: {
    display: "flex",
    gap: 12,
    padding: 12,
    borderRadius: 16,
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.15)",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    fontSize: 16,
  },

  button: {
    padding: "10px 16px",
    borderRadius: 14,
    border: "none",
    background: "linear-gradient(135deg, #6366f1, #ec4899)",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  },

  chips: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  chip: {
    padding: "10px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.18)",
    cursor: "pointer",
  },
}



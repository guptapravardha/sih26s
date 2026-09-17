import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mic, Send, Volume2 } from "lucide-react";

function VoiceAdvisor() {
  const navigate = useNavigate();

  const [listening, setListening] = useState(false);
  const [question, setQuestion] = useState("");

  const startListening = () => {
    setListening(true);

    setTimeout(() => {
      setQuestion(
        "Mujhe gaon mein dairy kholni hai aur mere paas ₹20,000 hain."
      );
      setListening(false);
    }, 1500);
  };

  const askAdvisor = () => {
    if (!question.trim()) {
      alert("Please enter your business question.");
      return;
    }

    alert("AI Advisor response will be connected with Gemini later.");
  };

  return (
    <div className="advisor-page">

      {/* Navbar */}
      <nav className="advisor-navbar">
        <button
          className="back-button"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={20} />
        </button>

        <div className="advisor-logo">
          <span>🌱</span>
          <strong>Gram-Pragati AI</strong>
        </div>

        <span className="language-badge">हिंदी</span>
      </nav>

      {/* Main */}
      <main className="advisor-container">

        <div className="advisor-header">
          <h1>Tell me your business idea</h1>

          <p>
            Speak in Hindi, English or Marathi.
            <br />
            I'll help you understand your business idea.
          </p>
        </div>

        {/* Microphone */}
        <div className="mic-section">

          <button
            className={`big-mic ${listening ? "listening" : ""}`}
            onClick={startListening}
          >
            <Mic size={55} />
          </button>

          <p className="mic-status">
            {listening
              ? "Listening..."
              : "Tap the microphone and speak"}
          </p>

        </div>

        {/* Input */}
        <div className="advisor-input-card">

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: Mujhe dairy business shuru karna hai..."
            rows="4"
          />

          <div className="input-actions">

            <button
              className="listen-button"
              onClick={() => alert("Voice playback will be connected later.")}
            >
              <Volume2 size={18} />
              Listen
            </button>

            <button
              className="ask-button"
              onClick={askAdvisor}
            >
              <Send size={18} />
              Ask Advisor
            </button>

          </div>

        </div>

        {/* Examples */}
        <section className="examples-section">

          <h3>Try asking</h3>

          <div className="example-buttons">

            <button
              onClick={() =>
                setQuestion("Mere paas ₹20,000 hain. Main kaunsa business kar sakta hoon?")
              }
            >
              💰 I have ₹20,000
            </button>

            <button
              onClick={() =>
                setQuestion("Mere gaon mein kaunsa business chal sakta hai?")
              }
            >
              🏪 Business for my village
            </button>

            <button
              onClick={() =>
                setQuestion("Mujhe dairy business shuru karna hai.")
              }
            >
              🐄 Dairy business
            </button>

          </div>

        </section>

        {/* Trust */}
        <div className="advisor-trust">

          <span>🔵 AI Suggestion</span>
          <span>🟡 Calculated</span>
          <span>🟢 Verify Important Information</span>

        </div>

        <p className="advisor-disclaimer">
          AI suggestions are for guidance only. Financial and government
          information should be verified before making decisions.
        </p>

      </main>

    </div>
  );
}

export default VoiceAdvisor;
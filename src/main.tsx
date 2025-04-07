
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set document title programmatically as well to ensure consistency
document.title = "Decoding Data Science Talent";

createRoot(document.getElementById("root")!).render(<App />);

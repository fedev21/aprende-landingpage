import { createRoot } from 'react-dom/client';

// import './fonts/Collier/Collier-Book.otf';
// import './fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf';
// import './fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf';

import './scss/index.scss';
import './fonts/index.scss';
import App from "./pages/index";

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
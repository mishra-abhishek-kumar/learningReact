import './App.css';
import config from './config/config';

function App() {
    console.log(import.meta.env.VITE_APPWRITE_URL);
    console.log("working", config.appwriteURL);
  return (
    <>
      <h1>A blog application with AppWrite</h1>
    </>
  )
}

export default App

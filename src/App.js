
import './App.css';
import PasswordGen from './PasswordGen';



function App() {
  return (
    <div className="wrapper">
      <div className="h-screen bg-gradient-to-r from-red-300 via-red-100 to-red-300">
        <h1 className="pt-20 text-2xl font-bold text-blue-800">PASSWORD GENERATOR</h1>
      
      <PasswordGen/>
    </div>
    </div>
  );
};

export default App;

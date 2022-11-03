import Counter from "./components/counter/Counter";
import Modal from "./components/modal/Modal";
import { Routes, Route } from 'react-router-dom';
import Quiz from "./components/quiz/Quiz";
import Users from "./components/users/Users";
import Convertor from "./components/convertor/Convertor";
import Photos from "./components/photos/Photos";


function App() {
  return (
	  <Routes>
		  <Route path="/" element={<Counter />} />
		  <Route path="/Счетчик" element={<Counter />} />
		  <Route path="/Модальное окно" element={<Modal />} />
		  <Route path="/Опросник" element={<Quiz />} />
		  <Route path="/Список пользователей" element={<Users />} />
		  <Route path="/Конвертер валют" element={<Convertor />} />
		  <Route path="/Коллекция фотографий" element={<Photos />} />
		</Routes>
  );
}

export default App;

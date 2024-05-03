import { useState } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Header/Navbar'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  const [openNav, setOpenNav] = useState(false) 

  return (
		<div className="App">
			<Header openNav={openNav} setOpenNav={setOpenNav} />
			{openNav && <Navbar />}
			<Main />
			<Footer />
		</div>
	);
}

export default App

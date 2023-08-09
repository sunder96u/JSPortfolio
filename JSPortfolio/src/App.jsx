import Main from './components/Main'
import './App.css'
import Header from './components/Header'
import Footer from './components/FooterLeft'

function App() {
  return (
    <div className="background">
      <div className="row header">
        <Header />
      </div>
      <div className="row main">
        <Main />
      </div>
      <div className="row footer">
        <Footer />
      </div>
    </div>
  )
}

export default App

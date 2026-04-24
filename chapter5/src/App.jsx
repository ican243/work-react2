import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

function App() {
  const name = "임진휘";
  return (
    <div>
      <Header />
      <Body name={name} location = {"송파구"}/>
      <Footer />
    </div>
  )
}

export default App
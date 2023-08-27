import './App.css'
import {Content} from './Content'
import { GlobalStyle } from './pages/styles'
import { Helmet } from 'react-helmet';
function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="src\assets\valve.svg" />
        <title>Valve</title>
      </Helmet>
      <GlobalStyle/>
      <Content/>
    </>
  )
}

export default App

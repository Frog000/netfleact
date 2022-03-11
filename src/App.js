import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row'
import requests from './requests';
import Test from './components/Test'



function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="지금 뜨는 컨텐츠" fetchUrl={requests.fetchTrending} />
      <Row title="탑 랭킹" fetchUrl={requests.fetchTopRated}/>
      <Row title="액션" fetchUrl={requests.fetchActionMovies}/>
      <Row title="코미디" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="공포" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="로맨스" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;

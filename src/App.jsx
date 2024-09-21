import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from './pagess/Feed'
import VideoDetail from './pagess/VideoDetail';
import SearchResults from "./pagess/SearchResults";
import Header from "./components/Header";



function App() {
  return (
    
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={ <Feed/>} />
        <Route path="/watch/:id"  element={ <VideoDetail/>}/>
        <Route path="/results"  element={ <SearchResults/>}/>
      </Routes>
    </BrowserRouter>



  );

}

export default App;

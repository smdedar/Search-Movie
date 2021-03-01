import MovieList from './component/MovieList'
import MovieDetail from './component/MovieDetail'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      
      <div>
        <BrowserRouter>
          <Switch>
          <Route path="/" component={MovieList} exact></Route>
          <Route path="/moviedetail/:id" component={MovieDetail}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

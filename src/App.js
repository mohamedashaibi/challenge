import { Route, Router, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import CommentList from './Components/Comment/CommentList';
import PostList from './Components/Post/PostList';
import UserList from './Components/User/UserList';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserList}>
             
          </Route>
          <Route exact path="/posts/:id" component={PostList}>
           
          </Route>
          <Route exact path="/comments/:id" component={CommentList}>
           
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { Profile } from './components/pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* // provisional header */}
                <header className="header">
                    <nav className="nav">
                        <div className="left">
                            <div className="logo">LOGO</div>
                            <div className="posts">POSTS</div>
                            <div className="friends">FRIENDS</div>
                        </div>
                        <div className="right">
                            <div className="notifications">UNREAD</div>
                            <div className="user">
                                <NavLink to={'/profile'}>AVATAR</NavLink>
                            </div>
                            <div className="options">...</div>
                        </div>
                    </nav>
                </header>
                {/* // provisional header - end */}
                <div className="main">
                    <Routes>
                        <Route path="/" element={<h1>Hello World</h1>} />
                        <Route path="/profile" element={<Profile />}>
                            <Route path="edit" element={<></>} />
                        </Route>
                        <Route path="*" element={<></>} />
                    </Routes>
                </div>
                <footer className="footer"></footer>
            </div>
        </BrowserRouter>
    );
}

export default App;

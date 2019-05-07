import React, { Fragment } from 'react';
import { 
    BrowserRouter,
    Route, 
    Switch,
    Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../config/material/theme.config';
import styles from './App.module.scss';
import Header from 'Components/Header';
import IndexPage from 'Pages/IndexPage';
import ImagePage from 'Pages/ImagePage';
import AdminPage from 'Pages/AdminPage';
import SearchPage from 'Pages/SearchPage';
import NotFoundPage from 'Pages/NotFoundPage';
import store from 'Store';


const App = (props) => {

    return <Fragment>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Header/>
                <div className={styles.mainContent}>
                    <BrowserRouter>       
                        <Switch>
                            <Route path="/" exact component={IndexPage}/>
                            <Route path="/image/:id" component={ImagePage}/>
                            <Route path="/search" component={SearchPage}/>
                            <Route path="/admin"  component={AdminPage}/>
                            <Route path="/404" component={NotFoundPage}/>
                            <Redirect from="*" to="/404"/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </MuiThemeProvider>
        </Provider>
    </Fragment>
}

export default App;
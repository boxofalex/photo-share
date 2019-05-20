import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "material/theme.config";
import styles from "./App.module.scss";
import { Header } from "components/Header";
import { Index } from "pages/Index";
import { Image } from "pages/Image";
import { Admin } from "pages/Admin";
import { Search } from "pages/Search";
import { NotFound } from "pages/NotFound";
import store from "store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <div className={styles.mainContent}>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/image/:id" component={Image} />
                <Route path="/search" component={Search} />
                <Route path="/admin" component={Admin} />
                <Route path="/404" component={NotFound} />
                <Redirect from="*" to="/404" />
              </Switch>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;

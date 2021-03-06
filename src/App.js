import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import useReactRouter from "use-react-router"

import GlobalStyles from "styles/globalStyles"
import FullScreenLoading from "components/FullScreenLoading"
import ScrollToTop from "components/ScrollToTop"
import GA from "services/ga"

import Success from "./scenes/Success"

const Drop = React.lazy(() => import("scenes/Drop"))
const Landing = React.lazy(() => import("scenes/Landing"))
const Admin = React.lazy(() => import("scenes/Admin"))

const GoogleAnalytics = () => {
  const { location } = useReactRouter()
  useEffect(() => GA.pageview(location.pathname), [location])
  return <> </>
}

export default function App() {
  return (
    <>
      <GlobalStyles />
      <React.Suspense fallback={<FullScreenLoading />}>
        <Router>
          <GoogleAnalytics />
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/success" exact component={Success} />
              <Route path="/:id" component={Drop} />
              {/* TODO: 404 Page */}
            </Switch>
          </ScrollToTop>
        </Router>
      </React.Suspense>
    </>
  )
}

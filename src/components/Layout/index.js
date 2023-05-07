import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import ConfigurationContex from '../../context/ConfigurationContext'

const Layout = () => (
  <ConfigurationContex.Consumer>
    {value => {
      const {showContent} = value

      return (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      )
    }}
  </ConfigurationContex.Consumer>
)
export default Layout

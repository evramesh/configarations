import './index.css'

import ConfigurationContex from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContex.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body">
          {showLeftNavbar ? (
            <div className="left">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li className="li">Item 1</li>
                <li className="li">Item 2</li>
                <li className="li">Item 3</li>
                <li className="li">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left">
              <h1>Right Navbar</h1>
              <div>
                <p className="ad">Ad 1</p>
                <p className="ad">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContex.Consumer>
)

export default Body

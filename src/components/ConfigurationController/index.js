import './index.css'

import ConfigurationContex from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContex.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        onToggleShowContent,
      } = value
      const contentChange = event => {
        onToggleShowContent()
      }
      const leftChange = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const rightChange = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="configure">
          <div className="items">
            <h1>Layout</h1>
            <div>
              <input
                onChange={contentChange}
                checked={showContent}
                type="checkbox"
                id="content"
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                onChange={leftChange}
                checked={showLeftNavbar}
                type="checkbox"
                id="left"
              />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div>
              <input
                onChange={rightChange}
                checked={showRightNavbar}
                type="checkbox"
                id="right"
              />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContex.Consumer>
)

export default ConfigurationController

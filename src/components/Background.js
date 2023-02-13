import React from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import Display from './Display'
class Background extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      minHeight: 2000.0,
      
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
   
  render() {
    return (
    <div ref={this.vantaRef}>
     <Display/>
    </div>
    )
  }
}
export default Background
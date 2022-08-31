import WorkBox from './../Components/WorkBox'
import './Works.css';

export const Works = () => {
  return <div>
    <h1>Works</h1>
    <div className={'WorkBoxParent'} style={{display:'flex',flexWrap:"wrap"}}>
      <WorkBox title={'Skin Editor(Java)'} />
      <WorkBox title={'Skin Editor(Web,JS)'} />
      <WorkBox title={'ImageDrawer(Chrome Ext)'} />
      <WorkBox title={'Old Website(JS,Full Scratch)'} />
    </div>
  </div>
}

export default Works;
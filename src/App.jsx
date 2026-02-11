
import Usercard from './component/Usercard'
import Head from 'D:/coding/React/react-project-two/src/assets/Head.jpg'
import hero from 'D:/coding/React/react-project-two/src/assets/hero.jpg'
import amazon_logo from 'D:/coding/React/react-project-two/src/assets/amazon_logo.jpg'  

function App(){
  return (
    
      <div className=''>

        <h1 className='text-center text-3xl mt-9 '> Write Code Using props</h1>

        <div className='flex flex-wrap gap-11 m-4 mt-16 ' >
        <div className='md:bg-orange-200'><Usercard name="Door" image={Head} /></div>
        <div className='md:bg-orange-200'><Usercard name="Shopping" image={hero} /></div>
        <div className='md:bg-orange-200'><Usercard name="Amazon" image={amazon_logo} /></div>
      </div>
      </div>
  
  )
}


export default App

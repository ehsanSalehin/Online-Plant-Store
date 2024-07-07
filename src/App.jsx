import React from 'react'
import styles from './style'
import {Begin,Navbar,Card,Customer,Firm,Footer,Hero,Prompt,Status,Testemonies,} from './components'


const App = () => (

    <div className="bg-primary w-full  overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

    <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Status />    
        <Firm />
        <Customer />
        <Testemonies />
        <Prompt/>
        <Footer />
        </div>
      </div>

    </div>
)

export default App

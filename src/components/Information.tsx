import { useState } from "react"
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Information() {
      const [mod1, setMod1] = useState(false)
      const [mod2, setMod2] = useState(false)
      const [mod3, setMod3] = useState(false)
     const [mod4, setMod4] = useState(false)
    
  return (
    <div className="flex flex-col justify-between items-center gap-10">
        <div className="bg-green-600 w-[800px] rounded-2xl flex flex-col items-center p-20">
            <h1>TRADECEN</h1>
            <h2>No risk, all rewards.</h2>
            <h3>Try TradeCen</h3>
            <div className="mt-6 bg-slate-200 rounded-full p-4">
                <input 
                type="email" 
                name="" 
                id="" 
                placeholder="Enter your email"
                className="bg-slate-200" 
                />
                <button>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>
            <h4 className="text-sm text-slate-300 mt-3">You agree to receive Tradecen marketing emails</h4>
        </div>
        <div className="relative  mx-auto px-6 lg:px-8 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="flex items-center justify-between text-xl font-semibold text-gray-900 mb-3">
                WHAT IS TradeCen and how does it work?
                <button onClick={()=> setMod1(prev => !prev)} className="cursor-pointer">
                  {!mod1 ? <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.8438 0C22.8275 0 24.4375 1.61 24.4375 3.59375V17.25H38.0938C39.0469 17.25 39.961 17.6286 40.6349 18.3026C41.3089 18.9765 41.6875 19.8906 41.6875 20.8438C41.6875 21.7969 41.3089 22.711 40.6349 23.3849C39.961 24.0589 39.0469 24.4375 38.0938 24.4375H24.4375V38.0938C24.4375 39.0469 24.0589 39.961 23.3849 40.6349C22.711 41.3089 21.7969 41.6875 20.8438 41.6875C19.8906 41.6875 18.9765 41.3089 18.3026 40.6349C17.6286 39.961 17.25 39.0469 17.25 38.0938V24.4375H3.59375C2.64063 24.4375 1.72654 24.0589 1.05259 23.3849C0.378626 22.711 0 21.7969 0 20.8438C0 19.8906 0.378626 18.9765 1.05259 18.3026C1.72654 17.6286 2.64063 17.25 3.59375 17.25H17.25V3.59375C17.25 1.61 18.86 0 20.8438 0Z" fill="black"/>
                          </svg>
                          : <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.5 20.5H38.5C39.3284 20.5 40 21.1716 40 22C40 22.8284 39.3284 23.5 38.5 23.5H3.5C2.67157 23.5 2 22.8284 2 22C2 21.1716 2.67157 20.5 3.5 20.5Z" fill="currentColor"/>
                            </svg>
                  }
                </button>
              </h3>
              {mod1 && <p className="text-gray-600 leading-relaxed">
                LINQ is a crypto-to-fiat onramp that lets users convert Sui USDC into Naira seamlessly , no middleman , no p2p , all in one go .
              </p>}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="flex items-center justify-between text-xl font-semibold text-gray-900 mb-3">
                Can I use my own domain name?
                 <button onClick={()=> setMod2(prev => !prev)} className="cursor-pointer">
                  {!mod2 ? <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.8438 0C22.8275 0 24.4375 1.61 24.4375 3.59375V17.25H38.0938C39.0469 17.25 39.961 17.6286 40.6349 18.3026C41.3089 18.9765 41.6875 19.8906 41.6875 20.8438C41.6875 21.7969 41.3089 22.711 40.6349 23.3849C39.961 24.0589 39.0469 24.4375 38.0938 24.4375H24.4375V38.0938C24.4375 39.0469 24.0589 39.961 23.3849 40.6349C22.711 41.3089 21.7969 41.6875 20.8438 41.6875C19.8906 41.6875 18.9765 41.3089 18.3026 40.6349C17.6286 39.961 17.25 39.0469 17.25 38.0938V24.4375H3.59375C2.64063 24.4375 1.72654 24.0589 1.05259 23.3849C0.378626 22.711 0 21.7969 0 20.8438C0 19.8906 0.378626 18.9765 1.05259 18.3026C1.72654 17.6286 2.64063 17.25 3.59375 17.25H17.25V3.59375C17.25 1.61 18.86 0 20.8438 0Z" fill="black"/>
                          </svg>
                          : <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.5 20.5H38.5C39.3284 20.5 40 21.1716 40 22C40 22.8284 39.3284 23.5 38.5 23.5H3.5C2.67157 23.5 2 22.8284 2 22C2 21.1716 2.67157 20.5 3.5 20.5Z" fill="currentColor"/>
                            </svg>
                  }
                </button>
                </h3>
              {mod2 && <p className="text-gray-600 leading-relaxed">
                That's answered in the document as how long does a USDC to Naira conversion take
              </p>}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="flex items-center justify-between text-xl font-semibold text-gray-900 mb-3">
                Do I need to be a designer or developer to use TradeCen?
                 <button onClick={()=> setMod3(prev => !prev)} className="cursor-pointer">
                  {!mod3 ? <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.8438 0C22.8275 0 24.4375 1.61 24.4375 3.59375V17.25H38.0938C39.0469 17.25 39.961 17.6286 40.6349 18.3026C41.3089 18.9765 41.6875 19.8906 41.6875 20.8438C41.6875 21.7969 41.3089 22.711 40.6349 23.3849C39.961 24.0589 39.0469 24.4375 38.0938 24.4375H24.4375V38.0938C24.4375 39.0469 24.0589 39.961 23.3849 40.6349C22.711 41.3089 21.7969 41.6875 20.8438 41.6875C19.8906 41.6875 18.9765 41.3089 18.3026 40.6349C17.6286 39.961 17.25 39.0469 17.25 38.0938V24.4375H3.59375C2.64063 24.4375 1.72654 24.0589 1.05259 23.3849C0.378626 22.711 0 21.7969 0 20.8438C0 19.8906 0.378626 18.9765 1.05259 18.3026C1.72654 17.6286 2.64063 17.25 3.59375 17.25H17.25V3.59375C17.25 1.61 18.86 0 20.8438 0Z" fill="black"/>
                          </svg>
                          : <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.5 20.5H38.5C39.3284 20.5 40 21.1716 40 22C40 22.8284 39.3284 23.5 38.5 23.5H3.5C2.67157 23.5 2 22.8284 2 22C2 21.1716 2.67157 20.5 3.5 20.5Z" fill="currentColor"/>
                            </svg>
                  }
                </button>  
                </h3>
              {mod3 && <p className="text-gray-600 leading-relaxed">
               Sui compatible wallets ,example , slush , nightly
              </p>}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="flex items-center justify-between text-xl font-semibold text-gray-900 mb-3">
                How much does TradeCen Cost?
                 <button onClick={()=> setMod4(prev => !prev)} className="cursor-pointer">
                  {!mod4 ? <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.8438 0C22.8275 0 24.4375 1.61 24.4375 3.59375V17.25H38.0938C39.0469 17.25 39.961 17.6286 40.6349 18.3026C41.3089 18.9765 41.6875 19.8906 41.6875 20.8438C41.6875 21.7969 41.3089 22.711 40.6349 23.3849C39.961 24.0589 39.0469 24.4375 38.0938 24.4375H24.4375V38.0938C24.4375 39.0469 24.0589 39.961 23.3849 40.6349C22.711 41.3089 21.7969 41.6875 20.8438 41.6875C19.8906 41.6875 18.9765 41.3089 18.3026 40.6349C17.6286 39.961 17.25 39.0469 17.25 38.0938V24.4375H3.59375C2.64063 24.4375 1.72654 24.0589 1.05259 23.3849C0.378626 22.711 0 21.7969 0 20.8438C0 19.8906 0.378626 18.9765 1.05259 18.3026C1.72654 17.6286 2.64063 17.25 3.59375 17.25H17.25V3.59375C17.25 1.61 18.86 0 20.8438 0Z" fill="black"/>
                          </svg>
                          : <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.5 20.5H38.5C39.3284 20.5 40 21.1716 40 22C40 22.8284 39.3284 23.5 38.5 23.5H3.5C2.67157 23.5 2 22.8284 2 22C2 21.1716 2.67157 20.5 3.5 20.5Z" fill="currentColor"/>
                            </svg>
                  }
                </button>
                </h3>
              {mod4 && <p className="text-gray-600 leading-relaxed">
                Linq has a customer support team that's always available 24/7 , visit @linq_sui and leave a message and get your transaction settled in less than minutes
              </p>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Information

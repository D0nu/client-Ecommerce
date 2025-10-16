import Hero from "../components/Hero"
import Message from "@/components/Message"
import Features from "@/components/Features"
import Information from "@/components/information"

function Home() {
  return (
    <div>
      <div className="text-3xl font-bold">
         
        
        <div className="flex flex-col gap-8 mb-7">
          <div>
          <Hero />
        </div>
        <div>
          <Message />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Information />
        </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Home

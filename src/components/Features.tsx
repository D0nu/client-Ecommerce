import VideoHover from "./VideoHover"

function Features() {
  return (
    <div className="grid grid-cols-2 gap-10 p-4">
      <div>
        <div className="bg-green-700">Jake</div> 
      </div>
      <div>
        <div className="bg-white rounded-2xl w-[700px] group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <div className="text-sm p-2 group-hover:bg-green-800 group-hover:text-white group-hover:rounded-full inline-block transition-all duration-300">
        OPTIMIZED CHECKOUT
      </div>

        <div className="flex justify-center">
          <VideoHover 
          imageSrc="/checkout.png"
          hoverVideoSrc="/checkoutIntro.webm"
          leaveVideoSrc="/checkoutOutro.mp4"
          alt="Demo image"
          className="w-96 h-96  object-contain"
          />
        </div>
      </div>
      <div className="mt-2">
        Buy and Sell with the world's best checkout
      </div>
      </div>     
            
      <div>
        <div className="bg-white rounded-2xl w-[700px] group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <div className="text-sm p-2 group-hover:bg-green-800 group-hover:text-white group-hover:rounded-full inline-block transition-all duration-300">
            CUSTOMIZABLE TEMPLATES
          </div>
        <div className="flex justify-center">
          <VideoHover 
          imageSrc="/Template.jpeg"
          hoverVideoSrc="/introTemplate.mp4"
          leaveVideoSrc="/outroTemplate.mp4"
          alt="Demo image"
          className="w-96 h-96  object-contain"
          />
        </div>
        </div>
        <div className="mt-2">
        Create Stunning Store in minutes
      </div>
      </div>      
      <div className="bg-green-700">Gil</div>      
    </div>
  )
}

export default Features

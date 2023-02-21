const Project=()=>{
    return(
        <div className="pa5">
            
        <section class="bg-inherit-800 p-10">
  <h2 class="text-3xl font-serif b text-center text-red-600 mb-10">PROJECTS</h2>
  <div class="grid grid-cols-3 gap-10">
    <div class="backdrop-blur-sm p-10 shadow-lg rounded-lg ba border-red-600">
      <a href="https://web-production-33de.up.railway.app/"><img src="/careway.jpg" alt="Carewaypoint" class="w-100 h-45 pointer" /></a>
      <h3 class="f4 b i text-red-600 mt-10 mb-4">CareWayPoint</h3>
      <p class="text-white">A machine learning(Naive Bayes Algorithm) project that predicts a user's career domain using a vast dataset that was scraped from
LinkedIn.
</p>
<div className="tc ma4 pa2">
<button class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <a href="https://web-production-33de.up.railway.app/">See Website</a>
</button>
<button class="ma2 bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <a href="https://github.com/ThanvirXo/carewaypoint">See code</a>
</button>
</div>
    </div>
    <div class="backdrop-blur-sm p-10 shadow-lg rounded-lg ba border-red-600">
      <img src="/astro.png" alt="Astro Bot" class="w-full h-47" />
      <h3 class="f4 b i text-red-600 mt-10 mb-4">Astro Bot | Python</h3>
      <p class="text-white">An interactive BOT that can be added to discord servers. It responds to user messages and provides their horoscope for that day, Yesterday, and Tomorrow and it also gives the Youtube video that you want to see on Youtube.An interactive BOT that can be added to discord servers. It responds to user messages and provides their horoscope for that day, Yesterday, and Tomorrow and it also gives the Youtube video that you want to see on Youtube.</p>
      <button class="pa2 ma4 bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <a href="https://github.com/ThanvirXo/Astrobot">See Code</a>
</button>
    </div>
    <div class="backdrop-blur-sm p-10 shadow-lg rounded-lg ba border-red-600">
      <img src="/slenium.jpg" alt="Portfolio" class="w-100 h-45" />
      <h3 class="f4 b i text-red-600 mt-10 mb-4">Tested X-zen Website</h3>
      <p class="text-white">Performed End-to-end testing of an e-commerce website using selenium Webdriver.
      <p class="text-white ma2"> Technologies leveraged: Maven, TestNG, and Jenkins.</p>
</p>
<button class="pa2 ma4 bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <a href="https://github.com/ThanvirXo/X-zen-testing">See Code</a>
</button>
    </div>
  </div>
</section>
</div>
    )
}
export default Project;
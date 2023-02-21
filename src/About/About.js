const About=()=>{
    return(
        <section class="bg-inherit-800 p-6">
  <div class="ml-4 mr-4 flex items-center justify-center">
    <div class="pa6 w-1/2 mr-4">
      <img src="/profile.jpg" alt="" class="rounded-full w-40 h-70" />
    </div>
    <div class="w-1/2 text-white">
      <h2 class="text-3xl font-bold text-red-600 mb-4">Thanvir Ibrahim S</h2>
      <p class="text-lg mb-4 i">An aspiring Computer Science Engineer looking forward to contribute to the society and enhance my technical skills and also adapt myself with new technologies. </p>
      <p class="f2 b font-serif text-red-600">Software Engineer</p>
      <button class="pa2 font-serif b ma4 bg-transparent hover:bg-green-500 text-red-700  hover:text-white py-2 px-4 f4 border border-red-500 hover:border-transparent rounded">
      <a href="/Thanvir_resume.pdf">Curriculum vitae</a></button>
    </div>
  </div>
</section>
    )
}

export default About;
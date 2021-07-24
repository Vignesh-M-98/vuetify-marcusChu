<template>
  <!--homepage content starts here-->

  <div class="home">
      <div class="flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-image w-auto" :style="{'background-image': 'url(' + require('../assets/image1.png') + ')'}">
        <div class="text-white font-semibold title pl-6 sm:pl-8 md:pl-9 lg:pl-10 xl:pl-12">MARCUS CHU</div>
        <div class="text-white font-julius sub-title pl-6 sm:pl-8 md:pl-9 lg:pl-10 xl:pl-12">CHIEF EXECUTIVE OFFICER</div>
        <div class="text-white font-julius sub-title pl-6 sm:pl-8 md:pl-9 lg:pl-10 xl:pl-12">ERA SINGAPORE</div>
      </div>
    <div class="flex flex-row items-center">
      <div class="xl:w-1/3"><img src="../assets/image4.jpg" alt="" class=" w-full hidden xl:block object-cover sec-height"></div>
      <div class=" w-full xl:w-2/3 bg-blue-custom text-white text-15px sm:text-16px md:text-17px xl:text-18px 3xl:text-19px  px-6 sm:px-8 md:px-10 lg:px-12 xl:px-13 text-left font-lato flex flex-col justify-center py-8 sm:py-9 md:py-10 lg:py-11 xl:py-13 sec-height">
        <p class="pb-3 md:pb-4 3xl:pb-5">With over two decades of experience in ERA, formerly as the Chief Operating Officer
          and now Chief Executive Officer, Mr Chu has played a critical role in ERA's growth and the achievements
          it has garnered over the years.</p>
        <p class="pb-3 md:pb-4 3xl:pb-5">Starting from humble beginnings, he rose through the ranks with grit, perseverance, and a
          deep belief in the future of Singapore’s Real Estate Industry.</p>
        <p class="pb-3 md:pb-4 3xl:pb-5">Through his journey, his actions have impacted the Singapore Real Estate industry in
          tremendous ways, and propelled ERA to where it is today.</p>
        <p class="pb-3 md:pb-4 3xl:pb-5">During his tenure as COO, Mr Chu has been steadfast in driving operational efficiency across
          the organisation, innovating products, rejuvenating the sales team and enhancing service levels.</p>
        <p>Today, as CEO, Mr Chu is driven to growing and strengthening the ERA brand, especially during the
          post-pandemic climate. Another of his key initiatives is to strengthen the ERA infrastructure with the
          integration of digital technologies.</p>
      </div>
    </div>
    <div class="py-8 sm:py-9 md:py-10 lg:py-11 xl:py-12 2xl:py-13 3xl:py-15 w-5/6 text-black-custom mx-auto">
      <p class="text-23px sm:text-26px md:text-30px lg:text-38px xl:text-42px 2xl:text-46px 3xl:text-48px font-medium uppercase mb-2 leading-tight text-shadow"><b>“Courageous</b> yet <b>humble, resilient</b> yet
        <b>flexible,</b> <span class="text-red-custom">Marcus will certainly <b>lead ERA Singapore to greater heights.”</b></span>
      </p>
      <div class="text-18px sm:text-21px md:text-24px lg:text-27px xl:text-30px 2xl:text-33px 3xl:text-36px font-bold uppercase text-right pt-2">
        <p>- Jack Chua</p>
        <p>former ceo, era</p>
      </div>
    </div>
    <div class="bg-blue-custom py-10 lg:py-11 xl:py-12 2xl:py-13 3xl:py-15">
      <div class=" flex flex-row justify-evenly px-4">
        <div class="flex flex-col uppercase text-white text-24px sm:text-26px md:text-28px lg:text-30px xl:text-32px 2xl:text-34px 3xl:text-36px font-semibold text-right justify-center w-2/5 pr-4 ">
          <p class="text-right text-red-custom pb-1">1996-2021</p>
          <p class="pb-4">chief operating officer</p>
          <p> era realty network</p>
        </div>
        <img src="../assets/Rectangle2.png" alt="" class="w-55 pl-4 object-cover">
      </div>
      <div class="pt-10 lg:pt-11 xl:pt-12 2xl:pt-13 3xl:pt-15 flex flex-row justify-evenly px-4">
        <img src="../assets/image3.png" alt="" class="w-55 pr-4 object-cover">
        <div class="flex flex-col uppercase text-white text-24px sm:text-26px md:text-28px lg:text-30px xl:text-32px 2xl:text-34px 3xl:text-36px font-semibold text-left justify-center w-2/5 pl-4 ">
          <p class="text-red-custom pb-1">2021-present</p>
          <p class="pb-4">chief operating officer</p>
          <p> era realty network</p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <p class="text-blue-custom text-24px sm:text-26px md:text-28px lg:text-30px xl:text-32px 2xl:text-34px 3xl:text-36px pt-10 lg:pt-11 xl:pt-12 2xl:pt-13 3xl:pt-15 font-medium">MEDIA</p>
      <p class="text-23px sm:text-26px md:text-30px lg:text-38px xl:text-42px 2xl:text-46px 3xl:text-48px font-times font-bold text-black-custom"><span class="text-32px sm:text-36px md:text-43px lg:text-56px xl:text-60px 2xl:text-64px 3xl:text-66px">T</span>HE <span class="text-32px sm:text-36px md:text-43px lg:text-56px xl:text-60px 2xl:text-64px 3xl:text-66px">B</span>USINESS <span class="text-32px sm:text-36px md:text-43px lg:text-56px xl:text-60px 2xl:text-64px 3xl:text-66px">T</span>IMES</p>
      <p class="text-md md:text-lg font-medium pt-2 font-lato">June 28, 2021</p>
      <p class="italic text-md lg:text-xl font-semibold pt-1 font-lato px-4">ERA Realty promotes COO Marcus Chu to CEO</p>
      <img src="../assets/Annotation.png" alt="" class="w-3/4 mx-auto pt-4 ">
      <div class="w-3/4 mx-auto font-lato">
        <p class="text-sm sm:text-lg md:text-xl font-semibold text-left pt-5 ">Full Article:</p>
        <p class="text-sm sm:text-lg md:text-xl font-medium pt-1 text-blue-700 text-left border-black border-b-2 pb-10 lg:pb-11 xl:pb-12 2xl:pb-13 3xl:pb-15"><a href="https://www.businesstimes.com.sg/real-estate/era-realty-promotes-coo-marcus-chu-to-ceo" class="border-b-2 border-blue-700 break-words">https://www.businesstimes.com.sg/real-estate/era-realty-promotes-coo-marcus-chu-to-ceo</a></p>
      </div>
      <p class="text-32px sm:text-36px md:text-43px lg:text-56px xl:text-60px 2xl:text-64px 3xl:text-66px font-times font-bold text-blue-custom pt-10 lg:pt-11 xl:pt-12 2xl:pt-13 3xl:pt-15">THE STRAIT TIMES</p>
      <p class="pt-2 text-md md:text-lg  font-medium font-lato">July 11, 2021 </p>
      <p class="text-xl sm:text-lg md:text-2xl font-semibold pt-2 font-lato">ERA’s new CEO Marcus Chu:</p>
      <p class="text-xl sm:text-lg md:text-2xl font-semibold font-lato">Cabby’s son rides real estate wave</p>
      <img src="../assets/image24.png" alt="" class="w-3/4 mx-auto pt-4 ">
      <div class="w-3/4 mx-auto font-lato">
        <p class="text-sm sm:text-lg md:text-xl font-semibold text-left pt-5">Full Article:</p>
        <p class="text-sm sm:text-lg md:text-xl font-medium pt-1 text-blue-700 text-left border-black border-b-2 pb-10 lg:pb-11 xl:pb-12 2xl:pb-13 3xl:pb-15"><a href="https://www.straitstimes.com/business/invest/eras-new-ceo-marcus-chu-cabbys-son-rides-real-estate-wave" class="border-b-2 border-blue-700 break-words">https://www.straitstimes.com/business/invest/eras-new-ceo-marcus-chu-cabbys-son-rides-real-estate-wave</a></p>
      </div>
      <img src="../assets/image6.png" alt="" class="mx-auto py-10 lg:py-11 xl:py-12 2xl:py-13 3xl:py-15  sm:px-40 px-32">
      <p class="text-md md:text-lg  font-medium font-lato">May 13, 2021 </p>
      <p class="text-xl sm:text-lg md:text-2xl font-semibold pt-1 italic font-lato px-4"> Money 89.3FM #PrimeTime interview with Marcus Chu</p>
      <img src="../assets/screenshot.png" alt="" class="w-3/4 mx-auto pt-10 lg:pt-11 xl:pt-12 2xl:pt-13 3xl:pt-15">
      <iframe class="h-80 sm:h-96 md:h-100 lg:h-110 xl:h-120 2xl:h-130 3xl:h-140 pt-10 lg:pt-11 xl:pt-12 2xl:pt-13 3xl:pt-15 w-3/4  pb-20 sm:pb-22 md:pb-24 lg:pb-26 xl:pb-28 2xl:pb-30 3xl:pb-32 mx-auto" src="https://www.youtube.com/embed/jA6pZ3y-x8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <!--homepage content ends here-->
</template>

<script>

export default {
  name: 'Home',
  title: 'Home'
}

</script>

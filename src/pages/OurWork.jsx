import React from 'react'
import Layout from '../components/Layout'
import pic1 from '../assets/photos/002-01.jpg'
import pic2 from '../assets/photos/close-up-smiley-01.jpg'
import pic3 from '../assets/photos/young--01.jpg'
import pic4 from '../assets/photos/female-patient-receiving-dental-treatment-01.jpg'
import { SwiperSlide  ,Swiper} from 'swiper/react'
import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
const OurWork = () => {
  return (
    <Layout>
            <section className='mb-5'>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
       className='!w-full h-full relative sm:!p-10 !p-3 !mt-5'
          autoplay={{
          delay: 2000, // هر ۳ ثانیه عوض بشه
          disableOnInteraction: false, // بعد از لمس یا hover هم ادامه بده
        }}
      speed={1000} // سرعت fade
      loop={true}
    >
      
      <SwiperSlide className='!w-full sm:!h-[700px] !h-[500px] !relative'>
            <img className='w-full h-full  !object-cover' src={pic1} alt=''/>
             <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-end items-start p-3 sm:p-20 '>
          <h1 className='text-white font-sans font-bold text-xl sm:text-2xl'>Orthodontie</h1>
          <p className='text-white font-sans text-md sm:text-xl'>Bij Tandis wordt orthodontie ontworpen met een wetenschappelijke en minimaal invasieve aanpak. We analyseren de gezichtsstructuur, de beet en de groeipatronen zorgvuldig om een behandelplan te creëren dat zowel de functie verbetert als een natuurlijke en evenwichtige glimlach vormt.
Ons doel is niet alleen rechte tanden, maar een harmonieuze balans tussen esthetiek en gezondheid.</p>

          </div>
                <div className='w-full z-5 h-full absolute top-0 left-0 bg-black opacity-35'></div>
      </SwiperSlide>  
      <SwiperSlide className='!w-full  sm:!h-[700px] !h-[500px] !relative'>
         <img className='w-full h-full !object-cover' src={pic2} alt=''/>
          <div className='absolute top-0  z-10 left-0 w-full h-full flex flex-col justify-end items-start p-3 sm:p-20 '>
          <h1 className='text-white font-sans font-bold text-xl sm:text-2xl'>Preventieve zorg</h1>
          <p className='text-white font-sans text-md sm:text-xl'>Preventie vormt de basis van een gezonde mond.
Met regelmatige controles, professionele reinigingen en persoonlijke mondhygiëne-adviezen helpen wij problemen in een vroeg stadium te voorkomen.
Deze aanpak behoudt niet alleen de gezondheid van het gebit, maar vermindert ook de noodzaak van complexere behandelingen.
Wij richten ons op langdurige, bewuste en patiëntgerichte zorg.</p>

          </div>
            <div className='w-full z-5 h-full absolute top-0 left-0 bg-black opacity-35'></div>
      </SwiperSlide>
       <SwiperSlide className='!w-full sm:!h-[700px] !h-[500px] !relative'>
         <img className='w-full h-full  !object-cover' src={pic4} alt=''/>
          <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-end items-start p-3 sm:p-20 '>
          <h1 className='text-white font-sans text-xl font-bold sm:text-2xl'>Esthetische tandheelkunde</h1>
          <p className='text-white font-sans text-md sm:text-xl'>Esthetiek bij Tandis is het resultaat van zorgvuldig geplande, natuurlijk ogende behandelingen.
Met behoud van zoveel mogelijk gezond tandweefsel en het gebruik van minimaal invasieve technieken creëren we een glimlach die zowel natuurlijk als duurzaam is.
Of het gaat om subtiele verbeteringen of een volledige smile makeover — wij streven naar schoonheid die past bij de functie, persoonlijkheid en harmonie van elke patiënt.</p>

          </div>
            <div className='w-full h-full z-5 absolute top-0 left-0 bg-black opacity-35'></div>
      </SwiperSlide>

         <SwiperSlide className='!w-full sm:!h-[700px] !h-[500px] !relative'>
         <img className='w-full h-full object-cover sm:object-center object-right' src={pic3} alt=''/>
          <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-end items-start p-3 sm:p-20 '>
          <h1 className='text-white font-sans text-xl font-bold sm:text-2xl'>Restauratieve tandheelkunde</h1>
          <p className='text-white font-sans text-md sm:text-xl'>Restauratieve zorg bij Tandis is gericht op het herstellen van gezondheid, functie en sterkte van beschadigde tanden.
Met hoogwaardige materialen en moderne technieken reconstrueren we tanden die aangetast, gebroken of verzwakt zijn, zodat ze er natuurlijk uitzien en goed blijven functioneren.
Onze focus ligt op het behouden van zoveel mogelijk gezond weefsel en het herstellen van evenwicht binnen het gebit.</p>

          </div>
            <div className='w-full h-full z-5 absolute top-0 left-0 bg-black opacity-35'></div>
      </SwiperSlide>
     
    </Swiper>
    </section>
    </Layout>
  )
}

export default OurWork
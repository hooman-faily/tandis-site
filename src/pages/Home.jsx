import React from 'react'
import { Link } from 'react-router-dom'
import impossible from "../assets/photos/Impossible-to-Replicate-Image-panorama-af0feaa553d82aae8cdcd0e318d3346f-yzqcri75k86e.jpg"
import { Swiper, SwiperSlide  } from "swiper/react";
import {  Autoplay, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import BeforeAndAfter from '../components/BeforeAndAfter';
import Layout from '../components/Layout';
import RevealOnScroll from '../components/RevealOnScroll';
import LazyBackground from '../components/LazyBackground';
import img0 from '../assets/photos/image0.jpeg'
import location from '../assets/photos/location.png';
import doctor from '../assets/photos/ChatOn-image-(1).jpg'
import tools from '../assets/photos/tools.jpeg'
import ortho from '../assets/photos/ortho.jpeg'
import tools2 from '../assets/photos/tools2.jpeg'
import tooth2 from '../assets/photos/tooth2.jpeg'

const Home = () => {


  return (
    <Layout>
 
   
      <Swiper
         modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, // بعد از لمس یا hover هم ادامه بده
      }}
      speed={1000} // سرعت fade
      loop={true}
      className=" !relative !h-full"
      >

      <SwiperSlide>
   <div className='w-full relative sm:h-[800px] h-[450px]  bg-cover bg-center sm:bg-top bg-[url("assets/photos/smily.jpeg")] mb-5'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-45'></div>
        <div className='w-full h-full absolute top-0 left-0 sm:w-1/2 p-8 flex flex-col justify-end items-start gap-10 sm:gap-20'>
          <p className='font-font-sans text-white text-xl '>In Tandis Tandartspraktijk hechten wii waarde aan de specifieke behoeften van elke patient en luisteren wij daar met aandacht naar.</p>
          <Link to={"/location"}   className='bg-[#A2D1DC] min-w-[100px] text-white font-sans font-bold p-5 rounded-xl'>AFSPRAAK MAKEN</Link>
        </div>

    </div>
</SwiperSlide>
<SwiperSlide>
   <LazyBackground src={location}  className="w-full relative sm:h-[800px] h-[450px] bg-cover bg-center sm:bg-bottom  bg-no-repeat   sm:bg-no-repeat sm:bg-cover">
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-45 z-10'>

        </div>

        <div className='w-full absolute top-0 bottom-0 h-full sm:flex sm:flex-col sm:gap-5 sm:items-left sm:justify-end z-20 sm:p-10 flex flex-col justify-end items-center p-10 gap-3'>
        <h1 className='w-full text-white  sm:text-2xl text-2xl font-sans font-bold uppercase'>Jouw glimlach, ons centrum</h1>
        <p className='font-sans text-white text-lg sm:text-lg w-full sm:text-left'>In het hart van Antwerpen begint jouw nieuwe glimlach.</p>

        </div>

    </LazyBackground>
</SwiperSlide>
<SwiperSlide>
  <LazyBackground src={img0}  className="w-full relative sm:h-[800px] h-[450px] bg-cover bg-top  bg-no-repeat   sm:bg-no-repeat sm:bg-cover">
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-15 z-10'>

        </div>

        <div className='w-full absolute top-0 bottom-0 h-full sm:flex sm:flex-col sm:gap-5 sm:items-left sm:justify-end z-20 sm:p-10 flex flex-col justify-end items-center p-10 gap-3'>
        <h1 className='w-full text-white  sm:text-2xl text-xl font-sans font-bold uppercase'>Tandheelkunde op een Hoger Niveau</h1>
        <p className='font-sans text-white text-lg sm:text-lg w-full sm:text-left'>Het gaat niet alleen om je glimlach, maar om het zelfvertrouwen dat deze je elke dag geeft.</p>

        </div>

    </LazyBackground>
</SwiperSlide>


      </Swiper>
    
    <section className='w-full sm:mt-5 sm:p-5 sm:flex sm:flex-col sm:gap-5 mt-5 p-5 flex flex-col gap-5'>
    <h1 className='w-full text-center  sm:text-2xl text-2xl font-sans font-bold'><Link className='hover:text-[#A2D1DC]'>Ontdek een nieuwe manier van glimlachen bij Tandis</Link></h1>
    <p className='w-full text-center text-lg font-sans'>Tandis Dental Practice is een moderne en hoogwaardige tandartspraktijk in het hart van Antwerpen. Wij geloven dat een tandartsbezoek aangenaam, comfortabel en stressvrij moet zijn. Daarom combineren we een zachte aanpak met de nieuwste technologieën, zodat elke patiënt – van jong tot oud – zich veilig en ontspannen voelt.
Ga je niet graag naar de tandarts? Dan nodigen we je uit om bij ons het verschil te ervaren. Onze persoonlijke begeleiding en warme sfeer zorgen ervoor dat je je meteen thuis voelt. Smile Dental Clinic: waar jouw gezonde, stralende glimlach onze prioriteit is.</p>
    <div className='w-full sm:flex sm:flex-row flex flex-col'>
                <div className='sm:w-[33%] w-full sm:mt-1 mt-5 flex flex-col gap-2 font-sans'>
                  <div className='sm:h-[400px] h-[300px] w-full'> <img className='h-full w-full object-cover' src={tools} alt='artistry'/></div>
                 <div className='w-full sm:p-3 p-3'>
                     <h1 className='text-xl font-sans font-bold uppercase'><Link className='hover:text-[#A2D1DC]'>De Kunst van Moderne Tandheelkunde</Link></h1>
                  <p className=''>Digitale precisie en ambachtelijke expertise komen samen voor een glimlach die écht transformeert.</p>
                 </div>
                </div>
                 <div className='sm:w-[33%] w-full flex flex-col sm:mt-1 mt-5 gap-2 font-sans'>
                  <div className='sm:h-[400px] h-[300px] w-full'> <img className='h-full w-full object-cover' src={doctor} alt='artistry'/></div>
                    <div className='w-full sm:p-3 p-3'>
                         <h1 className='text-xl font-sans font-bold uppercase'><Link className='hover:text-[#A2D1DC]'>Een Nieuwe Standaard van Kwaliteit</Link></h1>
                  <p className=''>Met zorg ontworpen en met precisie uitgevoerd — ervaar tandheelkunde waarbij kwaliteit geen belofte is, maar de basis.</p>
                    </div>
                </div>
                <div className='sm:w-[33%] flex flex-col gap-2 sm:mt-1 mt-5  font-sans'>
                  <div className='sm:h-[400px] h-[300px] w-full'> <img className='w-full h-full object-cover' src={ortho} alt='artistry'/></div>
                    <div className='w-full sm:p-3 p-3'>
                         <h1 className='text-xl  font-sans font-bold uppercase'><Link className='hover:text-[#A2D1DC]'>Uniek voor Jou, Onmogelijk te Kopiëren</Link></h1>
                  <p className=''>Onze aanpak combineert geavanceerde cosmetische tandheelkunde met verfijnd vakmanschap. Zo ontstaat een glimlach die volledig uniek is—natuurlijk, authentiek en helemaal van jou.</p>
                    </div>
                </div>

    </div>

    </section>

    {/* swiper */}
    <section className='w-full'>

            <div className="sm:w-full sm:h-screen h-[700px] w-full">
        <Swiper 
        modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 3000, // هر ۳ ثانیه عوض بشه
        disableOnInteraction: false, // بعد از لمس یا hover هم ادامه بده
      }}
      speed={1000} // سرعت fade
      loop={true}
      className=" !relative !h-full"
        >

          <SwiperSlide className='!w-full !h-full'><img className='!h-full w-full sm:object-cover  object-cover' src={tooth2} alt=''/></SwiperSlide>
          <SwiperSlide className='!w-full !h-full'><img className='!h-full w-full sm:object-cover  object-cover' src={tools2} alt=''/></SwiperSlide>
          <SwiperSlide className='!w-full !h-full'><img className='!h-full w-full sm:object-cover  object-cover' src={impossible} alt=''/></SwiperSlide>
          <div className='absolute top-0 left-0 w-full h-full bg-black z-10 opacity-35'>

          </div>
           <div className='absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end items-center sm:items-start pb-5'>
           <div className='p-5 flex flex-col gap-4 w-full sm:w-1/2'>
            <h1 className='sm:text-3xl text-xl text-white font-sans font-bold w-full'>Wij herdefiniëren wat moderne tandheelkunde kan zijn.</h1>
            <p className='font-sans text-lg sm:text-lg text-white'>Een standaard tandartspraktijk voldeed niet — omdat Tandis allesbehalve standaard is.
Onder leiding van onze specialisten creëren we een nieuwe benadering van mondzorg: van een noodzakelijke afspraak naar een ervaring die je écht wilt.
Vanaf het moment dat je binnenstapt, begint een unieke reis die volledig rond jou is ontworpen.</p>
            <div className='text-white sm:text-xl font-sans font-bold uppercase sm:hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-white hover:border-none group inline-block'>Over ons
            <span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
            </Link>
              
            </div>
            </div>
          </div>

        </Swiper>
    </div>
    </section>
  

{/* <BeforeAndAfter/> */}

    
    <RevealOnScroll className='w-full bg-black text-white sm:p-5 p-5'>
    <h1 className='w-full text-center font-sans font-bold text-xl p-2 uppercase'>Tandheelkunde, Heruitgevondnen</h1>
    <p className='text-center font-sans text-lg sm:w-[70%] w-[80%]  m-auto'>Bij Tandis combineren we moderne technieken met zorg die rustig, duidelijk en persoonlijk aanvoelt. We richten ons op kwaliteit, precisie en een patiëntervaring die gewoon klopt.</p>
    </RevealOnScroll>
    <RevealOnScroll className='sm:flex sm:flex-row flex flex-col'>
            <div className={`sm:w-[33.33%] w-full sm:h-[600px] h-[400px] bg-cover bg-left relative bg-no-repeat  bg-[url("assets/photos/ChatOn-image.jpg")] `}>
              <div className='w-full h-full bg-black opacity-35 absolute top-0 left-0'>
     
              </div>
              <div className='absolute w-full h-full top-o left-0 p-5 flex flex-col justify-end items-start'>
                <h1 className='text-white w-full text-xl font-sans font-bold  uppercase '>Plan een Consultatie</h1>
                <p className='text-white w-full   font-sans'>Bij Tandis begint jouw traject met een persoonlijk gesprek. We luisteren naar je wensen, leggen de mogelijkheden duidelijk uit en bekijken samen welke behandeling het beste bij jou past.</p>
              </div>
            </div>

            <div className='sm:w-[33.33%] w-full sm:h-[600px] h-[400px] bg-cover bg-center relative bg-no-repeat  bg-[url("assets/photos/tandis2.jpg")]'>
              <div className='w-full h-full bg-black opacity-35 absolute top-0 left-0'>
     
              </div>
              <div className='absolute w-full h-full top-o left-0 p-5 flex flex-col justify-end items-start'>
                <h1 className='text-white w-full text-xl font-sans font-bold  uppercase '>Verander je glimlach</h1>
                <p className='text-white w-full   font-sans'>Herstellingen van tanden moeten eruitzien én aanvoelen als echte tanden. Bij Tandis zorgen we voor een natuurlijke glimlach door nauwkeurig, bijna onzichtbaar werk dat jouw uitstraling versterkt zonder dat het opvalt.</p>
              </div>
            </div>
             <div className='sm:w-[33.33%] w-full sm:h-[600px] h-[400px] bg-cover bg-center relative bg-no-repeat  bg-[url("assets/photos/tandis3.jpg")]'>
              <div className='w-full h-full bg-black opacity-35 absolute top-0 left-0'>
     
              </div>
              <div className='absolute w-full h-full top-o left-0 p-5 flex flex-col justify-end items-start'>
                <h1 className='text-white w-full text-xl font-sans font-bold  uppercase '>Ervaar het verschil</h1>
                <p className='text-white w-full font-sans'>Je glimlachtransformatie bij Tandis is nog maar het begin. Met voortdurende professionele reinigingen en regelmatige tandheelkundige zorg helpen we je een glimlach te behouden die niet alleen mooi blijft, maar vooral gezond.</p>
              </div>
            </div>

    </RevealOnScroll>
    {/* know dr behnam */}
    <RevealOnScroll className='w-full sm:h-[700px] h-[500px]'>
    <LazyBackground src={doctor} className='w-full sm:h-[700px] h-[500px] sm:bg-cover sm:bg-top  bg-center bg-cover  bg-no-repeat relative'>
    <div className='w-full h-full absolute bg-black top-0 left-0 opacity-25'></div>
        <div className='w-full h-full absolute top-0 left-0 flex justify-start items-center p-5'>
           <h1 className='text-white  font-bold uppercase text-center text-2xl z-10 '>Meet the man behind the brand</h1>
           <p></p>
        </div>
    </LazyBackground>


    </RevealOnScroll>
    </Layout>
  )
}

export default Home
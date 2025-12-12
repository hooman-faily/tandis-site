import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide  } from "swiper/react";
import "swiper/css";
import {  Autoplay,Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import swiper1 from "../assets/photos/swiper1.jpg"
import swiper2 from "../assets/photos/swiper2.jpg"
import swiper3 from "../assets/photos/swiper3.jpg"

const AboutUs = () => {
  return (
    <Layout>
                        <section className='w-full sm:h-[800px] bg-[url("assets/photos/tandis3.jpg")] sm:bg-cover sm:bg-center relative h-[400px] bg-center bg-cover'>
                                <div className='w-full h-full absolute top-0 left-0 bg-black opacity-25 z-5'></div>
                                <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center sm:items-start items-center  p-5 sm:p-8 gap-5'>
                                <div className='sm:w-1/2'>
                                    <h1 className='text-white sm:text-2xl text-xl font-sans font-bold w-full'>Ons Team</h1>
                                    <p className='text-white font-sans text-lg w-full'>Bij Tandis werkt ons klinisch en administratief team met zorg, respect en volledige toewijding aan de gezondheid van elke patiënt.</p>
                                    <p className='text-white font-sans text-lg  w-full'>Met een warme en professionele benadering creëren wij een rustige en betrouwbare behandelervaring.</p>
                                    <p className='text-white font-sans text-lg w-full'>Onze focus ligt op persoonlijke en wetenschappelijk onderbouwde zorg.</p>
                                    </div>
                                </div>
                        </section>

                        <section className='w-full p-8 flex flex-col sm:justify-center  sm:items-start'>
                        <h1 className='sm:text-3xl font-semibold uppercase w-full text-xl'>Wat Wij Aanbieden</h1>
                        <p className='sm:w-[60%]  w-full font-sans'>Bij Tandis bieden wij een selectie van tandheelkundige diensten aan met focus op gezondheid, preventie en een natuurlijke, duurzame glimlach.Onzedienstenomvatten:</p>
                                <ul className='font-sans font-bold flex flex-col list-disc p-4 w-full sm:w-[60%] text-lg'>
                                    <li>Orthodontie</li>
                                    <li>Preventieve zorg</li>
                                    <li>Esthetischetandheelkunde</li>
                                    <li>Restauratieve tandheelkunde</li>
                                </ul>
                                <p className='sm:w-[60%]'>Elke behandeling bij Tandis wordt ontworpen met een gezondheidsgerichte en minimaal invasieve aanpak voor een natuurlijk en langdurig resultaat.</p>
                        </section>

                        {/* <section className='w-full p-5 sm:flex sm:gap-0 sm:flex-row sm:justify-between flex flex-col gap-10'>
              <div className='sm:w-[49%] w-full sm:h-[700px] h-[350px] bg-center bg-cover bg-[url("assets/photos/ChatOn-image-(1).jpg")] relative'>
                  <div className='absolute sm:bg-white top-[40%] left-[20%]  sm:top-[90%] sm:left-16 sm:w-[80%] sm:h-[150px] p-5 sm:flex sm:flex-row sm:justify-center sm:items-start z-20'>
                  <div className='sm:text-black text-white sm:text-lg font-sans font-bold  uppercase hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-white sm:border-black hover:border-none group inline-block'>Tandis
                              <span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
                              </Link>
                                
                              </div>
                  </div>
<div className='block sm:hidden absolute w-full h-full top-0 left-0 bg-black opacity-35 z-10'></div>
              </div>

             <div className='sm:w-[49%] w-full sm:h-[700px] h-[350px] bg-center bg-cover bg-[url("assets/photos/dental-team.jpg")] relative'>
                  <div className='absolute sm:bg-white top-[40%] left-[20%]   sm:top-[90%] sm:left-16 sm:w-[80%] sm:h-[150px] p-5 flex justify-center items-start z-20'>
                  <div className='sm:text-black  text-white sm:text-lg font-sans font-bold  uppercase hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-white sm:border-black hover:border-none group inline-block'>Maak Kennis met ons team<span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
                              </Link>
                                
                              </div>
                             
                  </div>
              <div className='block sm:hidden absolute w-full h-full top-0 left-0 bg-black opacity-35 z-10'></div>
              </div>
                        </section> */}

                        <section className='w-full sm:mt-10 p-5 sm:flex sm:flex-row relative  bg-cover bg-center sm:bg-none bg-[url("assets/photos/image1-1.jpg")]'>
                <div className='sm:w-1/2 relative'>
                  <div className='p-5 flex flex-col gap-8  sm:bg-white sm:text-black text-white sm:w-full  sm:absolute left-[30%] top-[20%]'>
                    <h1 className='font-sans font-bold text-xl uppercase'>Ons Toegewijd en Deskundig Team</h1>
                    <p className='font-sans text-md'>In Antwerpen vormt ons team een hechte en gespecialiseerde groep professionals die zorg biedt met precisie, aandacht en een duidelijke focus op gezondheid. Met een combinatie van expertise, empathie en moderne behandelmethoden streven wij ernaar elke patiënt een veilige, transparante en comfortabele ervaring te bieden. Onze benadering is zorgvuldig, minimaal invasief en volledig afgestemd op het creëren van een natuurlijke en duurzame glimlach.</p>
                  
                  </div>
                </div>
                <div className='sm:w-1/2 sm:h-[600px] hidden sm:block sm:mt-0 mt-5 w-full h-[400px] bg-cover bg-center bg-[url("assets/photos/image1-1.jpg")]'>
                </div>
                        </section>

  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
       className='!w-full h-full relative !mt-5'
          autoplay={{
          delay: 2000, // هر ۳ ثانیه عوض بشه
          disableOnInteraction: false, // بعد از لمس یا hover هم ادامه بده
        }}
      speed={1000} // سرعت fade
      loop={true}
    >
      
      <SwiperSlide className='!w-full !p-5 sm:!h-[700px] !h-[500px] !relative'>
            <img className='w-full h-full  !object-cover' src={swiper1} alt=''/>
             <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-20 '>
          <h1 className='text-white font-sans font-bold text-2xl'>Volledig op maat en opvallend natuurlijk</h1>
          <p className='text-white font-sans text-xl'>Onze benadering van handgelaagde porseleinen facings combineert digitale en analoge technieken voor een natuurlijk en duurzaam resultaat.</p>

          </div>
         
      </SwiperSlide>  
      <SwiperSlide className='!w-full !p-5 sm:!h-[700px] !h-[500px] !relative'>
         <img className='w-full h-full  !object-cover' src={swiper2} alt=''/>
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-20 '>
          <h1 className='text-white font-sans font-bold text-2xl'>Het herdefiniëren van moderne tandheelkunde</h1>
          <p className='text-white font-sans text-xl'>Bij Tandis streven we naar vooruitgang in elke patiëntervaring, met precisie, helderheid en duurzame, gezondheidsgerichte zorg.</p>

          </div>
      </SwiperSlide>
       <SwiperSlide className='!w-full !p-5 sm:!h-[700px] !h-[500px] !relative'>
         <img className='w-full h-full  !object-cover' src={swiper3} alt=''/>
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-20 '>
          <h1 className='text-white font-sans font-bold text-2xl'>Vorm en functie in harmonie</h1>
          <p className='text-white font-sans text-xl'>Elke restauratie wordt met de hand vervaardigd met porsele poeder en een penseel om de natuurlijke uitstraling van een tand na te bootsen, de mondgezondheid te ondersteunen en de harmonie van het gezicht te behouden.</p>

          </div>
      </SwiperSlide>
     
    </Swiper>
 
 


    </Layout>
  )
}

export default AboutUs
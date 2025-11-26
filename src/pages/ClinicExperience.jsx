import React from 'react'
import Layout from '../components/Layout'
import BeforeAndAfter from '../components/BeforeAndAfter'

const ClinicExperience = () => {
  return (
    <Layout>
                <div className='w-full sm:h-[700px] sm:bg-cover sm:bg-center bg-[url("assets/photos/clinicBg.jpg")] relative'>
                    <div className='absolute sm:w-full sm:h-full bg-black opacity-35'></div>
                    <div className='sm:absolute sm:top-0 sm:w-full sm:h-full sm:left-0 sm:p-5 sm:flex sm:flex-col sm:items-start sm:justify-center sm:gap-5'>
                        <h1 className='uppercase text-white text-2xl font-brandonBold'>REDEFINING EXCELLENCE</h1>
                        <p className='text-white font-brandon text-xl'>Ben's Aesthetic is the unrivaled dental destination for want-based treatment and life-changing results.</p>
                    </div>

                 
                </div>
                   <div className='w-1/2 sm:flex sm:flex-col sm:gap-3 sm:p-5 font-brandon text-lg'>
                            <h1 className='font-brandonBold sm:text-2xl  uppercase'>About Ben's Clinic Apa Experience</h1>
                            <p>It only takes a moment to realize Apa Aesthetic is no ordinary dentist’s office. Apa Aesthetic is an unparalleled disrupter in an industry that has for far too long relied on one-size-fits-all solutions.</p>
                            <p>Led by Dr. Michael Apa, we have set a new standard for veneers—one that customizes every step to produce the most natural, one-of-a-kind results for every client.</p>
                            <p>Apa Aesthetic smile makeover patients are assessed holistically and enjoy access to treatments outside of the cosmetic umbrella. From cleanings to fillings, we do it all under one roof.</p>

                    </div>
                    <div className='w-full bg-black sm:flex sm:p-8'>
                    <div className='w-1/2 sm:flex sm:flex-col sm:gap-5 sm:p-5'>
                      <div>
                        <h1 className='uppercase text-white sm:text-2xl font-brandonBold'>what to expect</h1>
                        <p className='text-white font-brandon'>At Ben's Aesthetic, we continually challenge the status quo, finding new ways to improve our treatment plans, promote oral health and elevate the world of dentistry.</p>
                      </div>
                       <div>
                        <h1 className='uppercase text-[#A2D1DC] sm:text-2xl font-brandonBold'>step into comfort.</h1>
                        <p className='text-white font-brandon'>Our offices reflect our standard of care. Museum-worthy art adorns the walls, while a client comfort list offers access to a cashmere blanket, noise-canceling headphones, a ceiling-mounted TV and an array of CBD confections.</p>
                      </div>
                       <div>
                        <h1 className='uppercase text-[#A2D1DC] sm:text-2xl font-brandonBold'>CONNECT AND COMMUNICATE.</h1>
                        <p className='text-white font-brandon'>From your smile makeover to aftercare, we prioritize open communication. At each step, we discuss your goals, present treatment options and welcome your feedback. This collaborative approach promises final results that align with your expectations, for a smile you’ll love.</p>
                      </div>
                       <div>
                        <h1 className='uppercase text-[#A2D1DC] sm:text-2xl font-brandonBold'>EXPERIENCE CUSTOMIZATION.</h1>
                        <p className='text-white font-brandon'>Dr. Behnam has assembled the world's most accomplished ceramists, in technical expertise and artistic talent, to deliver one-of-a-kind smiles. Watch as our ceramists hand-craft </p>
                      </div>
                       <div>
                        <h1 className='uppercase text-[#A2D1DC] sm:text-2xl font-brandonBold'>ENJOY LIFELONG CARE.</h1>
                        <p className='text-white font-brandon'>The end of your smile makeover marks the beginning of your new journey with us, aftercare. We have the training and tools to ensure the health and longevity of your treatment. Plan to see us quarterly or, at a minimum, annually for a seamless aftercare experience.</p>
                      </div>

                    </div>
                    <div className='sm:w-1/2 sm:h-[600px] sm:bg-center sm:bg-cover  bg-[url("assets/photos/unitPic.jpg")]'></div>

                    </div>
                    <BeforeAndAfter/>

    </Layout>
  )
}

export default ClinicExperience
import React from 'react';
import Banner from '../Images/Banner1.png';
import Send from '../Logos/Send.svg';
import Line2 from '../Logos/Line2.svg';
import Rectangle from '../Logos/Rectangle.svg';
import Collage from '../Logos/Collage.svg';
import Counter1 from '../Logos/Counter1.svg';
import Counter2 from '../Logos/Counter2.svg';
import Counter3 from '../Logos/Counter 3.svg';
import GroupImage from '../Logos/Group 29.svg';
import Illustration from '../Logos/Illustration & Title.svg';
import Tick from '../Logos/Tickmark.svg';
import locate from '../Logos/Android Rectangle.svg';
import speed from '../Logos/Speed Rectangle.svg';
import bulb from '../Logos/Bulb Rectangle.svg';
import Testimonials from '../Logos/Testimonials.svg';
import logo from '../Logos/Logo.svg';
import group30 from '../Logos/Group30.svg';

export default function Main() {
  return (
    <div>
      <div>
        <h1 className='ml-[112px] mt-[220px] w-[596px] h-[64px] flex-shrink-0 text-rgba-[0-0-0-87] font-roboto text-4xl font-bold leading-[64px]'>
          Aenean Facilisis Vitae
        </h1>
        <p className='ml-[112px] mt-[25px] text-rgba-0-0-0-87 font-roboto text-xl font-medium leading-[36px]'>
          Lorem ipsum dolor sit amet consectetur adipiscing
        </p>
        <p className='ml-[112px] mt text-rgba-0-0-0-87 font-roboto text-xl font-medium leading-[36px]'>
          Integer id orci sed ante tincidunt
        </p>
        <button className="ml-[112px] mt-[24px] text-blue-400 text-center font-roboto text-base font-medium uppercase flex w-[211px] h-[50px] rounded-lg border border-blue-400 bg-white shadow-md p-[4px] justify-center items-center flex-shrink-0">
          Write To Us
          <img src={Send} alt='Send Button' className='ml-[20px] w-[15px] h-[18px]' />
        </button>
      </div>
      <div>
        <img alt='Banner' className="w-[691px] h-[416px] mt-[-240px] ml-[600px]" src={Banner} />
      </div>
      <div className='flex'>
        <div className='ml-[112px]'>
          <p className='mt-[191px] text-blue-500 font-roboto text-3xl font-medium leading-[42px]'>
            Business Solution
          </p>
          <p className='mt-[7px]'>Interdum et malesuada fames ac ante...</p>
          <img alt="rectangle" className="mt-[9px] ml-[112px] w-[150px] h-[6px] flex-shrink-0 rounded-3 bg-blue-500 " src={Rectangle} />
        </div>
        <div>
          <img alt="line" className="ml-[33px] mt-[198px] w-[2px] h-[65px]" src={Line2} />
        </div>
        <div className='ml-[112px]'>
          <p className='mt-[191px] text-rgba-0-0-0-87 font-roboto text-3xl font-medium leading-[42px]'>
            Free project quote
          </p>
          <p className='mt-[7px]'>Interdum et malesuada fames ac ante...</p>
        </div>
        <div>
          <img alt="line" className="ml-[33px] mt-[198px] w-[2px] h-[65px]" src={Line2} />
        </div>
        <div className='ml-[112px]'>
          <p className='mt-[191px] text-rgba-0-0-0-87 font-roboto text-3xl font-medium leading-[42px]'>
            Nulla lobortis nunc
          </p>
          <p className='mt-[7px]'>Interdum et malesuada fames ac ante...</p>
        </div>
      </div>
      <div className='mt-[112px] ml-[] flex'>
        <img alt='collage' src={Collage} />
        <div>
          <p className='w-[546px] ml-[95px] mt-[135px] h-[43px] flex-shrink-0 text-[rgba-0-0-0-87] font-roboto text-xl font-medium leading-[42px]'>
            Nulla lobortis nunc vitae purus facilisis
          </p>
        </div>
        <div>
          <p className='ml-[-545px] mt-[173px]'>Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus</p>
          <p className='ml-[-545px] mt-[0.5px]'>tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus</p>
          <p className='ml-[-545px] mt-[0.5px]'>facilisis semper.</p>
        </div>
      </div>
      <div className='flex ml-[733px] mt-[-380px]'>
        <img alt='+200' src={Counter1} />
        <img alt='+500' src={Counter2} />
        <img alt='+300' src={Counter3} />
      </div>
      <div className='mt-[150px]'>
        <img alt='GroupImage' src={GroupImage} />
      </div>
      <div className='flex'>
        <div className='mt-[80px]'>
          <img alt='Illustration of icons' src={Illustration} />
        </div>
        <div className='ml-[103px] mt-[123px] flex-col text-rgba-0-0-0-87 font-roboto text-xl font-medium leading-[42px]'>
          <p>Nulla lobortis nunc vitae nisi semper velit</p>
          <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px]'>
            Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus
          </p>
          <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px]'>
            tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus
          </p>
          <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px]'>
            facilisis semper.
          </p>
        </div>
        <div className='flex'>
          <div className='flex'>
            <div className='flex-col ml-[-495px]'>
              <img className='mt-[275px]  rounded-[6px] bg-blue-200 w-[24px] h-[24px] transform rotate-45 flex-shrink-0' alt='tick' src={Tick} />
              <p className='mt-[1px] text-rgba-0-0-0-87 font-roboto text-xl font-medium leading-[42px]'>Nulla lobortis nunc</p>
              <p className='mt[1px] text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px]'>Interdum et malesuada fames ac ante</p>
              <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px]'> ipsum primis in faucibus.</p>
            </div>
            <div className='flex-col'>
              <img alt='locate' src={locate} className='rounded-[6px] bg-blue-200 w-[24px] h-[24px] transform rotate-45 flex-shrink-0 mt-[275px] ml-[50px]' />
              <p className='mt-[1px] text-rgba-0-0-0-87 font-roboto text-xl font-medium leading-[42px] ml-[55px]'>Vestibulum faucibus</p>
              <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px] ml-[55px]'>In id nisi id neque venenatis molestie</p>
              <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px] ml-[55px]'> Quisque lacinia purus ut libero facilisis.</p>
            </div>
          </div>
          <div className='flex'>
            <div className='flex-col ml-[-590px]'>
              <img alt='speed' src={speed} className='mt-[435px]  rounded-[6px] bg-blue-200 w-[24px] h-[24px] transform rotate-45 flex-shrink-0' />
              <p className='text-rgba-0-0-0-87 font-roboto text-xl font-medium leading-[42px]'> Suspendisse porttitor</p>
              <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px]'>unc quis sem quis velit tincidunt congue</p>
              <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px]'> a sit amet ante.</p>
            </div>
            <div className='flex-col '>
              <img alt='bulb' src={bulb} className='rounded-[6px] bg-blue-200 w-[24px] h-[24px] transform rotate-45 flex-shrink-0 mt-[435px] ml-[35px]' />
              <p className='text-rgba-0-0-0-87 font-roboto text-xl font-medium leading-[42px] ml-[40px] mt-[1px]'>Ut sed eros</p>
              <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px] ml-[40px]'>In hac habitasse platea dictumst. In mi</p>
              <p className='text-rgba-0-0-0-87 font-roboto text-base font-normal leading-[24px] ml-[40px]'> nulla, fringilla vestibulum finibus et.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[-90px]'>
        <img alt='testimonials' src={Testimonials} />
      </div>
      <div className='mt-[24px] ml-[240px]'>
        <img alt='logo' src={logo} />
      </div>
      <div className='flex-col'> 
        <p className='w-[323px] mt-[167.5px] ml-[137px] text-blue-700 font-roboto text-5xl font-bold leading-[78px]'>Case</p>
        <p className='w-[323px] mt-[px] ml-[137px] text-blue-700 font-roboto text-5xl font-bold leading-[78px]'> Studies </p>
      </div>
<div className='flex'>      <div className=' flex flex-col  mt-[20px] ml-[137px] w-[195px] text-center'>
        <p className=' mb-4 text-blue-700 font-roboto text-xl  font-normal leading-[36px] bg-blue-200 rounded-lg ml[30px] pr-[38px] '> Corporate</p>
        <div className='ml-[-20px]'>
          <p className=' mb-4 text-rgba-0-0-0-87 font-roboto text-xl font-normal leading-[36px]'>Advertising</p>
          <p className=' mb-4 text-rgba-0-0-0-87 font-roboto text-xl font-normal leading-[36px] ml-[-4px]'>Marketing</p>
          <p className=' mb-4 text-rgba-0-0-0-87 font-roboto text-xl font-normal leading-[36px] ml-[22px]'> Government</p>
          <p className=' mb-4 text-rgba-0-0-0-87 font-roboto text-xl font-normal leading-[36px] ml-[-8px]'>Creative</p>
        </div>
      </div>      <div className='ml-[120px] mt-[-170px]'><img alt='group30' src={group30} /></div>
</div>
<div className='flex-col w-[1215px] h-[168.206px] flex-shrink-0 rounded-3xl bg-blue-500 mt-[160px] ml-[130px]'> 
<div className=' mt-[-80px] pl-[-200px]'>
<p className='text-white font-roboto text-3xl font-bold font-normal ml-[87px] mt-[247px] pt-[43px]'>Ready to get started ?</p>
<p className='text-white font-roboto text-xl font-medium ml-[87px] mt-[10px] '>Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
</div>
<button className="ml-[879px] mt-[-64px] text-blue-400 text-center font-roboto text-base font-medium uppercase flex w-[235px] h-[50px] rounded-lg border border-blue-400 bg-white shadow-md p-[4px] justify-center items-center flex-shrink-0">
          Write To Us
          <img src={Send} alt='Send Button' className='ml-[20px] w-[15px] h-[18px]' />
        </button>
</div>
    </div>
    
  
  );
}

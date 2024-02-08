import React, { useState } from 'react'
import Star from './star'
import Text from './text'
import Button from './button'
import phone from './images/illustration-thank-you.svg'

const Box = () => {

  const [raqam, setRaqam] = useState("");
  const [open, setOpen] = useState(false);

  const chooseNumber = (e) => {
    setRaqam(e.target.textContent)
  }

  const submit = () => {
    setOpen(!open);
  }

  return (
    <section className='w-full h-screen bg-container flex items-center'>
      <div className="w-[450px] h-[450px] bg-box mx-auto rounded-3xl">
        <div className={`${open ? "hidden" : "flex"} flex-col items-start p-8 w-full gap-7`}>
          <Star />
          <Text align="left" heading={`How did we do?`} title="Please let us know how we did with your support request. All fedback is appreciated to help us improve our offering!" />
          <div className='flex justify-between w-full'>
            <Button choose={(e) => chooseNumber(e)} necha="1" />
            <Button choose={(e) => chooseNumber(e)} necha="2" />
            <Button choose={(e) => chooseNumber(e)} necha="3" />
            <Button choose={(e) => chooseNumber(e)} necha="4" />
            <Button choose={(e) => chooseNumber(e)} necha="5" />
          </div>
          <button onClick={submit} className='bg-button duration-100 w-full py-3 text-white font-semibold tracking-wider rounded-full active:text-button active:bg-white'>SUBMIT</button>
        </div>
        <div className={`${open ? "flex" : "hidden"} flex-col items-center p-8 w-full gap-7 h-100`}>
          <img src={phone} alt="hone img" />
          <div className='bg-choose rounded-full'>
            <p className='text-button py-2 px-4'>{raqam ? `You selected ${raqam} out of 5` : `Select a rate number.`}</p>
          </div>
          {raqam ?
            <Text align="center" heading="Thank you!" title="We appreciate you taking the time to give a rating If you ever need more support, don't hesitate to get in touch!" />
            :
            <button onClick={submit} className='py-3 px-16 bg-button text-white font-semibold duration-100 text-lg rounded-full active:bg-white active:text-button'>Restart</button>  
        }
        </div>
      </div>
    </section>
  )
}

export default Box
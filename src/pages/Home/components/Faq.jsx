import React from 'react'
import { faqArray } from '../../../utils/constant'
import Accrodian from './Accrodian'

const Faq = () => {
    return (
        <section className='my-20'>
            <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8'>Questions in mind?</h1> 
            {
                faqArray.map((faq) => (
                    <Accrodian data={faq}/>
                ))
            }
        </section>
    )
}

export default Faq

import React from 'react'
import { AiFillAppstore, } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title'
import Card from './Card'

const Features = () => {
  return (
    <section
      id='features'
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="Spending some time to set the right strategy gives you clear goals for business success, and connects your people and activities to those goals."
          icon={<FaBars />}
        />
        <Card
          title="App Development"
          des="Responsive websites built for an optimal user experience that achieves your business goals."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Search engine optimization regulations always evolve; Make your website fast, easy to find, and reach the widest audience possible."
          icon={<SiProgress />}
        />
        <Card
          title="Web Development"
          des="From corporate website development, e-commerce, custom web applications and product configurators, our code is intelligent."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design"
          des="Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience."
          icon={<SiAntdesign />}
        />
        <Card
          title="E-Commerce Solution"
          des="An eCommerce solution is a feature-filled, customisable online storefront and shopping cart that will be directly integrated into your website."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  )
}

export default Features

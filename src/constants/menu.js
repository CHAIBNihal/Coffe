import Cappacino from "../assets/menuCoffe/Cappacino.jpg"
import Mocha from "../assets/menuCoffe/Mocha.jpg"
import Latte from "../assets/menuCoffe/Latte.jpg"
import ColdJava from "../assets/menuCoffe/ColJava.jpg"

import men1 from "../assets/avatar/men1.jpg"
import men2 from '../assets/avatar/men2.jpg'
import wom1 from "../assets/avatar/wom1.jpg"
import wom2 from "../assets/avatar/wom2.jpg"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export const menuList = [
  {
    name: "Home",
    link: "#",

  },
  {
    name: "Our Coffe",
    link: "#",

  },
  {
    name: "Lovers",
    link: "#",

  },
  {
    name: "Contact Us",
    link: "#",

  }
]

export const MenuSection = [
  {
    img: Cappacino,
    title: "Cappacino",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor."
  },
  {
    img: Mocha,
    title: "Mocha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor."
  },
  {
    img: Latte,
    title: "Latte",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor."
  },
  {
    img: ColdJava,
    title: "Cold Java",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor."
  },
]

export const testimonials = [
  {
    name: 'Emma R.',
    image: wom1,
    title: 'Digital Nomad, Amsterdam',
    message:
      'CoffeOverDose is my productivity fuel. The cappuccino? Life-changing.',
  },
  {
    name: 'Leo M.',
    title: 'Startup Founder, San Francisco',
    image: men1,
    message:
      ' The baristas know how to spark joy and the cold brew? Elite.',
  },
  {
    name: 'Hana K.',
    title: 'UX Designer, Tokyo',
    image: wom2,
    message:
      ' Maybe it’s the smooth espresso, maybe it’s the cozy atmosphere. Either way, I’m hooked.',
  },
  {
    name: 'Luca D.',
    title: 'Artist, Rome',
     image : men2,
    message:
      'From the rich aroma to the artistic lattes, everything feels handcrafted with love. ',
  },
]

export const socialMedia = [
  { icon: Linkedin },
  { icon: Instagram },
  { icon: Facebook },
  { icon: Youtube },
]
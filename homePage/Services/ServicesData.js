import { MobileIcon, UxIcon } from "../../assets/icon";
import Link from "next/link"

export const ServicesData = [
  {
    id: 1,
    title: <Link href="/services/mobile-development"> Mobile Development </Link>,
    desc: <Link href="/services/mobile-development"> We provide expert business analysis, design, and development of mobile applications and provide further optimization and scale-up on demand. </Link>,
    icon: <Link href="/services/mobile-development"> <MobileIcon/> </Link>
  },
  {
    id: 2,
    title: "Web Development",
    desc: "We improve the software development and delivery process by  bringing together the best tools, solutions, and practices that allow organizations to automate the continuous delivery pipeline.",
  },
  {
    id: 3,
    title: "UI/UX Services",
    desc: "We conduct user research, create wireframes and prototypes, and discuss navigational schemes and information  to ensure that our customers’ end products are valuable assets to their business.",
    icon: <UxIcon/>
  },
  {
    id: 4,
    title: <Link href='/services/marketing-technology'> Marketing Technology </Link>,
    desc: <Link href='/services/marketing-technology'> We provide the customization our clients need to add content across multiple channels, integratetheir existing systems, and get their sites running perfectly for optimal user experience and authority. </Link>,
  },
  //   {
  //     includeData: {
  //       id: 6,
  //       title: "Find sponsors for your project",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra nulla ut mauris aliquet, ut vestibulum purus vestibulumFusce ex arcu, euismod nec consequat maximus Fusce ex arcu, euismod ne. Fusce pharetra nulla ut mauris aliquet, ut vestibulum purus  vestibulumFusce ex arcu, euismod nec consequat maximus Fusce ex arcu, euismod ne.",
  //     },
  //   },
];

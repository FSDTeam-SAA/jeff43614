import { StaticImageData } from "next/image";

export interface Service {
  id: number;
  title: string;
  slug?: string;
  description: string;
  image: string | StaticImageData;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Word stenciling",
    slug: "word-stenciling",
    description:
      "Typically NO PARKING or VISITORS but we can create any verbiage you need. These are more cost-effective and sightly than having metal signs and clearly communicate important parking lot information like designated spaces, restrictions, or directions; ultimately improving organization and safety in parking areas.",
    image: "/images/services/ada-approved-handicap-stalls.jpg",
  },
  {
    id: 2,
    title: "Concrete wheel stops",
    slug: "concrete-wheel-stops",
    description:
      "Wheel stops help define parking spaces and ensure that vehicles are parked within designated areas. These help maximize the number of cars that can fit in a lot thus preventing inefficient use of parking space. They can also serve as a barrier to protect landscaping and sidewalks.",
    image: "/images/services/concrete-wheel-stops.jpg",
  },
  {
    id: 3,
    title: "Specialty striping",
    slug: "specialty-striping",
    description:
      "We can lay out or re-stripe tennis, basketball, hopscotch, four-square, and pickleball courts to meet your needs. Need a temporary parking area on grass, gravel or pavement due to a special event? Line It Up Line Striping, LLC can help lay out an efficient design to meet your temporary needs.",
    image: "/images/services/specialty-striping.jpg",
  },
  {
    id: 4,
    title: "Blacking out old or unnecessary markings",
    slug: "blacking-out-old-or-unnecessary-markings",
    description:
      "Sometimes an old line or stencil will reappear. We use blacktop sealer to cover these rather than black paint which will last longer.",
    image: "/images/services/blacking-out.jpg",
  },
  {
    id: 5,
    title: "No parking Zones",
    slug: "no-parking-zones",
    description:
      "No parking areas are crucial and used for an explicit purpose such as fire lanes, loading docks, and emergency access points. These areas help maintain a clear path for emergency vehicles and deliveries.",
    image: "/images/services/word.jpeg",
  },
  {
    id: 6,
    title: "Painting or re-painting light pole bases",
    slug: "painting-or-re-painting-light-pole-bases",
    description:
      "Having brightly painted parking lot pole bases greatly decreases the possibility of someone running into one thus damaging the pole and possibly their vehicle.",
    image: "/images/services/painting-pole-bases.jpg",
  },
  {
    id: 7,
    title: "Striping new parking stalls",
    slug: "striping-new-parking-stalls",
    description:
      "Well-defined markings such as crosswalks, arrows, and Parking spaces will ensure that vehicles and people are able to navigate your parking lot Smoothly and safely through efficient traffic flow, thus minimizing the occurrence of an Accident.",
    image: "/images/services/striping-new-parking-stalls.jpg",
  },
  {
    id: 8,
    title: "Number stenciling",
    slug: "number-stenciling",
    description:
      "Primarily used for schools and apartments. Numbering stencils for line striping offer several advantages, including increased organization in parking lots, clear identification of individual parking spaces, improved traffic flow, reduced confusion for drivers, easier enforcement of parking rules, professional appearance, and the ability to customize parking spaces for specific needs by assigning unique numbers to each spot.",
    image: "/images/services/number-stenciling.jpg",
  },
  {
    id: 9,
    title: "Directional arrows",
    slug: "directional-arrows",
    description:
      "Well-defined markings such as crosswalks, arrows, and parking spaces will ensure that vehicles and people are able to navigate your parking lot smoothly and safely through efficient traffic flow, thus minimizing the occurrence of an accident. A well-maintained parking lot leaves a great first impression of your business.",
    image: "/images/services/directional-arrows.jpg",
  },
  {
    id: 10,
    title: "Re-striping existing stalls",
    slug: "re-striping-existing-stalls",
    description:
      "We can restripe any parking lot or garage. Paint lines will fade from UV rays and wear down from vehicle traffic. Rather than spending money on unnecessary lot maintenance, re-striping your lot annually leaves your parking lot clean, and fresh-looking and is a cost-effective way of keeping up its great appearance. A faded parking lot is not only unsightly, but it can deter customers and may bring legal complications due to non-standard compliance. It may even cause your business to temporarily shut down until compliances are met. This would not only hurt daily operations but also your reputation. A well-maintained parking lot leaves a great first impression of your business.",
    image: "/images/services/re-striping-existing-stalls.jpg",
  },
  {
    id: 11,
    title: "ADA approved handicap stalls",
    slug: "ada-approved-handicap-stalls",
    description:
      "Staying ADA compliant not only keeps your business meeting legal requirements, but it also fosters a safer environment. The Americans Disability Act requires all property owners to provide a sufficient amount of handicap-accessible parking and unloading zones. Whether it's enhancing your existing handicap spots and fire lanes, or adding new ones, Line It Up Line Striping is a company you can trust to keep you compliant. The handicap striping in your parking lot is governed by both federal, state, and local codes. Understanding these codes can be complicated at times. For example, if your parking lot has 150 standard parking spaces, you are required to maintain 6 standard handicap stalls and 1 van-accessible stall (verify this before adding) Whether it's the number of accessible parking spaces that are required or van access spaces or walking paths, we can help you understand what you need.le.",
    image: "/images/services/no-parking-zones.jpg",
  },
];

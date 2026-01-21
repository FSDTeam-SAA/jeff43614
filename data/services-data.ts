import { StaticImageData } from "next/image";

export interface Service {
  id: number;
  title: string;
  slug?: string;
  description: string;
  image: string | StaticImageData;
  metaTitle?: string;
  metaDescription?: string;
  socialTitle?: string;
  socialDescription?: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Word stenciling",
    slug: "word-stenciling",
    description:
      "Typically NO PARKING or VISITORS but we can create any verbiage you need. These are more cost-effective and sightly than having metal signs and clearly communicate important parking lot information like designated spaces, restrictions, or directions; ultimately improving organization and safety in parking areas.",
    image: "/images/services/ada-approved-handicap-stalls.jpg",
    metaTitle: "Custom Parking Lot Word Stenciling | Line It Up",
    metaDescription:
      "Clear parking lot communication with custom word stenciling. More affordable than metal signs and ADA compliant. Serving Ohio & Michigan. Get your free estimate!",
    socialTitle: "Custom Word Stenciling Services in Toledo | Line It Up Striping",
    socialDescription:
      "Apnar parking lot-er jonno \"NO PARKING\", \"VISITORS\" ba jekono custom word stenciling proyojon? Metal sign-er cheyeo sashroyi ebong drishyoman stenciling service nite amader sathe jogajog korun. Ohio & Michigan-e amra-i shera.",
  },
  {
    id: 2,
    title: "Concrete wheel stops",
    slug: "concrete-wheel-stops",
    description:
      "Wheel stops help define parking spaces and ensure that vehicles are parked within designated areas. These help maximize the number of cars that can fit in a lot thus preventing inefficient use of parking space. They can also serve as a barrier to protect landscaping and sidewalks.",
    image: "/images/services/concrete-wheel-stops.jpg",
    metaTitle: "Concrete Wheel Stops Installation | Line It Up",
    metaDescription:
      "Professional concrete wheel stop installation to protect your landscaping and maximize parking space. ADA compliant solutions in Ohio & Michigan.",
    socialTitle:
      "Custom Word Stenciling Services | Line It Up Line Striping, LLC",
    socialDescription:
      'Apnar parking lot-er jonno "NO PARKING", "VISITORS" ba jekono custom word stenciling proyojon? Metal sign-er cheyeo sashroyi ebong drishyoman stenciling service nite amader sathe jogajog korun. Ohio & Michigan-e amra-i shera.',
  },
  {
    id: 3,
    title: "Specialty striping",
    slug: "specialty-striping",
    description:
      "We can lay out or re-stripe tennis, basketball, hopscotch, four-square, and pickleball courts to meet your needs. Need a temporary parking area on grass, gravel or pavement due to a special event? Line It Up Line Striping, LLC can help lay out an efficient design to meet your temporary needs.",
    image: "/images/services/specialty-striping.jpg",
    metaTitle: "Sports Court & Event Striping Services | Line It Up",
    metaDescription:
      "Professional striping for sports courts and special events. Tennis, basketball, pickleball, hopscotch, and temporary parking layouts. Serving Ohio & Michigan!",
    socialTitle: "Specialty Striping Services: Courts & Events | Line It Up Toledo",
    socialDescription:
      "Amra tennis, basketball, ebong pickleball court-er layout ebong re-striping kori। Sathe special event-er jonno grass ba gravel-e temporary parking design-er subidhao dicchi। Ohio & Michigan-e expert specialty striping-er jonno jogajog korun।",
  },
  {
    id: 4,
    title: "Blacking out old or unnecessary markings",
    slug: "blacking-out-old-or-unnecessary-markings",
    description:
      "Sometimes an old line or stencil will reappear. We use blacktop sealer to cover these rather than black paint which will last longer.",
    image: "/images/services/blacking-out.jpg",
    metaTitle: "Remove Old Parking Lot Markings | Line It Up",
    metaDescription:
      "Cover unwanted parking lot lines with durable blacktop sealer that lasts longer than paint. Professional removal of old markings. Free estimate in Ohio & MI!",
    socialTitle:
      "Professional Blackout Services for Old Pavement Markings | Line It Up",
    socialDescription:
      "Purono ba obanchito parking lines muche felun professional blacktop sealer-er maddhome। Amra black paint-er poriborte long-lasting sealer bebohar kori jate purono markings gulo abar dekha na jay। Ohio & Michigan-e parking lot maintenance-er jonno jogajog korun।",
  },
  {
    id: 5,
    title: "No parking Zones",
    slug: "no-parking-zones",
    description:
      "No parking areas are crucial and used for an explicit purpose such as fire lanes, loading docks, and emergency access points. These areas help maintain a clear path for emergency vehicles and deliveries.",
    image: "/images/services/word.jpeg",
    metaTitle: "No Parking Zone Striping Services | Line It Up",
    metaDescription:
      "Professional no parking zone striping for fire lanes, loading docks & emergency access. ADA compliant markings. Get your free estimate today!",
    socialTitle: "No Parking Zone & Fire Lane Striping Services | Line It Up Toledo",
    socialDescription:
      "Apnar facility-r safety nishchit korun professional No Parking Zone marking-er maddhome। Amra fire lanes, loading docks, ebong emergency access points-er jonno sposto ebong durable marking kori। Ohio, Michigan, ebong Indiana-te compliance nishchit korte amader sathe jogajog korun।",
  },
  {
    id: 6,
    title: "Painting or re-painting light pole bases",
    slug: "painting-or-re-painting-light-pole-bases",
    description:
      "Having brightly painted parking lot pole bases greatly decreases the possibility of someone running into one thus damaging the pole and possibly their vehicle.",
    image: "/images/services/painting-pole-bases.jpg",
    metaTitle: "Light Pole Base Painting Services | Get Free Quote",
    metaDescription:
      "Professional light pole base painting increases safety & reduces vehicle damage. ADA compliant parking lot services in Ohio, Michigan & Indiana. Free estimate!",
    socialTitle:
      "Light Pole Base Painting Services | Prevent Damage & Increase Safety",
    socialDescription:
      "Parking lot-er light pole base gulo ki fete geche ba rong uthe geche? Brightly painted pole bases gari'r sathe dhoaka khawar jhokuti komay ebong apnar property-r beauty baray। Ohio ebong Michigan-e expert painting service-er jonno amader call korun।",
  },
  {
    id: 7,
    title: "Striping new parking stalls",
    slug: "striping-new-parking-stalls",
    description:
      "Well-defined markings such as crosswalks, arrows, and Parking spaces will ensure that vehicles and people are able to navigate your parking lot Smoothly and safely through efficient traffic flow, thus minimizing the occurrence of an Accident.",
    image: "/images/services/striping-new-parking-stalls.jpg",
    metaTitle: "Professional Parking Stall Striping | Free Estimate",
    metaDescription:
      "Expert parking lot striping services in Ohio, Michigan & Indiana. ADA compliant, professional-grade markings. Get your free quote today!",
    socialTitle: "Professional New Parking Stall Striping | Line It Up Toledo",
    socialDescription:
      "Apnar nuton parking lot-er jonno proyojon perfect layout ebong precision striping। Amra traffic flow optimize kori ebong crosswalks, arrows, o parking spaces-er maddhome safety nishchit kori। Ohio & Michigan-e expert new stall striping-er jonno call korun।",
  },
  {
    id: 8,
    title: "Number stenciling",
    slug: "number-stenciling",
    description:
      "Primarily used for schools and apartments. Numbering stencils for line striping offer several advantages, including increased organization in parking lots, clear identification of individual parking spaces, improved traffic flow, reduced confusion for drivers, easier enforcement of parking rules, professional appearance, and the ability to customize parking spaces for specific needs by assigning unique numbers to each spot.",
    image: "/images/services/number-stenciling.jpg",
    metaTitle: "Number Stenciling Services | Line It Up",
    metaDescription:
      "Professional number stenciling for parking lots, schools & apartments. ADA compliant, organized parking solutions. Serving OH, MI & IN. Get a free quote today!",
    socialTitle: "Professional Number Stenciling for Parking Lots | Line It Up Toledo",
    socialDescription:
      "Apartment, school, ba commercial parking lot-er organization barate number stenciling-er bikolpo nei। Amra nikhut ebong durable numbering service prodan kori, jate parking management hoy aro shohoj। Ohio & Michigan-e expert stenciling-er jonno amader call korun।",
  },
  {
    id: 9,
    title: "Directional arrows",
    slug: "directional-arrows",
    description:
      "Well-defined markings such as crosswalks, arrows, and parking spaces will ensure that vehicles and people are able to navigate your parking lot smoothly and safely through efficient traffic flow, thus minimizing the occurrence of an accident. A well-maintained parking lot leaves a great first impression of your business.",
    image: "/images/services/directional-arrows.jpg",
    metaTitle: "Directional Arrow Striping Services | Line It Up",
    metaDescription:
      "Get professional directional arrow striping for safe, efficient parking lot traffic flow. ADA compliant services in Ohio, Michigan & Indiana. Free quote today!",
    socialTitle: "Parking Lot Directional Arrows & Traffic Flow | Line It Up Toledo",
    socialDescription:
      "Apnar parking lot-e gari'r shothik chlachol nishchit korun professional directional arrows-er maddhome। Amra nikhut bhabe traffic flow markings kori jate accident-er jhokuti kome ebong safety bare। Ohio & Michigan-e expert pavement marking-er jonno call korun।",
  },
  {
    id: 10,
    title: "Re-striping existing stalls",
    slug: "re-striping-existing-stalls",
    description:
      "We can restripe any parking lot or garage. Paint lines will fade from UV rays and wear down from vehicle traffic. Rather than spending money on unnecessary lot maintenance, re-striping your lot annually leaves your parking lot clean, and fresh-looking and is a cost-effective way of keeping up its great appearance. A faded parking lot is not only unsightly, but it can deter customers and may bring legal complications due to non-standard compliance. It may even cause your business to temporarily shut down until compliances are met. This would not only hurt daily operations but also your reputation. A well-maintained parking lot leaves a great first impression of your business.",
    image: "/images/services/re-striping-existing-stalls.jpg",
    metaTitle: "Professional Parking Lot Re-Striping | Line It Up",
    metaDescription:
      "Refresh faded parking lines with expert re-striping services. ADA compliant, cost-effective lot maintenance in Ohio, Michigan & Indiana. Free quote today!",
    socialTitle: "Professional Parking Lot Re-striping Services | Line It Up Toledo",
    socialDescription:
      "Faded parking lines ki apnar business-er prothom impression nosto korche? Amader annual re-striping service-er maddhome parking lot-ke korun porichonno ebong nirapod। Sherwin-Williams paint bebohar kore amra dicchi dirghosthayi chamak। Ohio & Michigan-e free quote-er jonno call korun।",
  },
  {
    id: 11,
    title: "ADA approved handicap stalls",
    slug: "ada-approved-handicap-stalls",
    description:
      "Staying ADA compliant not only keeps your business meeting legal requirements, but it also fosters a safer environment. The Americans Disability Act requires all property owners to provide a sufficient amount of handicap-accessible parking and unloading zones. Whether it's enhancing your existing handicap spots and fire lanes, or adding new ones, Line It Up Line Striping is a company you can trust to keep you compliant. The handicap striping in your parking lot is governed by both federal, state, and local codes. Understanding these codes can be complicated at times. For example, if your parking lot has 150 standard parking spaces, you are required to maintain 6 standard handicap stalls and 1 van-accessible stall (verify this before adding) Whether it's the number of accessible parking spaces that are required or van access spaces or walking paths, we can help you understand what you need.le.",
    image: "/images/services/no-parking-zones.jpg",
    metaTitle: "ADA Handicap Stall Striping | Get Compliant - Free Quote",
    metaDescription:
      "Professional ADA-compliant handicap stall striping in Ohio, Michigan & Indiana. Stay legally compliant with expert parking lot services. Free estimate today!",
    socialTitle: "ADA Compliant Handicap Parking Striping | Line It Up Toledo",
    socialDescription:
      " Apnar parking lot-ke ADA compliant ebong safe korun professional handicap stall striping-er maddhome। Federal ebong state code mene amra nikhut handicap markings prodan kori। Ohio, Michigan, ebong Indiana-te legal standards nishchit korte amader expert team-er sahayjo nin।",
  },
];

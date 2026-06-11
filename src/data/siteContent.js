export const supportedLocales = ["en", "es", "it"];

export const localeOptions = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "it", label: "Italiano", shortLabel: "IT" },
];

export const pagePaths = {
  home: "/",
  about: "/about",
  treatments: "/treatments",
  doctors: "/doctors",
  patientJourney: "/patient-journey",
  beforeAfter: "/before-after",
  partners: "/partners",
  contact: "/contact",
};

export const navigationItems = [
  { key: "home", href: pagePaths.home },
  { key: "about", href: pagePaths.about },
  { key: "treatments", href: pagePaths.treatments },
  { key: "doctors", href: pagePaths.doctors },
  { key: "patientJourney", href: pagePaths.patientJourney },
  { key: "partners", href: pagePaths.partners },
  { key: "contact", href: pagePaths.contact },
];

export const contact = {
  phone: "+90 532 123 45 67",
  phoneHref: "tel:+905321234567",
  whatsappHref: "https://wa.me/905321234567",
  email: "info@gkintercare.com",
  emailHref: "mailto:info@gkintercare.com",
  address: "Levent Mah. Büyükdere Cad. No: 199",
  addressDetail: "Kat: 15, 34394 Şişli / İstanbul, Türkiye",
  workingHours: "Mon - Sat, 09:00 - 18:00 GMT+3",
};

const coreStats = [
  {
    value: "10+",
    label: "Years of Experience",
    description: "A decade of coordinated medical travel and patient-first healthcare support.",
  },
  {
    value: "10,000+",
    label: "International Patients",
    description: "Patients from around the world supported with clear planning and personal care.",
  },
  {
    value: "50+",
    label: "Partner Hospitals",
    description: "A trusted medical network across leading hospitals and specialist clinics.",
  },
  {
    value: "95%+",
    label: "Patient Satisfaction Rate",
    description: "Care journeys shaped around comfort, safety, communication, and results.",
  },
];

const treatmentAreas = [
  {
    title: "Plastic Surgery",
    description:
      "Enhance your natural beauty and confidence with advanced surgical and aesthetic procedures.",
    image: "/images/gk-intercare-plastic-surgery.avif",
    tags: [
      "Rhinoplasty",
      "Liposuction",
      "Facelift",
      "Tummy Tuck",
      "Breast Surgery",
      "Brazilian Butt Lift",
      "Eyelid Surgery",
      "Hair Transplantation",
    ],
  },
  {
    title: "Dental",
    description:
      "Achieve a healthy, beautiful smile with our comprehensive dental care solutions.",
    image: "/images/gk-intercare-dental-treatments.avif",
    tags: [
      "Dental Implants",
      "Crowns & Bridges",
      "Veneers",
      "Orthodontics",
      "Hollywood Smile",
      "Gum Treatments",
      "Teeth Whitening",
      "Root Canal Therapy",
    ],
  },
  {
    title: "Bariatric Surgery",
    description:
      "Safe and effective weight loss procedures for a healthier, longer life.",
    image: "/images/gk-intercare-bariatric-surgery.avif",
    tags: [
      "Bariatric Surgery",
      "Lifestyle Coaching",
      "Pre-Surgery Evaluation",
      "Post-Surgery Follow-Up",
      "Nutritional Counseling",
      "Long-Term Support",
    ],
  },
  {
    title: "Orthopedics",
    description: "Regain mobility and live pain-free with our expert orthopedic care.",
    image: "/images/gk-intercare-orthopedics.avif",
    tags: [
      "Knee Replacement",
      "Spinal Surgery",
      "Hip Replacement",
      "Sports Injuries",
      "Arthroscopy",
      "Joint Pain Treatments",
    ],
  },
  {
    title: "Neurology",
    description:
      "Advanced diagnosis and treatment for a wide range of neurological conditions.",
    image: "/images/gk-intercare-neurology.avif",
    tags: [
      "Brain & Spine Surgery",
      "Migraine & Headache",
      "Epilepsy Treatment",
      "Neuropathy Treatment",
      "Multiple Sclerosis (MS)",
      "Stroke Rehabilitation",
    ],
  },
  {
    title: "Oncology",
    description:
      "Comprehensive cancer care with compassionate support every step of the way.",
    image: "/images/gk-intercare-oncology.avif",
    tags: [
      "Cancer Diagnosis",
      "Targeted Therapy",
      "Chemotherapy",
      "Radiotherapy",
      "Immunotherapy",
      "Follow-Up & Support",
    ],
  },
];

const doctors = [
  {
    name: "Prof. Gürkan Kayabaşoğlu",
    specialty: "ENT Surgeon",
    image: "/images/prof-dr-gurkan-kayabasoglu.avif",
    description:
      "Gürkan Kayabaşoğlu has concentrated all his education and scientific studies on only one part of the human body, namely the face. He only performs surgeries on the facial area. For this reason, he was given the Oral, Facial and Maxillofacial Surgery Specialization Diploma by the Ministry of Health.",
    expertise: [
      "Rhinoplasty",
      "Facelift & Neck Lift",
      "Chin Surgery & Implant",
      "Temporal Lift",
      "Eyelid Surgery",
      "Forehead Reduction",
    ],
  },
  {
    name: "Dr. Mustafa",
    specialty: "Plastic Surgery",
    image: "/images/dr-mustafa.avif",
    description:
      "Dr. Mustafa specializes in aesthetic and reconstructive procedures with a strong focus on patient safety and satisfaction. He is dedicated to providing personalized care and achieving natural-looking results.",
    expertise: [
      "Rhinoplasty",
      "Facelift & Neck Lift",
      "Breast Surgery",
      "Liposuction & Body Contouring",
      "Hair Transplantation",
      "Tummy Tuck",
    ],
  },
  {
    name: "Dr. Bircan",
    specialty: "Hair Transplant",
    image: "/images/dr-bircan.avif",
    description:
      "Dr. Bircan is a physician who is a specialist in his field and provides safe services, combining a successful academic education with professional experience. As a result, he became a member of the International Society of Hair Restoration Surgery (ISHRS).",
    expertise: [
      "FUE Hair Transplant",
      "DHI Hair Transplant",
      "Beard and Moustache Transplant",
      "Eyebrow Transplant",
      "Women Hair Transplant",
    ],
  },
  {
    name: "Dr. Mehtap",
    specialty: "ENT Surgeon",
    image: "/images/dr-mehtap.avif",
    description:
      "She earned European Board Certification in Otolaryngology-Head and Neck Surgery by passing both the written exam in Genoa, Italy, and the oral exam in Vienna, Austria. She is also a member of the European Academy of Facial Plastic Surgery (EAFPS) and the Turkish Society of Facial Plastic Surgery.",
    expertise: ["Rhinoplasty", "Blepharoplasty", "Otoplasty", "Bichectomy", "Chin Aesthetics"],
  },
  {
    name: "Dr. Oğuzhan",
    specialty: "ENT Surgeon",
    image: "/images/dr-oguzhan.avif",
    description:
      "Assistant Professor Dr. Oğuzhan OĞUZ, a member of the Turkish Society of Otorhinolaryngology and Head and Neck Surgery, the Rhinology Society, the Sleep Society, and the Facial Plastic Surgery Society, also continues his academic work as a part-time faculty member at Nişantaşı University.",
    expertise: ["ENT Surgery", "Rhinology", "Head & Neck Surgery", "Otology", "Laryngology"],
  },
  {
    name: "Dr. Ali",
    specialty: "Plastic Surgery",
    image: "/images/dr-ali.avif",
    description:
      "He accompanied thousands of cases and gained experience in a wide range of areas, from reconstructive surgery to microsurgery, from burn treatment to aesthetic operations. He completed his training and received the title of Plastic, Reconstructive and Aesthetic Surgery Specialist.",
    expertise: [
      "Reconstructive Surgery",
      "Microsurgery",
      "Burn Treatment",
      "Aesthetic Operations",
      "Body Contouring",
    ],
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Take the First Step",
    description:
      "Reach out to us and share your expectations. Our dedicated team is here to listen, understand, and guide you from the very beginning.",
    image: "/images/patient-journey1.avif",
  },
  {
    number: "02",
    title: "Personalized Medical Plan",
    description:
      "Our specialists carefully evaluate your case and create a fully tailored treatment plan designed specifically for your needs and desired outcome.",
    image: "/images/patient-journey2.avif",
  },
  {
    number: "03",
    title: "Smart Planning Together",
    description:
      "We schedule your procedure at the most convenient time for you and organize every detail to ensure a smooth and stress-free experience.",
    image: "/images/patient-journey3.avif",
  },
  {
    number: "04",
    title: "VIP Arrival Experience",
    description:
      "From the moment you land, everything is taken care of. Our private transfer team welcomes you in a luxury Vito and accompanies you throughout your journey.",
    image: "/images/patient-journey4.avif",
  },
  {
    number: "05",
    title: "Experience the Transformation",
    description:
      "Relax and focus on yourself while our expert team delivers exceptional, natural results. All you need to do is witness the transformation.",
    image: "/images/patient-journey5.avif",
  },
];

const englishContent = {
  contact,
  ui: {
    ctaEyebrow: "Take the first step",
    treatmentCards: {
      eyebrow: "Treatment Areas",
      title: "Advanced Care for a Healthier Tomorrow",
      description:
        "We provide expert medical care with modern technology and a personalized approach to help you feel confident at every stage.",
      badge: "Treatment",
      buttonLabel: "Get Your Personalized Plan",
      previousLabel: "Previous slide",
      nextLabel: "Next slide",
    },
  },
  footer: {
    supportTitle: "Support",
    headOfficeTitle: "Head Office",
    socialTitle: "Social",
    treatmentLinks: [
      { label: "Plastic Surgery", href: "/treatments" },
      { label: "Dental", href: "/treatments" },
      { label: "Bariatric Surgery", href: "/treatments" },
      { label: "Orthopedics", href: "/treatments" },
      { label: "Neurology", href: "/treatments" },
      { label: "Oncology", href: "/treatments" },
    ],
    utilityLinks: [
      { label: "Patient Journey", href: "/patient-journey" },
      { label: "Before & After", href: "/before-after" },
      { label: "For Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
      { label: "404", href: "/404" },
    ],
    newsletter: {
      title: "Stay in the loop!",
      text: "Subscribe to get healthcare travel updates.",
      placeholder: "Enter your email",
      button: "Subscribe",
    },
  },
  stats: coreStats,
  treatments: treatmentAreas,
  doctors,
  journeySteps,
  metadata: {
    home: {
      title: "GK InterCare | Premium Health Tourism in Istanbul",
      description:
        "Personalized medical and aesthetic care in Istanbul with expert doctors, VIP travel support, and international patient coordination.",
      keywords: ["health tourism Istanbul", "medical tourism Turkey", "GK InterCare"],
    },
    about: {
      title: "About GK InterCare | Doctor-Led International Patient Care",
      description:
        "Learn how GK InterCare combines medical expertise, premium coordination, and patient-first support for international healthcare journeys.",
      keywords: ["about GK InterCare", "doctor led healthcare agency", "international patient care"],
    },
    treatments: {
      title: "Treatments | Plastic Surgery, Dental, Bariatric and More",
      description:
        "Explore GK InterCare treatment areas including plastic surgery, dental care, bariatric surgery, orthopedics, neurology, and oncology.",
      keywords: ["treatments in Istanbul", "plastic surgery Turkey", "dental treatment Istanbul"],
    },
    doctors: {
      title: "Our Doctors | GK InterCare Medical Experts",
      description:
        "Meet the experienced doctors and specialists working with GK InterCare for safe, personalized, and natural-looking results.",
      keywords: ["doctors in Istanbul", "medical experts Turkey", "GK InterCare doctors"],
    },
    patientJourney: {
      title: "Patient Journey | From Consultation to Aftercare",
      description:
        "See how GK InterCare supports international patients from first contact and planning to VIP arrival, treatment, recovery, and follow-up.",
      keywords: ["patient journey medical tourism", "VIP medical travel Istanbul", "aftercare Turkey"],
    },
    beforeAfter: {
      title: "Before & After | Patient Results and Testimonials",
      description:
        "Discover GK InterCare transformation stories, patient testimonials, and result categories from personalized aesthetic care.",
      keywords: ["before after Turkey", "patient testimonials", "aesthetic results Istanbul"],
    },
    partners: {
      title: "For Partners | Healthcare Partnership in Istanbul",
      description:
        "Partner with GK InterCare to offer your patients trusted healthcare services in Istanbul, dedicated coordination, and premium support.",
      keywords: ["healthcare partners Istanbul", "medical tourism agency partner", "GK InterCare partners"],
    },
    contact: {
      title: "Contact GK InterCare | Free Consultation",
      description:
        "Contact GK InterCare for a free consultation, WhatsApp support, and personalized treatment planning for your healthcare journey in Istanbul.",
      keywords: ["contact GK InterCare", "free consultation medical tourism", "WhatsApp health tourism"],
    },
  },
  home: {
    hero: {
      label: "Your Journey. Our Mission.",
      title: "Explore trusted care.",
      accent: "Create a safer health journey.",
      description:
        "A premium health tourism experience in Istanbul, planned around your treatment, travel, comfort, and aftercare needs.",
      primaryButton: "Start Planning",
      secondaryButton: "View Treatments",
      formLabel: "Free Consultation",
      formTitle: "Plan your care journey",
      formText: "Share a few details and our patient coordination team will contact you.",
      formButton: "Send Consultation Request",
      formFields: {
        fullName: { label: "Full Name", placeholder: "Your full name" },
        email: { label: "Email", placeholder: "you@email.com" },
        phone: { label: "Phone", placeholder: "+90 532 123 45 67" },
        country: { label: "Country", placeholder: "Which country are you from?" },
        message: {
          label: "Message",
          placeholder: "Tell us about the treatment you are considering.",
        },
      },
      trustItems: [
        { title: "Best Price Guidance", text: "Clear planning before arrival" },
        { title: "24/7 Support", text: "WhatsApp patient assistance" },
        { title: "Handpicked Clinics", text: "Trusted medical network" },
        { title: "Flexible Booking", text: "Travel timing built around you" },
      ],
    },
    features: [
      { title: "VIP Airport Transfer", text: "Private and comfortable arrivals" },
      { title: "5-Star Accommodation", text: "Luxury hotel partners" },
      { title: "Personal Coordinator", text: "24/7 patient support" },
      { title: "Comprehensive Aftercare", text: "Follow-up and recovery guidance" },
    ],
    why: {
      label: "Why Choose GK InterCare?",
      title: "Your Trusted Partner in Global Healthcare",
      cards: [
        {
          title: "Expert Medical Team",
          text: "Work with highly qualified doctors and specialists in their fields.",
        },
        {
          title: "International Standards",
          text: "We partner with leading hospitals and clinics that meet global standards.",
        },
        {
          title: "Personalized Care",
          text: "Every patient receives a tailored treatment plan designed around their needs.",
        },
        {
          title: "Proven Results",
          text: "Our priority is your satisfaction and delivering natural, long-lasting results.",
        },
      ],
    },
    treatmentsHeader: {
      label: "Most Popular Treatments",
      title: "World-Class Treatments,",
      accent: "Expertly Delivered",
    },
    cta: {
      title: "Ready to Start Your Healthcare Journey?",
      text: "Get a free consultation from our expert medical team.",
      button: "Get a Free Consultation",
    },
  },
  about: {
    hero: {
      label: "About Us",
      title: "Experience. Compassion.",
      accent: "Global Care.",
      description:
        "GK InterCare is an international healthcare agency dedicated to delivering world-class medical services with a personalized, patient-first approach.",
      checklist: [
        "Over 10+ Years of Experience in Healthcare Services",
        "Thousands of Satisfied International Patients",
        "Doctor-Led Vision, Patient-Focused Care",
        "Global Network, Local Expertise",
      ],
      button: "Discover Our Services",
    },
    apart: {
      title: "What Sets Us Apart",
      items: [
        {
          title: "International Patient Care",
          text: "We guide you every step of the way, from your first inquiry to full recovery.",
        },
        {
          title: "End-to-End Support",
          text: "Our team is with you throughout your journey and beyond.",
        },
        {
          title: "VIP & Tailored Experience",
          text: "Personalized care plans designed around your needs and goals.",
        },
        {
          title: "Trusted Medical Network",
          text: "We collaborate with leading hospitals and specialists worldwide.",
        },
      ],
    },
    who: {
      label: "Who We Are",
      title: "More Than an Agency,",
      accent: "Your Partner in Health.",
      paragraphs: [
        "With more than a decade of experience in medical tourism, GK InterCare has become a trusted partner for patients from all over the world.",
        "We work with a carefully selected network of leading hospitals and specialists in Istanbul to ensure the highest standards of safety, quality, and care.",
      ],
      stats: [
        { value: "10+", label: "Years of Experience" },
        { value: "10,000+", label: "International Patients" },
        { value: "95%+", label: "Patient Satisfaction Rate" },
        { value: "50+", label: "Partner Hospitals Worldwide" },
      ],
    },
    why: {
      label: "Why Choose Us?",
      title: "Built on Experience.",
      accent: "Driven by Patient Satisfaction.",
      description: "Our commitment to excellence shapes every aspect of the care we provide.",
      cards: [
        {
          title: "Patient Satisfaction First",
          text: "Your comfort, safety, and happiness are at the center of everything we do.",
        },
        {
          title: "Doctor-Led Perspective",
          text: "Our services are shaped by the insight and standards of experienced doctors.",
        },
        {
          title: "Personalized Care, Every Step",
          text: "From your first contact to your final follow-up, we are by your side.",
        },
        {
          title: "Transparency & Trust",
          text: "Clear communication, honest guidance, and ethical healthcare partnerships.",
        },
      ],
    },
    vision: {
      label: "Our Vision",
      title: "Healthcare, Experienced Through a Doctor's Perspective",
      text: "We believe the best results come from combining medical excellence with a personalized approach. Our team works with a doctor's perspective at every stage of your journey.",
      center: "We evaluate, plan, coordinate, and care just as we would for our own family.",
      quote:
        "Our goal is to make world-class healthcare accessible, without compromising on quality.",
      highlight: "High-end quality, made accessible.",
    },
    promise: {
      label: "Our Promise to You",
      title: "Premium Quality. Accessible to All.",
      description:
        "We make high-end healthcare services more affordable without compromising on safety, quality, or comfort. Because everyone deserves the best care.",
      steps: [
        "Consultation & Planning",
        "Travel & Arrival Management",
        "Treatment Coordination",
        "Recovery & Follow-Up",
        "Aftercare & Long-Term Support",
      ],
    },
    cta: {
      title: "Your health journey deserves experience you can trust.",
      text: "We're here to listen and guide you every step of the way.",
      button: "Get a Free Consultation",
    },
  },
  treatmentsPage: {
    hero: {
      label: "Our Treatments",
      title: "Comprehensive Care.",
      accent: "Personalized for You.",
      description:
        "We partner with leading hospitals and specialists in Istanbul to provide world-class treatments across a wide range of medical disciplines.",
      image: "/images/gk-intercare-health-solutions1.avif",
      imageAlt: "GK InterCare treatment planning in Istanbul",
      badges: [
        "International Accredited Hospitals",
        "Doctor-Led Treatment Approach",
        "Personalized Care Plans",
        "End-to-End Support",
      ],
    },
    header: {
      label: "Our Treatment Areas",
      title: "World-Class Treatments,",
      accent: "Expertly Delivered",
    },
    journey: {
      label: "Your Journey With Us",
      title: "We make your treatment journey simple, safe, and successful.",
      steps: [
        { number: "01", title: "Share Your Information", text: "Tell us about your needs" },
        { number: "02", title: "Get Your Personalized Plan", text: "Tailored treatment plan" },
        { number: "03", title: "Travel to Istanbul", text: "VIP airport transfer" },
        { number: "04", title: "Receive Your Treatment", text: "World-class care" },
        { number: "05", title: "Aftercare & Follow-Up", text: "Ongoing support" },
      ],
    },
    cta: {
      title: "Ready to Get Your Personalized Treatment Plan?",
      text: "Our medical team will create a plan designed specifically for your needs and goals.",
      button: "Get a Free Consultation",
    },
  },
  doctorsPage: {
    hero: {
      label: "Our Doctors",
      title: "Expertise You Can Trust,",
      accent: "Care You Deserve.",
      description:
        "Our experienced doctors combine advanced medical expertise with a personalized approach to deliver safe, effective, and natural-looking results that enhance your confidence and well-being.",
      image: "/images/gk-intercare-health-solutions1.avif",
      imageAlt: "GK InterCare medical team and healthcare solutions",
      badges: [
        "Experienced Specialists",
        "International Standards",
        "Patient-Centered Care",
        "Proven Results",
      ],
    },
    header: {
      label: "Meet Our Medical Experts",
      title: "Dedicated Professionals,",
      accent: "Exceptional Care",
    },
    labels: {
      areasOfExpertise: "Areas of Expertise",
      planButton: "Get Your Personalized Plan",
    },
    journey: {
      title: "Start Your Journey with Our Experts",
      text: "Let our team of specialists create a personalized treatment plan for you.",
      button: "Get a Free Consultation",
      steps: [
        { title: "Share Your Goals", text: "Tell us about your needs and expectations." },
        { title: "Receive Your Plan", text: "Our experts create a personalized plan for you." },
        {
          title: "Travel & Treatment",
          text: "We assist with your travel and treatment process.",
        },
        { title: "Care & Follow-Up", text: "We are with you every step of your recovery." },
      ],
    },
  },
  patientJourneyPage: {
    hero: {
      label: "Patient Journey",
      title: "Your Journey,",
      accent: "Our Priority",
      description:
        "A seamless experience designed around your comfort, safety and exceptional results.",
      image: "/images/gk-intercare-health-solutions1.avif",
      imageAlt: "GK InterCare patient journey support",
    },
    cta: {
      title: "All you need to do is take the first step.",
      text: "We'll take care of the rest.",
      button: "Get a Free Consultation",
    },
    difference: {
      label: "Why Patients Choose Us",
      title: "The GK InterCare",
      accent: "Difference",
      description: "Premium care and comfort at every step of your journey.",
      cards: [
        {
          title: "Face & Neck Specialist Approach",
          text: "Focused expertise for natural and harmonious results.",
        },
        {
          title: "Fully Personalized Planning",
          text: "Every plan is tailored to you and your goals.",
        },
        { title: "VIP-Level Service", text: "Premium care and comfort at every step." },
        {
          title: "International Experience",
          text: "Trusted by patients from around the world.",
        },
      ],
    },
  },
  beforeAfterPage: {
    hero: {
      label: "Real Patients. Real Results.",
      title: "Before & After Photos",
      accent: "and Testimonial Videos",
      description:
        "Every transformation tells a story. Discover real results achieved by our patients with advanced techniques and personalized care.",
    },
    filters: ["All", "Face", "Neck", "Nose", "Eyes", "Breast", "Body"],
    labels: {
      before: "Before",
      after: "After",
      viewDetails: "View Details",
    },
    cases: [
      { title: "Rhinoplasty", category: "Nose", detail: "Natural profile refinement" },
      { title: "Rhinoplasty", category: "Nose", detail: "Balanced facial proportion" },
      { title: "Blepharoplasty", category: "Eyes", detail: "Refreshed eye contour" },
      { title: "Neck Lift", category: "Neck", detail: "Defined neck and jawline" },
      { title: "Breast Augmentation", category: "Breast", detail: "Personalized body harmony" },
      { title: "Liposuction", category: "Body", detail: "Body contouring support" },
    ],
    stats: [
      {
        value: "10,000+",
        label: "Happy Patients",
        description: "Real people supported with thoughtful planning and coordinated care.",
      },
      {
        value: "15+",
        label: "Years of Experience",
        description: "Clinical and coordination experience across international healthcare journeys.",
      },
      {
        value: "50+",
        label: "Countries Served",
        description: "Patients guided from many countries with multilingual support.",
      },
      {
        value: "95%+",
        label: "Patient Satisfaction",
        description: "Transformations planned around safety, natural results, and comfort.",
      },
    ],
    testimonialsHeader: {
      label: "Patients Share Their Experiences",
      title: "Real Stories,",
      accent: "Real Results",
      description: "Hear directly from our patients about their transformation journeys.",
    },
    testimonials: [
      {
        author: "Sarah J.",
        country: "United Kingdom",
        duration: "1:24",
        quote:
          "I had rhinoplasty with Prof. Dr. Gürkan Kayabaşoğlu and the results exceeded my expectations. My nose looks so natural and my confidence is back!",
      },
      {
        author: "Marc T.",
        country: "Germany",
        duration: "1:37",
        quote:
          "From the first consultation to the final result, everything was perfect. The team is very professional and caring. Highly recommended!",
      },
      {
        author: "Elena P.",
        country: "Italy",
        duration: "1:18",
        quote:
          "I had a neck lift and the transformation is incredible. I look younger and refreshed. Thank you for everything!",
      },
    ],
    cta: {
      label: "Your Story Could Be Next",
      title: "Your transformation story could be next.",
      text: "Let's create your best version together.",
      button: "Start Your Transformation Today",
      features: [
        "Natural Looking Results",
        "Advanced Techniques",
        "Personalized Care",
        "Expert Team",
      ],
    },
  },
  partnersPage: {
    hero: {
      label: "For Partners",
      title: "Partner With a Trusted Healthcare Provider",
      accent: "in Istanbul",
      description:
        "We collaborate with agencies and facilitators worldwide to deliver exceptional healthcare experiences and outstanding results for your patients.",
      image: "/images/gk-intercare-for-partners.avif",
      imageAlt: "GK InterCare international healthcare partnership",
      badges: ["Trusted Expertise", "Reliable Partnership", "Premium Quality", "Global Collaboration"],
      supportTitle: "Dedicated Partner Support",
      supportText: "Your own coordinator throughout the entire process",
    },
    models: {
      label: "Flexible Partnership Models",
      title: "Two Ways to Work Together",
      items: [
        {
          title: "Send Your Patients to Istanbul",
          text: "We provide complete medical travel services in Istanbul with VIP and Economic options.",
          image: "/images/for-partners1.avif",
          points: [
            "Accommodation & VIP transfers",
            "Priority appointments",
            "Translation & concierge services",
            "Post-op care & follow-up",
          ],
        },
        {
          title: "We Come to You",
          text: "We visit your country for consultations and even surgeries in collaboration with local hospitals.",
          image: "/images/for-partners2.avif",
          points: [
            "On-site patient consultations",
            "Surgeries in partner hospitals",
            "Training & knowledge sharing",
            "Long-term collaboration",
          ],
        },
      ],
    },
    benefits: {
      label: "Partner Benefits",
      title: "Why Partner With",
      accent: "GK InterCare?",
      items: [
        { title: "Competitive Commissions", text: "Earn up to 20% per patient" },
        { title: "Flexible Pricing", text: "Personalized pricing for each case" },
        { title: "Top Medical Experts", text: "Access to leading surgeons" },
        { title: "VIP Patient Experience", text: "High-end service for your patients" },
        { title: "Marketing & Materials Support", text: "We provide you with promotional tools" },
        { title: "Fast & Easy Communication", text: "Quick response via WhatsApp" },
      ],
    },
    form: {
      label: "Become a Partner",
      title: "Let's Build a Successful Partnership",
      text: "Fill out the form and our partnership team will contact you to discuss how we can work together and grow your business.",
      points: [
        "Quick response within 24 hours",
        "Dedicated partnership manager",
        "Long-term and mutually beneficial collaboration",
      ],
      fields: [
        { label: "Full Name", placeholder: "Your full name" },
        { label: "Company Name", placeholder: "Your company" },
        { label: "Email Address", placeholder: "your@email.com" },
        { label: "WhatsApp Number", placeholder: "+90 532 123 45 67" },
        { label: "Country", placeholder: "Select your country" },
        { label: "Monthly Patient Volume", placeholder: "Select volume" },
      ],
      messageLabel: "Message (Optional)",
      messagePlaceholder: "Tell us more about your agency and how we can collaborate.",
      button: "Become a Partner",
    },
    cta: {
      title: "Together, we can provide life-changing experiences to more patients.",
      button: "Get in Touch on WhatsApp",
    },
  },
  contactPage: {
    hero: {
      label: "Contact Us",
      title: "We're Here for You,",
      accent: "Every Step of the Way",
      description:
        "Have questions or ready to start your journey? Our team is here to help you anytime. Reach out to us and let's create the best version of you, together.",
      image: "/images/gk-intercare-health-solutions1.avif",
      imageAlt: "GK InterCare contact and consultation support",
      badges: [
        { title: "Trusted Care", text: "Patient safety is our priority." },
        { title: "Expert Team", text: "Experienced specialists." },
        { title: "Quick Response", text: "We reply within a few hours." },
        { title: "Personalized", text: "Care tailored to you." },
      ],
    },
    form: {
      title: "Send Us a Message",
      text: "Fill out the form below and our team will get back to you.",
      secureNote: "Your information is secure and will not be shared.",
      fields: [
        { label: "Full Name", placeholder: "Your full name", type: "text" },
        { label: "Email Address", placeholder: "your@email.com", type: "email" },
        { label: "Phone Number", placeholder: "+1 555 000 0000", type: "tel" },
        { label: "Country", placeholder: "Select your country", type: "text" },
      ],
      subjectLabel: "Subject",
      subjectPlaceholder: "What would you like to inquire about?",
      messageLabel: "Your Message",
      messagePlaceholder: "Tell us about yourself and what you're looking for...",
      consentText:
        "I agree to the processing of my personal data in accordance with the Privacy Policy.",
      button: "Send Message",
    },
    contactBox: {
      title: "Get in Touch",
      text: "You can also reach us directly through the following channels.",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      addressLabel: "Address",
      consultationTitle: "Consultation",
      consultationText: "Book your free consultation and take the first step.",
      consultationButton: "Book a Free Consultation",
    },
    cta: {
      title: "Your transformation journey starts with a simple conversation.",
      text: "No obligation. Just expert advice.",
      button: "Get a Free Consultation",
    },
    stats: [
      {
        value: "10,000+",
        label: "Happy Patients",
        description: "International patients supported before, during, and after treatment.",
      },
      {
        value: "15+",
        label: "Years of Experience",
        description: "Healthcare coordination experience across complex patient journeys.",
      },
      {
        value: "50+",
        label: "Partner Hospitals Worldwide",
        description: "A broad specialist network for personalized treatment planning.",
      },
      {
        value: "95%+",
        label: "Patient Satisfaction Rate",
        description: "Clear communication and care standards focused on patient confidence.",
      },
      {
        value: "24/7",
        label: "Support for International Patients",
        description: "WhatsApp assistance and coordination whenever patients need guidance.",
      },
    ],
  },
};

const spanishOverrides = {
  contact: {
    workingHours: "Lun - Sáb, 09:00 - 18:00 GMT+3",
  },
  ui: {
    ctaEyebrow: "Da el primer paso",
    treatmentCards: {
      eyebrow: "Áreas de tratamiento",
      title: "Atención avanzada para un mañana más saludable",
      description:
        "Ofrecemos atención médica experta con tecnología moderna y un enfoque personalizado para que te sientas seguro en cada etapa.",
      badge: "Tratamiento",
      buttonLabel: "Obtén tu plan personalizado",
      previousLabel: "Diapositiva anterior",
      nextLabel: "Siguiente diapositiva",
    },
  },
  footer: {
    supportTitle: "Soporte",
    headOfficeTitle: "Oficina central",
    socialTitle: "Redes",
    treatmentLinks: [
      { label: "Cirugía plástica" },
      { label: "Odontología" },
      { label: "Cirugía bariátrica" },
      { label: "Ortopedia" },
      { label: "Neurología" },
      { label: "Oncología" },
    ],
    utilityLinks: [
      { label: "Viaje del paciente" },
      { label: "Antes y después" },
      { label: "Para socios" },
      { label: "Contacto" },
      { label: "404" },
    ],
    newsletter: {
      title: "Mantente al día",
      text: "Suscríbete para recibir novedades sobre viajes de salud.",
      placeholder: "Introduce tu email",
      button: "Suscribirse",
    },
  },
  stats: [
    {
      label: "Años de experiencia",
      description:
        "Una década coordinando viajes médicos y ofreciendo apoyo sanitario centrado en el paciente.",
    },
    {
      label: "Pacientes internacionales",
      description:
        "Pacientes de todo el mundo acompañados con planificación clara y atención personal.",
    },
    {
      label: "Hospitales asociados",
      description:
        "Una red médica de confianza con hospitales líderes y clínicas especializadas.",
    },
    {
      label: "Índice de satisfacción del paciente",
      description:
        "Trayectos de atención diseñados en torno a la comodidad, la seguridad, la comunicación y los resultados.",
    },
  ],
  treatments: [
    {
      title: "Cirugía plástica",
      description:
        "Realza tu belleza natural y tu confianza con procedimientos quirúrgicos y estéticos avanzados.",
      tags: [
        "Rinoplastia",
        "Liposucción",
        "Lifting facial",
        "Abdominoplastia",
        "Cirugía mamaria",
        "Aumento de glúteos brasileño",
        "Cirugía de párpados",
        "Trasplante capilar",
      ],
    },
    {
      title: "Odontología",
      description:
        "Consigue una sonrisa sana y bonita con nuestras soluciones integrales de cuidado dental.",
      tags: [
        "Implantes dentales",
        "Coronas y puentes",
        "Carillas",
        "Ortodoncia",
        "Sonrisa Hollywood",
        "Tratamientos de encías",
        "Blanqueamiento dental",
        "Endodoncia",
      ],
    },
    {
      title: "Cirugía bariátrica",
      description:
        "Procedimientos de pérdida de peso seguros y eficaces para una vida más saludable y duradera.",
      tags: [
        "Cirugía bariátrica",
        "Coaching de estilo de vida",
        "Evaluación preoperatoria",
        "Seguimiento posoperatorio",
        "Asesoría nutricional",
        "Apoyo a largo plazo",
      ],
    },
    {
      title: "Ortopedia",
      description:
        "Recupera la movilidad y vive sin dolor con nuestra atención ortopédica experta.",
      tags: [
        "Prótesis de rodilla",
        "Cirugía de columna",
        "Prótesis de cadera",
        "Lesiones deportivas",
        "Artroscopia",
        "Tratamientos para dolor articular",
      ],
    },
    {
      title: "Neurología",
      description:
        "Diagnóstico y tratamiento avanzados para una amplia variedad de enfermedades neurológicas.",
      tags: [
        "Cirugía cerebral y de columna",
        "Migraña y cefalea",
        "Tratamiento de epilepsia",
        "Tratamiento de neuropatía",
        "Esclerosis múltiple (EM)",
        "Rehabilitación tras ictus",
      ],
    },
    {
      title: "Oncología",
      description:
        "Atención oncológica integral con apoyo humano en cada etapa del proceso.",
      tags: [
        "Diagnóstico de cáncer",
        "Terapia dirigida",
        "Quimioterapia",
        "Radioterapia",
        "Inmunoterapia",
        "Seguimiento y apoyo",
      ],
    },
  ],
  doctors: [
    {
      specialty: "Cirujano ORL",
      description:
        "Gürkan Kayabaşoğlu ha concentrado toda su formación y sus estudios científicos en una sola parte del cuerpo humano: el rostro. Realiza cirugías únicamente en el área facial. Por este motivo, el Ministerio de Salud le otorgó el Diploma de Especialización en Cirugía Oral, Facial y Maxilofacial.",
      expertise: [
        "Rinoplastia",
        "Lifting facial y de cuello",
        "Cirugía e implante de mentón",
        "Lifting temporal",
        "Cirugía de párpados",
        "Reducción de frente",
      ],
    },
    {
      specialty: "Cirugía plástica",
      description:
        "El Dr. Mustafa se especializa en procedimientos estéticos y reconstructivos con un fuerte enfoque en la seguridad y satisfacción del paciente. Se dedica a ofrecer atención personalizada y resultados de aspecto natural.",
      expertise: [
        "Rinoplastia",
        "Lifting facial y de cuello",
        "Cirugía mamaria",
        "Liposucción y contorno corporal",
        "Trasplante capilar",
        "Abdominoplastia",
      ],
    },
    {
      specialty: "Trasplante capilar",
      description:
        "El Dr. Bircan es un médico especialista en su campo que ofrece servicios seguros, combinando una sólida formación académica con experiencia profesional. Como resultado, se convirtió en miembro de la International Society of Hair Restoration Surgery (ISHRS).",
      expertise: [
        "Trasplante capilar FUE",
        "Trasplante capilar DHI",
        "Trasplante de barba y bigote",
        "Trasplante de cejas",
        "Trasplante capilar femenino",
      ],
    },
    {
      specialty: "Cirujana ORL",
      description:
        "Obtuvo la Certificación del Board Europeo en Otorrinolaringología y Cirugía de Cabeza y Cuello tras aprobar el examen escrito en Génova, Italia, y el examen oral en Viena, Austria. También es miembro de la European Academy of Facial Plastic Surgery (EAFPS) y de la Sociedad Turca de Cirugía Plástica Facial.",
      expertise: ["Rinoplastia", "Blefaroplastia", "Otoplastia", "Bichectomía", "Estética de mentón"],
    },
    {
      specialty: "Cirujano ORL",
      description:
        "El Profesor Asistente Dr. Oğuzhan OĞUZ, miembro de la Sociedad Turca de Otorrinolaringología y Cirugía de Cabeza y Cuello, la Sociedad de Rinología, la Sociedad del Sueño y la Sociedad de Cirugía Plástica Facial, continúa además su labor académica como profesor a tiempo parcial en la Universidad Nişantaşı.",
      expertise: ["Cirugía ORL", "Rinología", "Cirugía de cabeza y cuello", "Otología", "Laringología"],
    },
    {
      specialty: "Cirugía plástica",
      description:
        "Ha participado en miles de casos y ha adquirido experiencia en una amplia variedad de áreas, desde cirugía reconstructiva hasta microcirugía, desde tratamiento de quemaduras hasta operaciones estéticas. Completó su formación y recibió el título de Especialista en Cirugía Plástica, Reconstructiva y Estética.",
      expertise: [
        "Cirugía reconstructiva",
        "Microcirugía",
        "Tratamiento de quemaduras",
        "Operaciones estéticas",
        "Contorno corporal",
      ],
    },
  ],
  journeySteps: [
    {
      title: "Da el primer paso",
      description:
        "Contáctanos y comparte tus expectativas. Nuestro equipo dedicado está aquí para escucharte, entenderte y guiarte desde el primer momento.",
    },
    {
      title: "Plan médico personalizado",
      description:
        "Nuestros especialistas evalúan cuidadosamente tu caso y crean un plan de tratamiento totalmente adaptado a tus necesidades y al resultado deseado.",
    },
    {
      title: "Planificación inteligente juntos",
      description:
        "Programamos tu procedimiento en el momento más conveniente para ti y organizamos cada detalle para garantizar una experiencia fluida y sin estrés.",
    },
    {
      title: "Experiencia VIP de llegada",
      description:
        "Desde el momento en que aterrizas, todo está organizado. Nuestro equipo de traslado privado te recibe en un Vito de lujo y te acompaña durante todo tu viaje.",
    },
    {
      title: "Vive la transformación",
      description:
        "Relájate y concéntrate en ti mientras nuestro equipo experto consigue resultados excepcionales y naturales. Solo tienes que presenciar la transformación.",
    },
  ],
  metadata: {
    home: {
      title: "GK InterCare | Turismo de salud premium en Estambul",
      description:
        "Atención médica y estética personalizada en Estambul con médicos expertos, apoyo VIP de viaje y coordinación para pacientes internacionales.",
      keywords: ["turismo de salud Estambul", "turismo médico Turquía", "GK InterCare"],
    },
    about: {
      title: "Sobre GK InterCare | Atención internacional dirigida por médicos",
      description:
        "Descubre cómo GK InterCare combina experiencia médica, coordinación premium y apoyo centrado en el paciente para viajes de salud internacionales.",
      keywords: ["sobre GK InterCare", "agencia médica dirigida por doctores", "atención internacional al paciente"],
    },
    treatments: {
      title: "Tratamientos | Cirugía plástica, dental, bariátrica y más",
      description:
        "Explora las áreas de tratamiento de GK InterCare, incluyendo cirugía plástica, odontología, cirugía bariátrica, ortopedia, neurología y oncología.",
      keywords: ["tratamientos en Estambul", "cirugía plástica Turquía", "tratamiento dental Estambul"],
    },
    doctors: {
      title: "Nuestros doctores | Expertos médicos de GK InterCare",
      description:
        "Conoce a los médicos y especialistas experimentados que colaboran con GK InterCare para resultados seguros, personalizados y naturales.",
      keywords: ["doctores en Estambul", "expertos médicos Turquía", "doctores GK InterCare"],
    },
    patientJourney: {
      title: "Viaje del paciente | De la consulta al postratamiento",
      description:
        "Descubre cómo GK InterCare acompaña a pacientes internacionales desde el primer contacto y la planificación hasta la llegada VIP, el tratamiento, la recuperación y el seguimiento.",
      keywords: ["viaje del paciente turismo médico", "viaje médico VIP Estambul", "postratamiento Turquía"],
    },
    beforeAfter: {
      title: "Antes y después | Resultados y testimonios de pacientes",
      description:
        "Descubre historias de transformación de GK InterCare, testimonios de pacientes y categorías de resultados de atención estética personalizada.",
      keywords: ["antes y después Turquía", "testimonios de pacientes", "resultados estéticos Estambul"],
    },
    partners: {
      title: "Para socios | Alianza sanitaria en Estambul",
      description:
        "Colabora con GK InterCare para ofrecer a tus pacientes servicios sanitarios confiables en Estambul, coordinación dedicada y soporte premium.",
      keywords: ["socios sanitarios Estambul", "socio agencia turismo médico", "socios GK InterCare"],
    },
    contact: {
      title: "Contacta con GK InterCare | Consulta gratuita",
      description:
        "Contacta con GK InterCare para una consulta gratuita, soporte por WhatsApp y planificación personalizada de tu tratamiento en Estambul.",
      keywords: ["contactar GK InterCare", "consulta gratuita turismo médico", "WhatsApp turismo de salud"],
    },
  },
  home: {
    hero: {
      label: "Tu viaje. Nuestra misión.",
      title: "Explora atención de confianza.",
      accent: "Crea un viaje de salud más seguro.",
      description:
        "Una experiencia premium de turismo de salud en Estambul, planificada alrededor de tu tratamiento, viaje, comodidad y cuidados posteriores.",
      primaryButton: "Empezar a planificar",
      secondaryButton: "Ver tratamientos",
      formLabel: "Consulta gratuita",
      formTitle: "Planifica tu viaje de atención",
      formText: "Comparte algunos datos y nuestro equipo de coordinación se pondrá en contacto contigo.",
      formButton: "Enviar solicitud de consulta",
      formFields: {
        fullName: { label: "Nombre completo", placeholder: "Tu nombre completo" },
        email: { label: "Email", placeholder: "tu@email.com" },
        phone: { label: "Teléfono", placeholder: "+90 532 123 45 67" },
        country: { label: "País", placeholder: "¿De qué país vienes?" },
        message: {
          label: "Mensaje",
          placeholder: "Cuéntanos qué tratamiento estás considerando.",
        },
      },
      trustItems: [
        { title: "Guía de mejor precio", text: "Planificación clara antes de la llegada" },
        { title: "Soporte 24/7", text: "Asistencia al paciente por WhatsApp" },
        { title: "Clínicas seleccionadas", text: "Red médica de confianza" },
        { title: "Reserva flexible", text: "Fechas de viaje adaptadas a ti" },
      ],
    },
    features: [
      { title: "Traslado VIP desde el aeropuerto", text: "Llegadas privadas y cómodas" },
      { title: "Alojamiento de 5 estrellas", text: "Hoteles de lujo asociados" },
      { title: "Coordinador personal", text: "Soporte al paciente 24/7" },
      { title: "Cuidados posteriores completos", text: "Seguimiento y guía de recuperación" },
    ],
    why: {
      label: "¿Por qué elegir GK InterCare?",
      title: "Tu socio de confianza en salud global",
      cards: [
        {
          title: "Equipo médico experto",
          text: "Trabaja con médicos y especialistas altamente cualificados en sus campos.",
        },
        {
          title: "Estándares internacionales",
          text: "Colaboramos con hospitales y clínicas líderes que cumplen estándares globales.",
        },
        {
          title: "Atención personalizada",
          text: "Cada paciente recibe un plan de tratamiento adaptado a sus necesidades.",
        },
        {
          title: "Resultados comprobados",
          text: "Nuestra prioridad es tu satisfacción y lograr resultados naturales y duraderos.",
        },
      ],
    },
    treatmentsHeader: {
      label: "Tratamientos más populares",
      title: "Tratamientos de clase mundial,",
      accent: "realizados por expertos",
    },
    cta: {
      title: "¿Listo para iniciar tu viaje de salud?",
      text: "Recibe una consulta gratuita de nuestro equipo médico experto.",
      button: "Obtén una consulta gratuita",
    },
  },
  about: {
    hero: {
      label: "Sobre nosotros",
      title: "Experiencia. Compasión.",
      accent: "Atención global.",
      description:
        "GK InterCare es una agencia internacional de salud dedicada a ofrecer servicios médicos de clase mundial con un enfoque personalizado y centrado en el paciente.",
      checklist: [
        "Más de 10 años de experiencia en servicios de salud",
        "Miles de pacientes internacionales satisfechos",
        "Visión dirigida por médicos, atención centrada en el paciente",
        "Red global, experiencia local",
      ],
      button: "Descubre nuestros servicios",
    },
    apart: {
      title: "Lo que nos diferencia",
      items: [
        {
          title: "Atención a pacientes internacionales",
          text: "Te guiamos en cada paso, desde tu primera consulta hasta la recuperación completa.",
        },
        {
          title: "Soporte integral",
          text: "Nuestro equipo está contigo durante todo tu viaje y más allá.",
        },
        {
          title: "Experiencia VIP y a medida",
          text: "Planes de atención personalizados según tus necesidades y objetivos.",
        },
        {
          title: "Red médica de confianza",
          text: "Colaboramos con hospitales y especialistas líderes a nivel mundial.",
        },
      ],
    },
    who: {
      label: "Quiénes somos",
      title: "Más que una agencia,",
      accent: "tu socio en salud.",
      paragraphs: [
        "Con más de una década de experiencia en turismo médico, GK InterCare se ha convertido en un socio de confianza para pacientes de todo el mundo.",
        "Trabajamos con una red cuidadosamente seleccionada de hospitales y especialistas líderes en Estambul para garantizar los más altos estándares de seguridad, calidad y atención.",
      ],
      stats: [
        { label: "Años de experiencia" },
        { label: "Pacientes internacionales" },
        { label: "Índice de satisfacción del paciente" },
        { label: "Hospitales asociados en todo el mundo" },
      ],
    },
    why: {
      label: "¿Por qué elegirnos?",
      title: "Construido sobre experiencia.",
      accent: "Impulsado por la satisfacción del paciente.",
      description: "Nuestro compromiso con la excelencia guía cada aspecto de la atención que ofrecemos.",
      cards: [
        {
          title: "La satisfacción del paciente primero",
          text: "Tu comodidad, seguridad y felicidad están en el centro de todo lo que hacemos.",
        },
        {
          title: "Perspectiva dirigida por médicos",
          text: "Nuestros servicios se basan en la visión y los estándares de médicos experimentados.",
        },
        {
          title: "Atención personalizada en cada paso",
          text: "Desde el primer contacto hasta el último seguimiento, estamos a tu lado.",
        },
        {
          title: "Transparencia y confianza",
          text: "Comunicación clara, orientación honesta y alianzas sanitarias éticas.",
        },
      ],
    },
    vision: {
      label: "Nuestra visión",
      title: "La salud, vivida desde la perspectiva de un médico",
      text: "Creemos que los mejores resultados nacen de combinar excelencia médica con un enfoque personalizado. Nuestro equipo trabaja con perspectiva médica en cada etapa de tu viaje.",
      center: "Evaluamos, planificamos, coordinamos y cuidamos como lo haríamos con nuestra propia familia.",
      quote:
        "Nuestro objetivo es hacer accesible la atención sanitaria de clase mundial sin comprometer la calidad.",
      highlight: "Calidad premium, hecha accesible.",
    },
    promise: {
      label: "Nuestra promesa para ti",
      title: "Calidad premium. Accesible para todos.",
      description:
        "Hacemos que los servicios sanitarios de alto nivel sean más accesibles sin comprometer la seguridad, la calidad ni la comodidad. Porque todos merecen la mejor atención.",
      steps: [
        "Consulta y planificación",
        "Gestión de viaje y llegada",
        "Coordinación del tratamiento",
        "Recuperación y seguimiento",
        "Cuidados posteriores y apoyo a largo plazo",
      ],
    },
    cta: {
      title: "Tu viaje de salud merece experiencia en la que puedas confiar.",
      text: "Estamos aquí para escucharte y guiarte en cada paso.",
      button: "Obtén una consulta gratuita",
    },
  },
  treatmentsPage: {
    hero: {
      label: "Nuestros tratamientos",
      title: "Atención integral.",
      accent: "Personalizada para ti.",
      description:
        "Colaboramos con hospitales y especialistas líderes en Estambul para ofrecer tratamientos de clase mundial en una amplia variedad de disciplinas médicas.",
      imageAlt: "Planificación de tratamientos de GK InterCare en Estambul",
      badges: [
        "Hospitales con acreditación internacional",
        "Enfoque de tratamiento dirigido por médicos",
        "Planes de atención personalizados",
        "Soporte integral",
      ],
    },
    header: {
      label: "Nuestras áreas de tratamiento",
      title: "Tratamientos de clase mundial,",
      accent: "realizados por expertos",
    },
    journey: {
      label: "Tu viaje con nosotros",
      title: "Hacemos que tu viaje de tratamiento sea simple, seguro y exitoso.",
      steps: [
        { title: "Comparte tu información", text: "Cuéntanos tus necesidades" },
        { title: "Recibe tu plan personalizado", text: "Plan de tratamiento a medida" },
        { title: "Viaja a Estambul", text: "Traslado VIP desde el aeropuerto" },
        { title: "Recibe tu tratamiento", text: "Atención de clase mundial" },
        { title: "Cuidados posteriores y seguimiento", text: "Apoyo continuo" },
      ],
    },
    cta: {
      title: "¿Listo para recibir tu plan de tratamiento personalizado?",
      text: "Nuestro equipo médico creará un plan diseñado específicamente para tus necesidades y objetivos.",
      button: "Obtén una consulta gratuita",
    },
  },
  doctorsPage: {
    hero: {
      label: "Nuestros doctores",
      title: "Experiencia en la que puedes confiar,",
      accent: "atención que mereces.",
      description:
        "Nuestros médicos experimentados combinan conocimiento médico avanzado con un enfoque personalizado para ofrecer resultados seguros, eficaces y naturales que mejoran tu confianza y bienestar.",
      imageAlt: "Equipo médico y soluciones de salud de GK InterCare",
      badges: [
        "Especialistas experimentados",
        "Estándares internacionales",
        "Atención centrada en el paciente",
        "Resultados comprobados",
      ],
    },
    header: {
      label: "Conoce a nuestros expertos médicos",
      title: "Profesionales dedicados,",
      accent: "atención excepcional",
    },
    labels: {
      areasOfExpertise: "Áreas de experiencia",
      planButton: "Obtén tu plan personalizado",
    },
    journey: {
      title: "Inicia tu viaje con nuestros expertos",
      text: "Deja que nuestro equipo de especialistas cree un plan de tratamiento personalizado para ti.",
      button: "Obtén una consulta gratuita",
      steps: [
        { title: "Comparte tus objetivos", text: "Cuéntanos tus necesidades y expectativas." },
        { title: "Recibe tu plan", text: "Nuestros expertos crean un plan personalizado para ti." },
        {
          title: "Viaje y tratamiento",
          text: "Te asistimos durante el viaje y el proceso de tratamiento.",
        },
        { title: "Atención y seguimiento", text: "Estamos contigo en cada paso de tu recuperación." },
      ],
    },
  },
  patientJourneyPage: {
    hero: {
      label: "Viaje del paciente",
      title: "Tu viaje,",
      accent: "nuestra prioridad",
      description:
        "Una experiencia fluida diseñada alrededor de tu comodidad, seguridad y resultados excepcionales.",
      imageAlt: "Apoyo al viaje del paciente de GK InterCare",
    },
    cta: {
      title: "Todo lo que necesitas hacer es dar el primer paso.",
      text: "Nosotros nos encargamos del resto.",
      button: "Obtén una consulta gratuita",
    },
    difference: {
      label: "Por qué nos eligen los pacientes",
      title: "La diferencia",
      accent: "GK InterCare",
      description: "Atención y comodidad premium en cada paso de tu viaje.",
      cards: [
        {
          title: "Enfoque especialista en rostro y cuello",
          text: "Experiencia enfocada para resultados naturales y armoniosos.",
        },
        {
          title: "Planificación totalmente personalizada",
          text: "Cada plan se adapta a ti y a tus objetivos.",
        },
        { title: "Servicio de nivel VIP", text: "Atención y comodidad premium en cada paso." },
        {
          title: "Experiencia internacional",
          text: "Pacientes de todo el mundo confían en nosotros.",
        },
      ],
    },
  },
  beforeAfterPage: {
    hero: {
      label: "Pacientes reales. Resultados reales.",
      title: "Fotos de antes y después",
      accent: "y videos testimoniales",
      description:
        "Cada transformación cuenta una historia. Descubre resultados reales logrados por nuestros pacientes con técnicas avanzadas y atención personalizada.",
    },
    filters: ["Todos", "Rostro", "Cuello", "Nariz", "Ojos", "Pecho", "Cuerpo"],
    labels: {
      before: "Antes",
      after: "Después",
      viewDetails: "Ver detalles",
    },
    cases: [
      { title: "Rinoplastia", category: "Nariz", detail: "Refinamiento natural del perfil" },
      { title: "Rinoplastia", category: "Nariz", detail: "Proporción facial equilibrada" },
      { title: "Blefaroplastia", category: "Ojos", detail: "Contorno ocular rejuvenecido" },
      { title: "Lifting de cuello", category: "Cuello", detail: "Cuello y línea mandibular definidos" },
      { title: "Aumento de pecho", category: "Pecho", detail: "Armonía corporal personalizada" },
      { title: "Liposucción", category: "Cuerpo", detail: "Apoyo al contorno corporal" },
    ],
    stats: [
      {
        label: "Pacientes felices",
        description: "Personas reales acompañadas con planificación cuidadosa y atención coordinada.",
      },
      {
        label: "Años de experiencia",
        description: "Experiencia clínica y de coordinación en viajes sanitarios internacionales.",
      },
      {
        label: "Países atendidos",
        description: "Pacientes de muchos países guiados con apoyo multilingüe.",
      },
      {
        label: "Satisfacción del paciente",
        description: "Transformaciones planificadas alrededor de la seguridad, los resultados naturales y la comodidad.",
      },
    ],
    testimonialsHeader: {
      label: "Los pacientes comparten sus experiencias",
      title: "Historias reales,",
      accent: "resultados reales",
      description: "Escucha directamente a nuestros pacientes sobre sus viajes de transformación.",
    },
    testimonials: [
      {
        country: "Reino Unido",
        quote:
          "Me hice una rinoplastia con el Prof. Dr. Gürkan Kayabaşoğlu y los resultados superaron mis expectativas. Mi nariz se ve muy natural y recuperé mi confianza.",
      },
      {
        country: "Alemania",
        quote:
          "Desde la primera consulta hasta el resultado final, todo fue perfecto. El equipo es muy profesional y atento. Totalmente recomendable.",
      },
      {
        country: "Italia",
        quote:
          "Me hice un lifting de cuello y la transformación es increíble. Me veo más joven y renovada. Gracias por todo.",
      },
    ],
    cta: {
      label: "Tu historia podría ser la próxima",
      title: "Tu historia de transformación podría ser la próxima.",
      text: "Creemos juntos tu mejor versión.",
      button: "Empieza tu transformación hoy",
      features: [
        "Resultados de aspecto natural",
        "Técnicas avanzadas",
        "Atención personalizada",
        "Equipo experto",
      ],
    },
  },
  partnersPage: {
    hero: {
      label: "Para socios",
      title: "Colabora con un proveedor sanitario de confianza",
      accent: "en Estambul",
      description:
        "Colaboramos con agencias y facilitadores de todo el mundo para ofrecer experiencias sanitarias excepcionales y resultados sobresalientes para tus pacientes.",
      imageAlt: "Alianza sanitaria internacional de GK InterCare",
      badges: ["Experiencia confiable", "Alianza fiable", "Calidad premium", "Colaboración global"],
      supportTitle: "Soporte dedicado para socios",
      supportText: "Tu propio coordinador durante todo el proceso",
    },
    models: {
      label: "Modelos de colaboración flexibles",
      title: "Dos formas de trabajar juntos",
      items: [
        {
          title: "Envía tus pacientes a Estambul",
          text: "Ofrecemos servicios completos de viaje médico en Estambul con opciones VIP y económicas.",
          points: [
            "Alojamiento y traslados VIP",
            "Citas prioritarias",
            "Servicios de traducción y concierge",
            "Cuidado posoperatorio y seguimiento",
          ],
        },
        {
          title: "Vamos a tu país",
          text: "Visitamos tu país para consultas e incluso cirugías en colaboración con hospitales locales.",
          points: [
            "Consultas presenciales para pacientes",
            "Cirugías en hospitales asociados",
            "Formación e intercambio de conocimiento",
            "Colaboración a largo plazo",
          ],
        },
      ],
    },
    benefits: {
      label: "Beneficios para socios",
      title: "¿Por qué colaborar con",
      accent: "GK InterCare?",
      items: [
        { title: "Comisiones competitivas", text: "Gana hasta un 20% por paciente" },
        { title: "Precios flexibles", text: "Precios personalizados para cada caso" },
        { title: "Expertos médicos líderes", text: "Acceso a cirujanos destacados" },
        { title: "Experiencia VIP para pacientes", text: "Servicio de alto nivel para tus pacientes" },
        { title: "Soporte de marketing y materiales", text: "Te proporcionamos herramientas promocionales" },
        { title: "Comunicación rápida y fácil", text: "Respuesta rápida por WhatsApp" },
      ],
    },
    form: {
      label: "Conviértete en socio",
      title: "Construyamos una colaboración exitosa",
      text: "Completa el formulario y nuestro equipo de alianzas se pondrá en contacto contigo para hablar sobre cómo podemos trabajar juntos y hacer crecer tu negocio.",
      points: [
        "Respuesta rápida en 24 horas",
        "Gestor de alianzas dedicado",
        "Colaboración a largo plazo y mutuamente beneficiosa",
      ],
      fields: [
        { label: "Nombre completo", placeholder: "Tu nombre completo" },
        { label: "Nombre de la empresa", placeholder: "Tu empresa" },
        { label: "Email", placeholder: "tu@email.com" },
        { label: "Número de WhatsApp", placeholder: "+90 532 123 45 67" },
        { label: "País", placeholder: "Selecciona tu país" },
        { label: "Volumen mensual de pacientes", placeholder: "Selecciona volumen" },
      ],
      messageLabel: "Mensaje (opcional)",
      messagePlaceholder: "Cuéntanos más sobre tu agencia y cómo podemos colaborar.",
      button: "Conviértete en socio",
    },
    cta: {
      title: "Juntos podemos ofrecer experiencias que cambian la vida a más pacientes.",
      button: "Contactar por WhatsApp",
    },
  },
  contactPage: {
    hero: {
      label: "Contacto",
      title: "Estamos aquí para ti,",
      accent: "en cada paso del camino",
      description:
        "¿Tienes preguntas o estás listo para empezar? Nuestro equipo está aquí para ayudarte en cualquier momento. Contáctanos y creemos juntos tu mejor versión.",
      imageAlt: "Soporte de contacto y consulta de GK InterCare",
      badges: [
        { title: "Atención confiable", text: "La seguridad del paciente es nuestra prioridad." },
        { title: "Equipo experto", text: "Especialistas experimentados." },
        { title: "Respuesta rápida", text: "Respondemos en pocas horas." },
        { title: "Personalizado", text: "Atención adaptada a ti." },
      ],
    },
    form: {
      title: "Envíanos un mensaje",
      text: "Completa el formulario y nuestro equipo te responderá.",
      secureNote: "Tu información está segura y no se compartirá.",
      fields: [
        { label: "Nombre completo", placeholder: "Tu nombre completo" },
        { label: "Email", placeholder: "tu@email.com" },
        { label: "Número de teléfono", placeholder: "+1 555 000 0000" },
        { label: "País", placeholder: "Selecciona tu país" },
      ],
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿Sobre qué te gustaría consultar?",
      messageLabel: "Tu mensaje",
      messagePlaceholder: "Cuéntanos sobre ti y lo que estás buscando...",
      consentText:
        "Acepto el tratamiento de mis datos personales de acuerdo con la Política de Privacidad.",
      button: "Enviar mensaje",
    },
    contactBox: {
      title: "Ponte en contacto",
      text: "También puedes contactarnos directamente a través de los siguientes canales.",
      phoneLabel: "Teléfono / WhatsApp",
      emailLabel: "Email",
      addressLabel: "Dirección",
      consultationTitle: "Consulta",
      consultationText: "Reserva tu consulta gratuita y da el primer paso.",
      consultationButton: "Reservar consulta gratuita",
    },
    cta: {
      title: "Tu viaje de transformación empieza con una conversación sencilla.",
      text: "Sin compromiso. Solo asesoramiento experto.",
      button: "Obtén una consulta gratuita",
    },
    stats: [
      {
        label: "Pacientes felices",
        description: "Pacientes internacionales acompañados antes, durante y después del tratamiento.",
      },
      {
        label: "Años de experiencia",
        description: "Experiencia en coordinación sanitaria a lo largo de viajes complejos del paciente.",
      },
      {
        label: "Hospitales asociados en todo el mundo",
        description: "Una amplia red de especialistas para una planificación personalizada del tratamiento.",
      },
      {
        label: "Índice de satisfacción del paciente",
        description: "Comunicación clara y estándares de atención centrados en la confianza del paciente.",
      },
      {
        label: "Soporte para pacientes internacionales",
        description: "Asistencia por WhatsApp y coordinación siempre que los pacientes necesiten orientación.",
      },
    ],
  },
};

const italianOverrides = {
  contact: {
    workingHours: "Lun - Sab, 09:00 - 18:00 GMT+3",
  },
  ui: {
    ctaEyebrow: "Fai il primo passo",
    treatmentCards: {
      eyebrow: "Aree di trattamento",
      title: "Cure avanzate per un domani più sano",
      description:
        "Offriamo assistenza medica specialistica con tecnologia moderna e un approccio personalizzato per aiutarti a sentirti sicuro in ogni fase.",
      badge: "Trattamento",
      buttonLabel: "Ricevi il tuo piano personalizzato",
      previousLabel: "Slide precedente",
      nextLabel: "Slide successiva",
    },
  },
  footer: {
    supportTitle: "Supporto",
    headOfficeTitle: "Sede centrale",
    socialTitle: "Social",
    treatmentLinks: [
      { label: "Chirurgia plastica" },
      { label: "Odontoiatria" },
      { label: "Chirurgia bariatrica" },
      { label: "Ortopedia" },
      { label: "Neurologia" },
      { label: "Oncologia" },
    ],
    utilityLinks: [
      { label: "Percorso del paziente" },
      { label: "Prima e dopo" },
      { label: "Per partner" },
      { label: "Contatti" },
      { label: "404" },
    ],
    newsletter: {
      title: "Rimani aggiornato",
      text: "Iscriviti per ricevere aggiornamenti sui viaggi sanitari.",
      placeholder: "Inserisci la tua email",
      button: "Iscriviti",
    },
  },
  stats: [
    {
      label: "Anni di esperienza",
      description:
        "Un decennio di viaggi medici coordinati e supporto sanitario centrato sul paziente.",
    },
    {
      label: "Pazienti internazionali",
      description:
        "Pazienti da tutto il mondo seguiti con pianificazione chiara e assistenza personale.",
    },
    {
      label: "Ospedali partner",
      description:
        "Una rete medica affidabile con ospedali leader e cliniche specialistiche.",
    },
    {
      label: "Tasso di soddisfazione dei pazienti",
      description:
        "Percorsi di cura costruiti attorno a comfort, sicurezza, comunicazione e risultati.",
    },
  ],
  treatments: [
    {
      title: "Chirurgia plastica",
      description:
        "Valorizza la tua bellezza naturale e la tua sicurezza con procedure chirurgiche ed estetiche avanzate.",
      tags: [
        "Rinoplastica",
        "Liposuzione",
        "Lifting del viso",
        "Addominoplastica",
        "Chirurgia del seno",
        "Brazilian Butt Lift",
        "Chirurgia delle palpebre",
        "Trapianto di capelli",
      ],
    },
    {
      title: "Odontoiatria",
      description:
        "Ottieni un sorriso sano e bello con le nostre soluzioni complete di cura dentale.",
      tags: [
        "Impianti dentali",
        "Corone e ponti",
        "Faccette dentali",
        "Ortodonzia",
        "Hollywood Smile",
        "Trattamenti gengivali",
        "Sbiancamento dentale",
        "Terapia canalare",
      ],
    },
    {
      title: "Chirurgia bariatrica",
      description:
        "Procedure di perdita di peso sicure ed efficaci per una vita più sana e più lunga.",
      tags: [
        "Chirurgia bariatrica",
        "Coaching sullo stile di vita",
        "Valutazione preoperatoria",
        "Follow-up postoperatorio",
        "Consulenza nutrizionale",
        "Supporto a lungo termine",
      ],
    },
    {
      title: "Ortopedia",
      description:
        "Recupera la mobilità e vivi senza dolore con la nostra assistenza ortopedica specialistica.",
      tags: [
        "Protesi del ginocchio",
        "Chirurgia della colonna",
        "Protesi dell'anca",
        "Infortuni sportivi",
        "Artroscopia",
        "Trattamenti per dolori articolari",
      ],
    },
    {
      title: "Neurologia",
      description:
        "Diagnosi e trattamenti avanzati per un'ampia gamma di condizioni neurologiche.",
      tags: [
        "Chirurgia cerebrale e spinale",
        "Emicrania e cefalea",
        "Trattamento dell'epilessia",
        "Trattamento della neuropatia",
        "Sclerosi multipla (SM)",
        "Riabilitazione post-ictus",
      ],
    },
    {
      title: "Oncologia",
      description:
        "Assistenza oncologica completa con supporto umano in ogni fase del percorso.",
      tags: [
        "Diagnosi del cancro",
        "Terapia mirata",
        "Chemioterapia",
        "Radioterapia",
        "Immunoterapia",
        "Follow-up e supporto",
      ],
    },
  ],
  doctors: [
    {
      specialty: "Chirurgo ORL",
      description:
        "Gürkan Kayabaşoğlu ha concentrato tutta la sua formazione e i suoi studi scientifici su una sola parte del corpo umano: il viso. Esegue interventi esclusivamente nell'area facciale. Per questo motivo ha ricevuto dal Ministero della Salute il Diploma di Specializzazione in Chirurgia Orale, Facciale e Maxillo-Facciale.",
      expertise: [
        "Rinoplastica",
        "Lifting viso e collo",
        "Chirurgia e impianto del mento",
        "Lifting temporale",
        "Chirurgia delle palpebre",
        "Riduzione della fronte",
      ],
    },
    {
      specialty: "Chirurgia plastica",
      description:
        "Il Dr. Mustafa è specializzato in procedure estetiche e ricostruttive con una forte attenzione alla sicurezza e alla soddisfazione del paziente. Si dedica a offrire cure personalizzate e risultati dall'aspetto naturale.",
      expertise: [
        "Rinoplastica",
        "Lifting viso e collo",
        "Chirurgia del seno",
        "Liposuzione e rimodellamento corporeo",
        "Trapianto di capelli",
        "Addominoplastica",
      ],
    },
    {
      specialty: "Trapianto di capelli",
      description:
        "Il Dr. Bircan è un medico specialista nel suo campo e offre servizi sicuri, combinando una solida formazione accademica con esperienza professionale. Di conseguenza è diventato membro della International Society of Hair Restoration Surgery (ISHRS).",
      expertise: [
        "Trapianto FUE",
        "Trapianto DHI",
        "Trapianto di barba e baffi",
        "Trapianto di sopracciglia",
        "Trapianto di capelli femminile",
      ],
    },
    {
      specialty: "Chirurga ORL",
      description:
        "Ha ottenuto la Certificazione del Board Europeo in Otorinolaringoiatria e Chirurgia Testa-Collo superando l'esame scritto a Genova, Italia, e l'esame orale a Vienna, Austria. È inoltre membro della European Academy of Facial Plastic Surgery (EAFPS) e della Società Turca di Chirurgia Plastica Facciale.",
      expertise: ["Rinoplastica", "Blefaroplastica", "Otoplastica", "Bichectomia", "Estetica del mento"],
    },
    {
      specialty: "Chirurgo ORL",
      description:
        "L'Assistente Professore Dr. Oğuzhan OĞUZ, membro della Società Turca di Otorinolaringoiatria e Chirurgia Testa-Collo, della Società di Rinologia, della Società del Sonno e della Società di Chirurgia Plastica Facciale, continua anche la sua attività accademica come docente part-time presso l'Università Nişantaşı.",
      expertise: ["Chirurgia ORL", "Rinologia", "Chirurgia testa-collo", "Otologia", "Laringologia"],
    },
    {
      specialty: "Chirurgia plastica",
      description:
        "Ha seguito migliaia di casi e maturato esperienza in un'ampia gamma di aree, dalla chirurgia ricostruttiva alla microchirurgia, dal trattamento delle ustioni agli interventi estetici. Ha completato la formazione e ottenuto il titolo di Specialista in Chirurgia Plastica, Ricostruttiva ed Estetica.",
      expertise: [
        "Chirurgia ricostruttiva",
        "Microchirurgia",
        "Trattamento delle ustioni",
        "Interventi estetici",
        "Rimodellamento corporeo",
      ],
    },
  ],
  journeySteps: [
    {
      title: "Fai il primo passo",
      description:
        "Contattaci e condividi le tue aspettative. Il nostro team dedicato è qui per ascoltarti, comprenderti e guidarti fin dall'inizio.",
    },
    {
      title: "Piano medico personalizzato",
      description:
        "I nostri specialisti valutano attentamente il tuo caso e creano un piano di trattamento completamente su misura per le tue esigenze e il risultato desiderato.",
    },
    {
      title: "Pianificazione intelligente insieme",
      description:
        "Programmiamo la procedura nel momento più comodo per te e organizziamo ogni dettaglio per garantire un'esperienza fluida e senza stress.",
    },
    {
      title: "Esperienza VIP all'arrivo",
      description:
        "Dal momento in cui atterri, tutto è già organizzato. Il nostro team di transfer privato ti accoglie in un Vito di lusso e ti accompagna durante tutto il percorso.",
    },
    {
      title: "Vivi la trasformazione",
      description:
        "Rilassati e concentrati su te stesso mentre il nostro team esperto realizza risultati eccezionali e naturali. Devi solo vivere la trasformazione.",
    },
  ],
  metadata: {
    home: {
      title: "GK InterCare | Turismo sanitario premium a Istanbul",
      description:
        "Assistenza medica ed estetica personalizzata a Istanbul con medici esperti, supporto VIP per il viaggio e coordinamento per pazienti internazionali.",
      keywords: ["turismo sanitario Istanbul", "turismo medico Turchia", "GK InterCare"],
    },
    about: {
      title: "Chi è GK InterCare | Assistenza internazionale guidata da medici",
      description:
        "Scopri come GK InterCare combina competenza medica, coordinamento premium e supporto centrato sul paziente per percorsi sanitari internazionali.",
      keywords: ["chi è GK InterCare", "agenzia sanitaria guidata da medici", "assistenza pazienti internazionali"],
    },
    treatments: {
      title: "Trattamenti | Chirurgia plastica, dentale, bariatrica e altro",
      description:
        "Esplora le aree di trattamento di GK InterCare, tra cui chirurgia plastica, odontoiatria, chirurgia bariatrica, ortopedia, neurologia e oncologia.",
      keywords: ["trattamenti a Istanbul", "chirurgia plastica Turchia", "trattamento dentale Istanbul"],
    },
    doctors: {
      title: "I nostri medici | Esperti medici GK InterCare",
      description:
        "Conosci i medici e gli specialisti esperti che collaborano con GK InterCare per risultati sicuri, personalizzati e naturali.",
      keywords: ["medici a Istanbul", "esperti medici Turchia", "medici GK InterCare"],
    },
    patientJourney: {
      title: "Percorso del paziente | Dalla consulenza al follow-up",
      description:
        "Scopri come GK InterCare supporta i pazienti internazionali dal primo contatto e dalla pianificazione fino all'arrivo VIP, al trattamento, al recupero e al follow-up.",
      keywords: ["percorso paziente turismo medico", "viaggio medico VIP Istanbul", "follow-up Turchia"],
    },
    beforeAfter: {
      title: "Prima e dopo | Risultati e testimonianze dei pazienti",
      description:
        "Scopri storie di trasformazione GK InterCare, testimonianze dei pazienti e categorie di risultati da cure estetiche personalizzate.",
      keywords: ["prima dopo Turchia", "testimonianze pazienti", "risultati estetici Istanbul"],
    },
    partners: {
      title: "Per partner | Partnership sanitaria a Istanbul",
      description:
        "Collabora con GK InterCare per offrire ai tuoi pazienti servizi sanitari affidabili a Istanbul, coordinamento dedicato e supporto premium.",
      keywords: ["partner sanitari Istanbul", "partner agenzia turismo medico", "partner GK InterCare"],
    },
    contact: {
      title: "Contatta GK InterCare | Consulenza gratuita",
      description:
        "Contatta GK InterCare per una consulenza gratuita, supporto WhatsApp e pianificazione personalizzata del tuo percorso sanitario a Istanbul.",
      keywords: ["contatta GK InterCare", "consulenza gratuita turismo medico", "WhatsApp turismo sanitario"],
    },
  },
  home: {
    hero: {
      label: "Il tuo percorso. La nostra missione.",
      title: "Scopri cure affidabili.",
      accent: "Crea un percorso sanitario più sicuro.",
      description:
        "Un'esperienza premium di turismo sanitario a Istanbul, pianificata attorno alle tue esigenze di trattamento, viaggio, comfort e assistenza post-trattamento.",
      primaryButton: "Inizia a pianificare",
      secondaryButton: "Vedi i trattamenti",
      formLabel: "Consulenza gratuita",
      formTitle: "Pianifica il tuo percorso di cura",
      formText: "Condividi alcuni dettagli e il nostro team di coordinamento pazienti ti contatterà.",
      formButton: "Invia richiesta di consulenza",
      formFields: {
        fullName: { label: "Nome completo", placeholder: "Il tuo nome completo" },
        email: { label: "Email", placeholder: "tu@email.com" },
        phone: { label: "Telefono", placeholder: "+90 532 123 45 67" },
        country: { label: "Paese", placeholder: "Da quale paese vieni?" },
        message: {
          label: "Messaggio",
          placeholder: "Raccontaci quale trattamento stai considerando.",
        },
      },
      trustItems: [
        { title: "Guida al miglior prezzo", text: "Pianificazione chiara prima dell'arrivo" },
        { title: "Supporto 24/7", text: "Assistenza pazienti via WhatsApp" },
        { title: "Cliniche selezionate", text: "Rete medica affidabile" },
        { title: "Prenotazione flessibile", text: "Tempi di viaggio costruiti intorno a te" },
      ],
    },
    features: [
      { title: "Transfer VIP dall'aeroporto", text: "Arrivi privati e confortevoli" },
      { title: "Alloggio a 5 stelle", text: "Hotel partner di lusso" },
      { title: "Coordinatore personale", text: "Supporto pazienti 24/7" },
      { title: "Assistenza post-trattamento completa", text: "Follow-up e guida al recupero" },
    ],
    why: {
      label: "Perché scegliere GK InterCare?",
      title: "Il tuo partner di fiducia nella sanità globale",
      cards: [
        {
          title: "Team medico esperto",
          text: "Lavora con medici e specialisti altamente qualificati nei loro campi.",
        },
        {
          title: "Standard internazionali",
          text: "Collaboriamo con ospedali e cliniche leader che rispettano standard globali.",
        },
        {
          title: "Assistenza personalizzata",
          text: "Ogni paziente riceve un piano di trattamento su misura per le proprie esigenze.",
        },
        {
          title: "Risultati comprovati",
          text: "La nostra priorità è la tua soddisfazione e risultati naturali e duraturi.",
        },
      ],
    },
    treatmentsHeader: {
      label: "Trattamenti più richiesti",
      title: "Trattamenti di livello mondiale,",
      accent: "erogati da esperti",
    },
    cta: {
      title: "Pronto a iniziare il tuo percorso sanitario?",
      text: "Ricevi una consulenza gratuita dal nostro team medico esperto.",
      button: "Ricevi una consulenza gratuita",
    },
  },
  about: {
    hero: {
      label: "Chi siamo",
      title: "Esperienza. Empatia.",
      accent: "Cura globale.",
      description:
        "GK InterCare è un'agenzia sanitaria internazionale dedicata a offrire servizi medici di livello mondiale con un approccio personalizzato e centrato sul paziente.",
      checklist: [
        "Oltre 10 anni di esperienza nei servizi sanitari",
        "Migliaia di pazienti internazionali soddisfatti",
        "Visione guidata da medici, cura centrata sul paziente",
        "Rete globale, competenza locale",
      ],
      button: "Scopri i nostri servizi",
    },
    apart: {
      title: "Cosa ci distingue",
      items: [
        {
          title: "Assistenza per pazienti internazionali",
          text: "Ti guidiamo in ogni fase, dalla prima richiesta fino al completo recupero.",
        },
        {
          title: "Supporto end-to-end",
          text: "Il nostro team è con te durante tutto il percorso e oltre.",
        },
        {
          title: "Esperienza VIP e su misura",
          text: "Piani di cura personalizzati in base alle tue esigenze e ai tuoi obiettivi.",
        },
        {
          title: "Rete medica affidabile",
          text: "Collaboriamo con ospedali e specialisti leader a livello mondiale.",
        },
      ],
    },
    who: {
      label: "Chi siamo",
      title: "Più di un'agenzia,",
      accent: "il tuo partner per la salute.",
      paragraphs: [
        "Con oltre un decennio di esperienza nel turismo medico, GK InterCare è diventata un partner di fiducia per pazienti da tutto il mondo.",
        "Lavoriamo con una rete attentamente selezionata di ospedali e specialisti leader a Istanbul per garantire i più alti standard di sicurezza, qualità e cura.",
      ],
      stats: [
        { label: "Anni di esperienza" },
        { label: "Pazienti internazionali" },
        { label: "Tasso di soddisfazione dei pazienti" },
        { label: "Ospedali partner nel mondo" },
      ],
    },
    why: {
      label: "Perché sceglierci?",
      title: "Fondati sull'esperienza.",
      accent: "Guidati dalla soddisfazione del paziente.",
      description: "Il nostro impegno per l'eccellenza guida ogni aspetto dell'assistenza che offriamo.",
      cards: [
        {
          title: "Soddisfazione del paziente al primo posto",
          text: "Il tuo comfort, la tua sicurezza e la tua felicità sono al centro di tutto ciò che facciamo.",
        },
        {
          title: "Prospettiva guidata da medici",
          text: "I nostri servizi sono modellati dall'esperienza e dagli standard di medici esperti.",
        },
        {
          title: "Cura personalizzata in ogni fase",
          text: "Dal primo contatto all'ultimo follow-up, siamo al tuo fianco.",
        },
        {
          title: "Trasparenza e fiducia",
          text: "Comunicazione chiara, guida onesta e partnership sanitarie etiche.",
        },
      ],
    },
    vision: {
      label: "La nostra visione",
      title: "La sanità vissuta attraverso la prospettiva di un medico",
      text: "Crediamo che i migliori risultati nascano dall'unione tra eccellenza medica e approccio personalizzato. Il nostro team lavora con una prospettiva medica in ogni fase del tuo percorso.",
      center: "Valutiamo, pianifichiamo, coordiniamo e ci prendiamo cura di te come faremmo con la nostra famiglia.",
      quote:
        "Il nostro obiettivo è rendere accessibile la sanità di livello mondiale senza compromettere la qualità.",
      highlight: "Qualità premium, resa accessibile.",
    },
    promise: {
      label: "La nostra promessa per te",
      title: "Qualità premium. Accessibile a tutti.",
      description:
        "Rendiamo i servizi sanitari di alto livello più accessibili senza compromettere sicurezza, qualità o comfort. Perché tutti meritano le migliori cure.",
      steps: [
        "Consulenza e pianificazione",
        "Gestione viaggio e arrivo",
        "Coordinamento del trattamento",
        "Recupero e follow-up",
        "Assistenza post-trattamento e supporto a lungo termine",
      ],
    },
    cta: {
      title: "Il tuo percorso sanitario merita esperienza di cui fidarti.",
      text: "Siamo qui per ascoltarti e guidarti in ogni fase.",
      button: "Ricevi una consulenza gratuita",
    },
  },
  treatmentsPage: {
    hero: {
      label: "I nostri trattamenti",
      title: "Cura completa.",
      accent: "Personalizzata per te.",
      description:
        "Collaboriamo con ospedali e specialisti leader a Istanbul per offrire trattamenti di livello mondiale in un'ampia gamma di discipline mediche.",
      imageAlt: "Pianificazione dei trattamenti GK InterCare a Istanbul",
      badges: [
        "Ospedali accreditati a livello internazionale",
        "Approccio terapeutico guidato da medici",
        "Piani di cura personalizzati",
        "Supporto end-to-end",
      ],
    },
    header: {
      label: "Le nostre aree di trattamento",
      title: "Trattamenti di livello mondiale,",
      accent: "erogati da esperti",
    },
    journey: {
      label: "Il tuo percorso con noi",
      title: "Rendiamo il tuo percorso di trattamento semplice, sicuro e di successo.",
      steps: [
        { title: "Condividi le tue informazioni", text: "Raccontaci le tue esigenze" },
        { title: "Ricevi il tuo piano personalizzato", text: "Piano di trattamento su misura" },
        { title: "Viaggia a Istanbul", text: "Transfer VIP dall'aeroporto" },
        { title: "Ricevi il trattamento", text: "Cure di livello mondiale" },
        { title: "Assistenza e follow-up", text: "Supporto continuo" },
      ],
    },
    cta: {
      title: "Pronto a ricevere il tuo piano di trattamento personalizzato?",
      text: "Il nostro team medico creerà un piano progettato specificamente per le tue esigenze e i tuoi obiettivi.",
      button: "Ricevi una consulenza gratuita",
    },
  },
  doctorsPage: {
    hero: {
      label: "I nostri medici",
      title: "Competenza di cui fidarti,",
      accent: "cure che meriti.",
      description:
        "I nostri medici esperti combinano competenze mediche avanzate con un approccio personalizzato per offrire risultati sicuri, efficaci e naturali che migliorano la tua fiducia e il tuo benessere.",
      imageAlt: "Team medico e soluzioni sanitarie GK InterCare",
      badges: [
        "Specialisti esperti",
        "Standard internazionali",
        "Cura centrata sul paziente",
        "Risultati comprovati",
      ],
    },
    header: {
      label: "Conosci i nostri esperti medici",
      title: "Professionisti dedicati,",
      accent: "cure eccezionali",
    },
    labels: {
      areasOfExpertise: "Aree di competenza",
      planButton: "Ricevi il tuo piano personalizzato",
    },
    journey: {
      title: "Inizia il tuo percorso con i nostri esperti",
      text: "Lascia che il nostro team di specialisti crei un piano di trattamento personalizzato per te.",
      button: "Ricevi una consulenza gratuita",
      steps: [
        { title: "Condividi i tuoi obiettivi", text: "Raccontaci le tue esigenze e aspettative." },
        { title: "Ricevi il tuo piano", text: "I nostri esperti creano un piano personalizzato per te." },
        {
          title: "Viaggio e trattamento",
          text: "Ti assistiamo durante il viaggio e il processo di trattamento.",
        },
        { title: "Cura e follow-up", text: "Siamo con te in ogni fase del recupero." },
      ],
    },
  },
  patientJourneyPage: {
    hero: {
      label: "Percorso del paziente",
      title: "Il tuo percorso,",
      accent: "la nostra priorità",
      description:
        "Un'esperienza fluida progettata intorno al tuo comfort, alla tua sicurezza e a risultati eccezionali.",
      imageAlt: "Supporto al percorso del paziente GK InterCare",
    },
    cta: {
      title: "Tutto ciò che devi fare è compiere il primo passo.",
      text: "Al resto pensiamo noi.",
      button: "Ricevi una consulenza gratuita",
    },
    difference: {
      label: "Perché i pazienti ci scelgono",
      title: "La differenza",
      accent: "GK InterCare",
      description: "Cura e comfort premium in ogni fase del tuo percorso.",
      cards: [
        {
          title: "Approccio specialistico viso e collo",
          text: "Competenza mirata per risultati naturali e armoniosi.",
        },
        {
          title: "Pianificazione completamente personalizzata",
          text: "Ogni piano è adattato a te e ai tuoi obiettivi.",
        },
        { title: "Servizio di livello VIP", text: "Cura e comfort premium in ogni fase." },
        {
          title: "Esperienza internazionale",
          text: "Scelti da pazienti da tutto il mondo.",
        },
      ],
    },
  },
  beforeAfterPage: {
    hero: {
      label: "Pazienti reali. Risultati reali.",
      title: "Foto prima e dopo",
      accent: "e video testimonianze",
      description:
        "Ogni trasformazione racconta una storia. Scopri risultati reali ottenuti dai nostri pazienti con tecniche avanzate e cure personalizzate.",
    },
    filters: ["Tutti", "Viso", "Collo", "Naso", "Occhi", "Seno", "Corpo"],
    labels: {
      before: "Prima",
      after: "Dopo",
      viewDetails: "Vedi dettagli",
    },
    cases: [
      { title: "Rinoplastica", category: "Naso", detail: "Raffinamento naturale del profilo" },
      { title: "Rinoplastica", category: "Naso", detail: "Proporzioni del viso equilibrate" },
      { title: "Blefaroplastica", category: "Occhi", detail: "Contorno occhi rinfrescato" },
      { title: "Lifting del collo", category: "Collo", detail: "Collo e mandibola definiti" },
      { title: "Aumento del seno", category: "Seno", detail: "Armonia corporea personalizzata" },
      { title: "Liposuzione", category: "Corpo", detail: "Supporto al rimodellamento corporeo" },
    ],
    stats: [
      {
        label: "Pazienti soddisfatti",
        description: "Persone reali supportate con pianificazione attenta e assistenza coordinata.",
      },
      {
        label: "Anni di esperienza",
        description: "Esperienza clinica e di coordinamento nei percorsi sanitari internazionali.",
      },
      {
        label: "Paesi serviti",
        description: "Pazienti guidati da molti paesi con supporto multilingue.",
      },
      {
        label: "Soddisfazione dei pazienti",
        description: "Trasformazioni pianificate attorno a sicurezza, risultati naturali e comfort.",
      },
    ],
    testimonialsHeader: {
      label: "I pazienti condividono le loro esperienze",
      title: "Storie reali,",
      accent: "risultati reali",
      description: "Ascolta direttamente dai nostri pazienti i loro percorsi di trasformazione.",
    },
    testimonials: [
      {
        country: "Regno Unito",
        quote:
          "Ho fatto una rinoplastica con il Prof. Dr. Gürkan Kayabaşoğlu e i risultati hanno superato le mie aspettative. Il mio naso sembra così naturale e ho ritrovato fiducia.",
      },
      {
        country: "Germania",
        quote:
          "Dalla prima consulenza al risultato finale, tutto è stato perfetto. Il team è molto professionale e premuroso. Consigliatissimo.",
      },
      {
        country: "Italia",
        quote:
          "Ho fatto un lifting del collo e la trasformazione è incredibile. Sembro più giovane e fresca. Grazie di tutto.",
      },
    ],
    cta: {
      label: "La tua storia potrebbe essere la prossima",
      title: "La tua storia di trasformazione potrebbe essere la prossima.",
      text: "Creiamo insieme la tua versione migliore.",
      button: "Inizia oggi la tua trasformazione",
      features: [
        "Risultati dall'aspetto naturale",
        "Tecniche avanzate",
        "Cura personalizzata",
        "Team esperto",
      ],
    },
  },
  partnersPage: {
    hero: {
      label: "Per partner",
      title: "Collabora con un provider sanitario affidabile",
      accent: "a Istanbul",
      description:
        "Collaboriamo con agenzie e facilitatori in tutto il mondo per offrire esperienze sanitarie eccezionali e risultati eccellenti ai tuoi pazienti.",
      imageAlt: "Partnership sanitaria internazionale GK InterCare",
      badges: ["Competenza affidabile", "Partnership solida", "Qualità premium", "Collaborazione globale"],
      supportTitle: "Supporto dedicato ai partner",
      supportText: "Il tuo coordinatore personale per tutto il processo",
    },
    models: {
      label: "Modelli di partnership flessibili",
      title: "Due modi per lavorare insieme",
      items: [
        {
          title: "Invia i tuoi pazienti a Istanbul",
          text: "Forniamo servizi completi di viaggio medico a Istanbul con opzioni VIP ed economiche.",
          points: [
            "Alloggio e transfer VIP",
            "Appuntamenti prioritari",
            "Servizi di traduzione e concierge",
            "Cura postoperatoria e follow-up",
          ],
        },
        {
          title: "Veniamo noi da te",
          text: "Visitiamo il tuo paese per consulenze e persino interventi chirurgici in collaborazione con ospedali locali.",
          points: [
            "Consulenze pazienti in loco",
            "Interventi in ospedali partner",
            "Formazione e condivisione delle conoscenze",
            "Collaborazione a lungo termine",
          ],
        },
      ],
    },
    benefits: {
      label: "Vantaggi per i partner",
      title: "Perché collaborare con",
      accent: "GK InterCare?",
      items: [
        { title: "Commissioni competitive", text: "Guadagna fino al 20% per paziente" },
        { title: "Prezzi flessibili", text: "Prezzi personalizzati per ogni caso" },
        { title: "Massimi esperti medici", text: "Accesso a chirurghi leader" },
        { title: "Esperienza VIP per pazienti", text: "Servizio di alto livello per i tuoi pazienti" },
        { title: "Supporto marketing e materiali", text: "Ti forniamo strumenti promozionali" },
        { title: "Comunicazione rapida e semplice", text: "Risposta veloce via WhatsApp" },
      ],
    },
    form: {
      label: "Diventa partner",
      title: "Costruiamo una partnership di successo",
      text: "Compila il modulo e il nostro team partnership ti contatterà per discutere come possiamo lavorare insieme e far crescere la tua attività.",
      points: [
        "Risposta rapida entro 24 ore",
        "Partnership manager dedicato",
        "Collaborazione a lungo termine e reciprocamente vantaggiosa",
      ],
      fields: [
        { label: "Nome completo", placeholder: "Il tuo nome completo" },
        { label: "Nome azienda", placeholder: "La tua azienda" },
        { label: "Email", placeholder: "tu@email.com" },
        { label: "Numero WhatsApp", placeholder: "+90 532 123 45 67" },
        { label: "Paese", placeholder: "Seleziona il tuo paese" },
        { label: "Volume mensile di pazienti", placeholder: "Seleziona volume" },
      ],
      messageLabel: "Messaggio (opzionale)",
      messagePlaceholder: "Raccontaci di più sulla tua agenzia e su come possiamo collaborare.",
      button: "Diventa partner",
    },
    cta: {
      title: "Insieme possiamo offrire esperienze che cambiano la vita a più pazienti.",
      button: "Contattaci su WhatsApp",
    },
  },
  contactPage: {
    hero: {
      label: "Contatti",
      title: "Siamo qui per te,",
      accent: "in ogni fase del percorso",
      description:
        "Hai domande o sei pronto a iniziare il tuo percorso? Il nostro team è qui per aiutarti in qualsiasi momento. Contattaci e creiamo insieme la tua versione migliore.",
      imageAlt: "Supporto contatto e consulenza GK InterCare",
      badges: [
        { title: "Cura affidabile", text: "La sicurezza del paziente è la nostra priorità." },
        { title: "Team esperto", text: "Specialisti esperti." },
        { title: "Risposta rapida", text: "Rispondiamo entro poche ore." },
        { title: "Personalizzato", text: "Cure su misura per te." },
      ],
    },
    form: {
      title: "Inviaci un messaggio",
      text: "Compila il modulo qui sotto e il nostro team ti ricontatterà.",
      secureNote: "Le tue informazioni sono al sicuro e non saranno condivise.",
      fields: [
        { label: "Nome completo", placeholder: "Il tuo nome completo" },
        { label: "Email", placeholder: "tu@email.com" },
        { label: "Numero di telefono", placeholder: "+1 555 000 0000" },
        { label: "Paese", placeholder: "Seleziona il tuo paese" },
      ],
      subjectLabel: "Oggetto",
      subjectPlaceholder: "Su cosa vorresti ricevere informazioni?",
      messageLabel: "Il tuo messaggio",
      messagePlaceholder: "Raccontaci di te e di cosa stai cercando...",
      consentText:
        "Acconsento al trattamento dei miei dati personali in conformità con l'Informativa Privacy.",
      button: "Invia messaggio",
    },
    contactBox: {
      title: "Mettiti in contatto",
      text: "Puoi contattarci direttamente anche attraverso i seguenti canali.",
      phoneLabel: "Telefono / WhatsApp",
      emailLabel: "Email",
      addressLabel: "Indirizzo",
      consultationTitle: "Consulenza",
      consultationText: "Prenota la tua consulenza gratuita e fai il primo passo.",
      consultationButton: "Prenota una consulenza gratuita",
    },
    cta: {
      title: "Il tuo percorso di trasformazione inizia con una semplice conversazione.",
      text: "Nessun obbligo. Solo consulenza esperta.",
      button: "Ricevi una consulenza gratuita",
    },
    stats: [
      {
        label: "Pazienti soddisfatti",
        description: "Pazienti internazionali supportati prima, durante e dopo il trattamento.",
      },
      {
        label: "Anni di esperienza",
        description: "Esperienza di coordinamento sanitario in percorsi paziente complessi.",
      },
      {
        label: "Ospedali partner nel mondo",
        description: "Un'ampia rete specialistica per una pianificazione terapeutica personalizzata.",
      },
      {
        label: "Tasso di soddisfazione dei pazienti",
        description: "Comunicazione chiara e standard di cura focalizzati sulla fiducia del paziente.",
      },
      {
        label: "Supporto per pazienti internazionali",
        description: "Assistenza WhatsApp e coordinamento ogni volta che i pazienti hanno bisogno di guida.",
      },
    ],
  },
};

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function mergeContent(base, override) {
  if (Array.isArray(base) && Array.isArray(override)) {
    const shouldMergeByIndex = base.every(isPlainObject) && override.every(isPlainObject);

    if (!shouldMergeByIndex) {
      return override;
    }

    return Array.from({ length: Math.max(base.length, override.length) }, (_, index) =>
      base[index] && override[index] ? mergeContent(base[index], override[index]) : (override[index] ?? base[index]),
    );
  }

  if (isPlainObject(base) && isPlainObject(override)) {
    const keys = new Set([...Object.keys(base), ...Object.keys(override)]);

    return Object.fromEntries(
      Array.from(keys).map((key) => [
        key,
        key in base && key in override ? mergeContent(base[key], override[key]) : (override[key] ?? base[key]),
      ]),
    );
  }

  return override ?? base;
}

function normalizeLocale(locale) {
  return supportedLocales.includes(locale) ? locale : "en";
}

const contentByLocale = {
  en: englishContent,
  es: mergeContent(englishContent, spanishOverrides),
  it: mergeContent(englishContent, italianOverrides),
};

function localizedPath(locale, path) {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function getSiteContent(locale = "en") {
  return contentByLocale[normalizeLocale(locale)];
}

export function getPageMetadata(locale, pageKey) {
  const normalizedLocale = normalizeLocale(locale);
  const content = getSiteContent(normalizedLocale);
  const path = pagePaths[pageKey] || "/";
  const metadata = content.metadata[pageKey] || content.metadata.home;
  const canonical = localizedPath(normalizedLocale, path);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gkintercare.com"),
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        supportedLocales.map((supportedLocale) => [
          supportedLocale,
          localizedPath(supportedLocale, path),
        ]),
      ),
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: canonical,
      siteName: "GK InterCare",
      locale: normalizedLocale,
      type: "website",
      images: [
        {
          url: "/images/logo/logo.png",
          width: 1200,
          height: 630,
          alt: "GK InterCare",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: ["/images/logo/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

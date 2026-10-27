export interface MedicalService {
  id: string;
  title: string;
  category: 'Gastroenterology' | 'Liver Care' | 'Endoscopy & Diagnostics' | 'Specialized Procedures' | 'Consultations & Specialties';
  type: 'diagnostic' | 'treatment' | 'procedure' | 'specialist_consultation';
  shortDesc: string;
  detailedDesc: string;
  tags: string[];
  isProcedureConfirmed?: boolean;
}

export interface PatientReview {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  source: 'Justdial';
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  managingDirector: string;
  phone: string;
  secondaryPhone: string;
  displayPhone: string;
  phoneVerificationNote: string;
  email: string;
  address: {
    line1: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  rating: {
    score: number;
    count: number;
    source: string;
    note: string;
  };
  operatingHours: string;
  paymentMethods: string[];
}

export const businessInfo: BusinessInfo = {
  name: "Sashreek Gastro & Liver Center",
  tagline: "Comprehensive Digestive & Hepatobiliary Healthcare in Warangal",
  subTagline: "Evidence-based gastroenterology, liver care, and advanced endoscopic diagnostics delivered with clinical precision and compassionate care.",
  managingDirector: "Mr. Gottumukkala Sashreek (Managing Director)",
  phone: "+919550401487",
  secondaryPhone: "+919618084444",
  displayPhone: "+91 95504 01487 / +91 96180 84444",
  phoneVerificationNote: "Listed public contact number via directory listing; please confirm prior to major clinical appointments.",
  email: "sashreek12@gmail.com",
  address: {
    line1: "H.No. 1-8-622, Sree Laxmi Test Tube Baby Center",
    landmark: "Beside LIC Building, Balasamudram Road",
    locality: "Balasamudram",
    city: "Warangal",
    state: "Telangana",
    postalCode: "506001",
    country: "India",
    fullFormatted: "H.No. 1-8-622, Sree Laxmi Test Tube Baby Center, Beside LIC Building, Balasamudram Road, Balasamudram, Warangal - 506001, Telangana, India"
  },
  geo: {
    latitude: 18.006573,
    longitude: 79.557752
  },
  rating: {
    score: 5.0,
    count: 15,
    source: "Justdial Verified Directory",
    note: "Rated 5.0/5 based on 15 verified patient submissions on Justdial. External directory ratings reflect patient feedback and do not constitute clinical outcome guarantees."
  },
  operatingHours: "Open 24 Hours / Consultation scheduling during outpatient timings",
  paymentMethods: ["UPI", "Cash", "Net Banking", "PhonePe", "Paytm", "Amazon Pay", "MobiKwik", "JioMoney"]
};

export const medicalServices: MedicalService[] = [
  // --- Gastroenterology ---
  {
    id: "gerd",
    title: "Gastro-Oesophageal Reflux (GERD) Management",
    category: "Gastroenterology",
    type: "treatment",
    shortDesc: "Comprehensive diagnosis and targeted medical management for persistent acid reflux, heartburn, and regurgitation.",
    detailedDesc: "Gastro-Oesophageal Reflux Disease (GERD) requires structured clinical evaluation, lifestyle counseling, and medical therapy to prevent esophageal mucosal irritation and complications.",
    tags: ["Acid Reflux", "Heartburn", "Digestive Health", "Esophagus"]
  },
  {
    id: "gastroenteritis",
    title: "Gastroenteritis & Acute GI Infections",
    category: "Gastroenterology",
    type: "treatment",
    shortDesc: "Rapid clinical care, rehydration therapy, and infection management for acute intestinal inflammation and food-borne illnesses.",
    detailedDesc: "In-depth outpatient and daycare management for bacterial, viral, and parasitic gastroenteritis, focusing on fluid-electrolyte balance and gastrointestinal symptom recovery.",
    tags: ["Infection", "Stomach Flu", "Acute Care", "Dehydration"]
  },
  {
    id: "acute-pancreatitis",
    title: "Acute Pancreatitis Care",
    category: "Gastroenterology",
    type: "treatment",
    shortDesc: "Specialized clinical diagnosis, etiology assessment, and therapeutic monitoring for acute pancreatic inflammation.",
    detailedDesc: "Early diagnosis, rigorous fluid management, pain alleviation, and etiology investigation (such as gallstones or metabolic factors) to mitigate severe complications.",
    tags: ["Pancreas", "Abdominal Pain", "Emergency Care"]
  },
  {
    id: "pancreas-stone",
    title: "Pancreas Stone Management",
    category: "Gastroenterology",
    type: "treatment",
    shortDesc: "Diagnostic imaging, enzyme support, and multidisciplinary planning for chronic pancreatitis calculi.",
    detailedDesc: "Evaluation of intraductal pancreatic calcifications with specialized management strategies designed to preserve pancreatic exocrine/endocrine reserve and relieve obstruction.",
    tags: ["Calculi", "Chronic Pancreatitis", "Ductal Disease"]
  },
  {
    id: "abdominal-tb",
    title: "Abdominal Tuberculosis Evaluation",
    category: "Gastroenterology",
    type: "treatment",
    shortDesc: "Targeted clinical workup, imaging review, and anti-tubercular management for intestinal and peritoneal TB.",
    detailedDesc: "Abdominal tuberculosis often mimics other chronic bowel conditions. Accurate histological, radiological, and clinical diagnostic pathways are implemented for timely recovery.",
    tags: ["Infectious Disease", "Peritoneal TB", "Intestinal TB"]
  },

  // --- Liver Care ---
  {
    id: "steatosis",
    title: "Steatosis (Fatty Liver Disease)",
    category: "Liver Care",
    type: "treatment",
    shortDesc: "Early risk stratification, metabolic profiling, and hepatoprotective regimens for non-alcoholic fatty liver disease (NAFLD/MASLD).",
    detailedDesc: "Structured therapeutic pathways focusing on hepatic fat reduction, lifestyle modification, metabolic syndrome management, and preventing progression to steatohepatitis.",
    tags: ["Fatty Liver", "Metabolic Health", "Hepatology"]
  },
  {
    id: "cirrhosis",
    title: "Cirrhosis Care & Hepatic Monitoring",
    category: "Liver Care",
    type: "treatment",
    shortDesc: "Long-term clinical surveillance, portal hypertension monitoring, and decompensation prevention for chronic liver disease.",
    detailedDesc: "Comprehensive hepatobiliary care designed to stabilize hepatic reserve, prevent ascites and variceal bleeding, and coordinate timely advanced interventions.",
    tags: ["Chronic Liver Disease", "Portal Hypertension", "Hepatology"]
  },
  {
    id: "ascites",
    title: "Ascites Treatment & Paracentesis Workup",
    category: "Liver Care",
    type: "treatment",
    shortDesc: "Diagnostic fluid evaluation, sodium-restricted diuretic optimization, and therapeutic paracentesis coordination.",
    detailedDesc: "Specialized clinical care for intra-abdominal fluid accumulation caused by portal hypertension, cardiac, or peritoneal etiologies.",
    tags: ["Fluid Accumulation", "Hepatobiliary", "Diagnostic Workup"]
  },
  {
    id: "gallbladder-stone",
    title: "Gall Bladder Stone Care",
    category: "Liver Care",
    type: "treatment",
    shortDesc: "Clinical evaluation of biliary colic, ultrasound assessment, and referral pathways for cholelithiasis management.",
    detailedDesc: "Thorough assessment of gallstones, acute cholecystitis risk assessment, and collaborative surgical triage when cholecystectomy is indicated.",
    tags: ["Gallstones", "Biliary Tract", "Cholecystitis"]
  },

  // --- Endoscopy & Diagnostics ---
  {
    id: "ogd-scopy",
    title: "OGD Scopy (Upper GI Endoscopy)",
    category: "Endoscopy & Diagnostics",
    type: "diagnostic",
    shortDesc: "Direct visual evaluation of the esophagus, stomach, and duodenum for ulcers, erosions, and reflux.",
    detailedDesc: "High-definition endoscopic visualization providing accurate mucosal assessment, biopsy capability, and bleeding source localization under patient sedation.",
    tags: ["Upper GI", "Endoscopy", "Gastroscopy", "Biopsy"]
  },
  {
    id: "colonoscopy",
    title: "Colonoscopy Examination",
    category: "Endoscopy & Diagnostics",
    type: "diagnostic",
    shortDesc: "Diagnostic lower GI evaluation to examine the large intestine for polyps, inflammation, bleeding, or colonic lesions.",
    detailedDesc: "Comprehensive endoscopic surveillance enabling full colorectal mucosal visualization, early polyp detection, and screening for inflammatory bowel conditions.",
    tags: ["Colonoscopy", "Lower GI", "Screening", "Polyps"]
  },
  {
    id: "capsule-endoscopy",
    title: "Capsule Endoscopy Information & Referral",
    category: "Endoscopy & Diagnostics",
    type: "diagnostic",
    shortDesc: "Non-invasive video capsule visualization designed to evaluate obscure small bowel pathologies.",
    detailedDesc: "Specialized wireless capsule technology for viewing segments of the small intestine unreachable by conventional upper endoscopy or colonoscopy.",
    tags: ["Small Bowel", "Wireless Capsule", "Non-Invasive"]
  },
  {
    id: "eus",
    title: "Endoscopic Ultrasound (EUS)",
    category: "Endoscopy & Diagnostics",
    type: "diagnostic",
    shortDesc: "High-resolution ultrasonic visualization of deep GI wall layers, lymph nodes, and pancreaticobiliary organs.",
    detailedDesc: "Combines endoscopy and ultrasound to provide detailed anatomical cross-sections of the gastrointestinal wall and adjacent mediastinal or abdominal structures.",
    tags: ["EUS", "Pancreas", "Biliary", "Imaging"]
  },
  {
    id: "fibroscan",
    title: "FibroScan (Transient Elastography) Guidance",
    category: "Endoscopy & Diagnostics",
    type: "diagnostic",
    shortDesc: "Non-invasive liver stiffness and steatosis quantitative measurement for liver fibrosis tracking.",
    detailedDesc: "Clinical consultation and staging for liver stiffness without requiring invasive liver biopsy, aiding in the surveillance of chronic hepatitis and fatty liver.",
    tags: ["Liver Stiffness", "Fibrosis", "Non-Invasive", "Elastography"]
  },

  // --- Specialized Procedures ---
  {
    id: "polypectomy",
    title: "Endoscopic Polypectomy",
    category: "Specialized Procedures",
    type: "procedure",
    shortDesc: "Safe endoscopic snare excision of gastrointestinal polyps to prevent dysplasia and malignancy.",
    detailedDesc: "Therapeutic resection of mucosal and submucosal polyps discovered during upper or lower endoscopy, submitted for histopathological examination.",
    tags: ["Polyp Removal", "Therapeutic Endoscopy", "Cancer Prevention"]
  },
  {
    id: "variceal-banding",
    title: "Endoscopic Variceal Banding (EVL)",
    category: "Specialized Procedures",
    type: "procedure",
    shortDesc: "Endoscopic ligation of esophageal varices to arrest or prevent portal hypertensive upper GI bleeding.",
    detailedDesc: "Critical therapeutic procedure placing elastic bands around dilated venous channels in the esophagus under controlled endoscopic vision.",
    tags: ["Varices", "Emergency Hemostasis", "Cirrhosis Care"]
  },
  {
    id: "peg-tube",
    title: "PEG (Percutaneous Endoscopic Gastrostomy) Placement",
    category: "Specialized Procedures",
    type: "procedure",
    shortDesc: "Minimally invasive endoscopic enteral feeding tube insertion for patients requiring nutritional support.",
    detailedDesc: "Direct stomach access tube placement under endoscopic transillumination for long-term enteral nutrition in neurological or swallowing disorders.",
    tags: ["Enteral Nutrition", "PEG", "Supportive Care"]
  },
  {
    id: "esophageal-dilatation",
    title: "Esophageal Dilatation",
    category: "Specialized Procedures",
    type: "procedure",
    shortDesc: "Controlled balloon or bougie dilatation for esophageal strictures, webs, rings, or achalasia.",
    detailedDesc: "Graduated lumen restoration to relieve dysphagia (swallowing difficulties) caused by peptic strictures, surgical anastomoses, or motility disorders.",
    tags: ["Stricture", "Dysphagia", "Swallowing", "Dilatation"]
  },
  {
    id: "hemicolectomy",
    title: "Colorectal & Hemicolectomy Surgical Care",
    category: "Specialized Procedures",
    type: "procedure",
    shortDesc: "Pre-operative evaluation, surgical triage, and post-operative gastrointestinal recovery management.",
    detailedDesc: "Multidisciplinary surgical coordination for benign or complicated colorectal pathology requiring partial bowel resection.",
    tags: ["Colorectal Surgery", "Surgical GI", "Colon Care"]
  },

  // --- Consultations & Doctor Specialties (Listed Categories) ---
  {
    id: "specialist-gastroenterologist",
    title: "Gastroenterologist Consultation",
    category: "Consultations & Specialties",
    type: "specialist_consultation",
    shortDesc: "Expert physician consultation for acute and chronic disorders of the stomach, intestine, and pancreas.",
    detailedDesc: "Thorough clinical examination, personalized diagnostic roadmap, and ongoing therapeutic follow-up with specialized gastroenterologists.",
    tags: ["Doctor Consultation", "Gastroenterologist", "Clinical Diagnosis"]
  },
  {
    id: "specialist-motility",
    title: "Motility Disorder Specialist Consultation",
    category: "Consultations & Specialties",
    type: "specialist_consultation",
    shortDesc: "Targeted evaluation for achalasia, gastroparesis, chronic constipation, and neuromuscular gut conditions.",
    detailedDesc: "Investigative review and medical therapy coordination for dysmotility, pelvic floor dysfunction, and uncoordinated intestinal transit.",
    tags: ["Gut Motility", "Achalasia", "Gastroparesis", "Constipation"]
  },
  {
    id: "specialist-apc",
    title: "Argon Plasma Coagulation (APC) Consultation",
    category: "Consultations & Specialties",
    type: "specialist_consultation",
    shortDesc: "Clinical review for non-contact thermal hemostasis in vascular lesions like GAVE and radiation proctitis.",
    detailedDesc: "Specialist consultation to assess candidates for APC thermal ablation of superficial bleeding gastrointestinal vascular ectasias.",
    tags: ["Thermal Hemostasis", "APC", "Vascular Ectasia"]
  },
  {
    id: "specialist-hospital",
    title: "Gastroenterology Hospital & Daycare Services",
    category: "Consultations & Specialties",
    type: "specialist_consultation",
    shortDesc: "Dedicated gastro daycare, observation suites, and emergency outpatient triage in Balasamudram, Warangal.",
    detailedDesc: "Comprehensive patient care infrastructure equipped for diagnostic recovery, IV infusions, and supervised clinical observation.",
    tags: ["Daycare", "Hospital Facilities", "Infusions", "Monitoring"]
  }
];

export const patientReviews: PatientReview[] = [
  {
    id: "rev-1",
    author: "Narendar Banoth",
    date: "7th October, 2026",
    rating: 5,
    text: "I visited the hospital recently. Hospitality was very good and treatment was done with great care. He explained everything very well regarding the condition and next steps.",
    source: "Justdial"
  },
  {
    id: "rev-2",
    author: "Paramesh",
    date: "22nd September, 2026",
    rating: 5,
    text: "Dr. Sashreek explained every step of my diagnosis and treatment plan in a way that was very easy to understand. Very happy with the treatment and compassionate approach.",
    source: "Justdial"
  },
  {
    id: "rev-3",
    author: "Abbu Punnam Chander",
    date: "19th September, 2026",
    rating: 5,
    text: "Highly recommended gastroenterologist. The clinic is very neat and clean with short waiting times. Attentive staff and proper care throughout.",
    source: "Justdial"
  },
  {
    id: "rev-4",
    author: "Raju",
    date: "17th September, 2026",
    rating: 5,
    text: "The doctor was incredibly kind and attentive. Listened carefully, answered all questions patiently, and made me feel at ease throughout the visit. Truly supportive.",
    source: "Justdial"
  },
  {
    id: "rev-5",
    author: "Chandu",
    date: "11th September, 2026",
    rating: 5,
    text: "Sashreek Gastro & Liver Center is a great place for treatment. Short wait times, spotless hygiene, easily accessible location beside LIC building, and transparent fee coverage.",
    source: "Justdial"
  },
  {
    id: "rev-6",
    author: "Sankar",
    date: "11th September, 2026",
    rating: 5,
    text: "Clean and hygienic facility which made me feel safe. All instruments and equipment are well maintained and sterilized. Highly recommend for gastro or liver care.",
    source: "Justdial"
  },
  {
    id: "rev-7",
    author: "Ranjith",
    date: "11th September, 2026",
    rating: 5,
    text: "Knowledgeable and caring doctors. Conveniently located center in Balasamudram with helpful staff and clear guidance on medical treatments.",
    source: "Justdial"
  },
  {
    id: "rev-8",
    author: "Yash Bachani",
    date: "11th September, 2026",
    rating: 5,
    text: "Reasonable prices, sterile equipment, and friendly staff. Customer service was supportive throughout my consultation. Very positive experience overall.",
    source: "Justdial"
  },
  {
    id: "rev-9",
    author: "Shouri",
    date: "9th September, 2026",
    rating: 5,
    text: "Impeccably clean and hygienic facility ensuring patient safety at every step. Quick service that minimized waiting times with sterilized equipment. Exemplary experience.",
    source: "Justdial"
  },
  {
    id: "rev-10",
    author: "Pallati Akhil",
    date: "9th October, 2026",
    rating: 5,
    text: "Treatment was great during my recent visit. Strongly recommend this hospital for anyone seeking experienced digestive and liver health care.",
    source: "Justdial"
  }
];

export const clinicHighlights = [
  {
    title: "Dedicated Gastro & Liver Center",
    desc: "Focused medical center exclusively addressing gastrointestinal, esophageal, intestinal, and hepatobiliary health.",
    metric: "Focused Specialty"
  },
  {
    title: "Verified 5.0 / 5.0 Rating",
    desc: "Consistently rated 5.0 stars across 15 verified patient submissions on Justdial for clinical cleanliness, short wait times, and compassionate consultations.",
    metric: "5.0 ★ Justdial"
  },
  {
    title: "Modern Sterilization & Hygiene",
    desc: "Rigorous hygiene standards, clean consultation suites, and sterilized diagnostic instrumentation recognized by visiting patients.",
    metric: "Sterile Standards"
  },
  {
    title: "Centrally Located in Balasamudram",
    desc: "Conveniently situated beside LIC Building on Balasamudram Road, Warangal, with seamless road connectivity across the tri-cities.",
    metric: "Prime Location"
  }
];

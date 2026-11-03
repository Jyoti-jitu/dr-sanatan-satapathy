export const conditionsData = [
  {
    slug: "brain-tumour",
    category: "Brain",
    title: "Brain Tumour",
    scientificName: "Intracranial Neoplasm (Benign & Malignant)",
    summary: "An abnormal growth of cellular tissue within the rigid cranial vault, requiring precise neurosurgical evaluation, imaging assessment, and individualized care.",
    overview: "A brain tumour develops when cells inside the brain or surrounding meninges replicate abnormally. Because the bony skull cannot expand, any space-occupying lesion can increase intracranial pressure and impinge upon vital neural structures. Brain tumours can be primary (originating in brain tissue or coverings, such as meningiomas and gliomas) or secondary (metastatic from other sites).",
    symptoms: [
      "New, persistent headaches that are often worse in the early morning or with straining",
      "Unexplained nausea, vomiting, or sudden visual disturbances (blurring, double vision)",
      "New-onset seizures or convulsions in an adult with no prior seizure history",
      "Progressive weakness, numbness, or heaviness on one side of the face, arm, or leg",
      "Subtle or marked personality alterations, cognitive slowing, or memory impairment",
      "Difficulty with balance, walking coordination, or slurred speech"
    ],
    causes: [
      "Genetic factors and cellular mutations affecting growth-regulating genes",
      "Prior exposure to high-dose ionizing radiation (rare)",
      "Benign neoplastic transformation of meningeal or nerve sheath cells (e.g. meningiomas, schwannomas)",
      "Secondary spread from primary systemic cancers via the bloodstream"
    ],
    diagnosticEvaluation: [
      "Contrast-Enhanced Magnetic Resonance Imaging (CEMRI Brain) – Gold standard for anatomical definition and tissue characterization",
      "MR Spectroscopy & Diffusion Tensor Imaging (DTI) – Evaluates cellular metabolites and relationship to critical speech/motor white matter tracts",
      "High-Resolution Computed Tomography (CT Scan) – Evaluates bony involvement, calcification, and acute hemorrhage",
      "Histopathological & Molecular Examination – Definite post-biopsy or post-resection diagnosis guiding adjuvant oncological therapies"
    ],
    treatmentOptions: [
      {
        type: "Microsurgical Resection",
        desc: "Precision craniotomy utilizing the operating microscope and neuronavigation to excise maximum tumor volume while preserving neurological function."
      },
      {
        type: "Awake Craniotomy with Cortical Mapping",
        desc: "For tumors located within eloquent motor or language cortex, enabling continuous clinical testing during lesion removal."
      },
      {
        type: "Stereotactic Biopsy",
        desc: "Minimally invasive needle sampling for deep, diffuse, or non-resectable lesions requiring tissue diagnosis."
      },
      {
        type: "Multidisciplinary Adjuvant Care",
        desc: "Coordinated radiation oncology, stereotactic radiosurgery (SRS/Gamma Knife), and chemotherapy based on tumor molecular genetics."
      }
    ],
    whenToConsult: "Seek urgent medical attention if experiencing new persistent headaches accompanied by morning vomiting, unexpected seizures, sudden weakness in limbs, or speech difficulties.",
    relatedServiceSlug: "brain-surgery",
    relatedServiceName: "Brain Surgery & Microneurosurgery",
    faqs: [
      {
        q: "Are all brain tumours fatal or malignant?",
        a: "No. A large proportion of brain tumours are benign (non-cancerous), such as meningiomas, pituitary adenomas, and acoustic neuromas. With timely surgical removal, many benign lesions are cured or effectively controlled for decades."
      },
      {
        q: "What determines whether a brain tumour can be surgically removed?",
        a: "Surgical feasibility depends on tumor location (surface vs. deep brainstem), proximity to major blood vessels, patient general health, and whether the lesion is well-circumscribed or diffuse."
      }
    ]
  },
  {
    slug: "slipped-disc",
    category: "Spine",
    title: "Slipped Disc",
    scientificName: "Intervertebral Disc Herniation / Prolapse",
    summary: "Displacement of the soft central nucleus pulposus through a weakened fibrous outer ring, producing painful compression of nearby spinal nerve roots.",
    overview: "Intervertebral discs act as shock-absorbing cushions between spinal vertebrae. With aging, wear-and-tear, or sudden biomechanical strain, the tough fibrous outer layer (annulus fibrosus) can tear. The inner gelatinous core (nucleus pulposus) protrudes into the spinal canal or exit foramen, causing acute mechanical pressure and chemical inflammation on passing nerve roots.",
    symptoms: [
      "Sharp, electric, or burning pain radiating down the leg (sciatica) or into the arm and fingers",
      "Numbness, tingling, or 'pins-and-needles' sensation along specific dermatomal nerve paths",
      "Localized lower back or neck pain exacerbated by bending forward, coughing, or sneezing",
      "Muscle weakness in the foot (foot drop), calf, quadriceps, or hand grip",
      "Difficulty standing upright or walking more than a few minutes without resting"
    ],
    causes: [
      "Age-related degenerative disc desiccation (loss of hydration and resilience)",
      "Improper lifting mechanics, heavy manual labor, or sudden twisting injuries",
      "Chronic sedentary lifestyle and poor sitting ergonomics weakening spinal musculature",
      "Excessive body weight increasing continuous axial load on lower lumbar discs",
      "Genetic predisposition to early connective tissue laxity"
    ],
    diagnosticEvaluation: [
      "Magnetic Resonance Imaging (MRI Spine) – Visualizes disc protrusion size, canal compromise, and exact nerve root impingement",
      "Digital X-Rays (Flexion/Extension) – Evaluates spinal alignment, disc space narrowing, and segment stability",
      "Electromyography & Nerve Conduction Studies (EMG/NCS) – Assesses physiological nerve function and distinguishes radiculopathy from peripheral neuropathy"
    ],
    treatmentOptions: [
      {
        type: "Structured Conservative Management",
        desc: "Initial 4–6 weeks of short rest, activity modification, NSAIDs, neuropathic pain modulators, and guided physical therapy."
      },
      {
        type: "Targeted Epidural Steroid Injections",
        desc: "Fluoroscopy-guided transforaminal nerve blocks to reduce acute chemical inflammation around the irritated nerve root."
      },
      {
        type: "Endoscopic Microdiscectomy",
        desc: "Minimally invasive removal of only the offending disc fragment through a pencil-sized port, preserving healthy disc architecture."
      },
      {
        type: "Microscopic Tubular Discectomy",
        desc: "Microscopic decompression through muscle-splitting tubular retractors for complex multi-level or migrated fragments."
      }
    ],
    whenToConsult: "Consult a spine specialist if leg or arm pain persists beyond two weeks, or immediately if you develop progressive muscle weakness (e.g. inability to lift foot) or loss of bowel/bladder sensation (Cauda Equina Syndrome).",
    relatedServiceSlug: "endoscopic-spine-surgery",
    relatedServiceName: "Endoscopic Spine Surgery",
    faqs: [
      {
        q: "Does every slipped disc require surgery?",
        a: "No. Approximately 85% to 90% of slipped discs resolve without surgery within 6 to 12 weeks through conservative medical management and structured physiotherapy."
      },
      {
        q: "What is Cauda Equina Syndrome?",
        a: "It is a rare surgical emergency caused by massive central disc herniation compressing the entire bundle of lower spinal nerves. Symptoms include sudden loss of bladder/bowel control, numbness in the groin/saddle area, and weakness in both legs. Immediate emergency surgery within 24-48 hours is required."
      }
    ]
  },
  {
    slug: "spinal-stenosis",
    category: "Spine",
    title: "Spinal Stenosis",
    scientificName: "Spinal Canal & Foraminal Stenosis",
    summary: "Progressive narrowing of the central spinal canal or neural exit openings, crowding nerve roots and creating leg cramping during walking.",
    overview: "Spinal stenosis is a common degenerative condition where the osseous canal housing the spinal cord and nerve roots narrows over time. Thickened ligaments (ligamentum flavum), arthritic facet joint enlargement, and bulging discs collectively crowd the spinal canal, leading to compromised neural blood supply during upright walking and activity.",
    symptoms: [
      "Neurogenic Claudication: Cramping, heaviness, or numbness in buttocks, thighs, and calves after walking short distances",
      "Relief of symptoms when bending forward, sitting, or leaning over a shopping cart ('shopping cart sign')",
      "Persistent lower back stiffness and diminished walking tolerance",
      "Loss of balance or unsteady walking gait in severe cervical canal stenosis",
      "Numbness in hands and impaired fine motor dexterity (difficulty buttoning shirts)"
    ],
    causes: [
      "Degenerative spondylosis and facet joint osteoarthritis forming bony spurs (osteophytes)",
      "Hypertrophy and calcification of spinal ligaments (ligamentum flavum)",
      "Degenerative spondylolisthesis (slippage of one vertebra over another)",
      "Congenital narrow spinal canal predisposing individuals to earlier symptomatic stenosis"
    ],
    diagnosticEvaluation: [
      "MRI of Lumbar/Cervical Spine – Quantifies canal dimensions, dural sac compression, and nerve crowding",
      "Dynamic Plain Radiographs – Evaluates forward or backward vertebral slippage during flexion and extension",
      "CT Myelogram – Useful in patients unable to undergo MRI (e.g. non-MRI compatible pacemakers)"
    ],
    treatmentOptions: [
      {
        type: "Physical Therapy & Posture Modification",
        desc: "Core conditioning, flexion-based lumbar exercises, and stationary cycling which naturally widens the spinal canal."
      },
      {
        type: "Interventional Spinal Pain Injections",
        desc: "Interlaminar or caudal epidural steroid injections delivering anti-inflammatory relief to congested neural pathways."
      },
      {
        type: "Minimally Invasive Bilateral Decompression",
        desc: "Under-cutting stenotic bone and trimming thickened ligament from a unilateral approach without destabilizing the spine."
      },
      {
        type: "Decompression with Spinal Stabilization",
        desc: "Indicated when severe stenosis is accompanied by true mechanical spondylolisthesis and segment hypermobility."
      }
    ],
    whenToConsult: "Consult when walking tolerance progressively decreases, pain limits everyday activities, or signs of hand clumsiness or balance loss develop.",
    relatedServiceSlug: "minimally-invasive-spine-surgery",
    relatedServiceName: "Minimally Invasive Spine Surgery",
    faqs: [
      {
        q: "Why does sitting or bending forward relieve spinal stenosis pain?",
        a: "Bending forward opens the spinal canal and neuroforamina by 15-20%, temporarily relieving mechanical pressure and restoring microvascular blood flow to the pinched nerve roots."
      },
      {
        q: "Will spinal stenosis get worse without surgery?",
        a: "Spinal stenosis is slowly progressive. Many patients remain stable for years with gentle physical therapy and lifestyle modifications; surgery is elective and based primarily on functional walking impairment."
      }
    ]
  },
  {
    slug: "cervical-disc-disease",
    category: "Spine",
    title: "Cervical Disc Disease",
    scientificName: "Cervical Radiculopathy & Myelopathy",
    summary: "Age or posture-related wear of discs in the neck, causing pain radiating into the shoulder and arm or dangerous spinal cord compression.",
    overview: "The cervical spine comprises seven vertebrae supporting the head while permitting wide rotational flexibility. Degeneration or herniation of cervical discs can result in two distinct clinical syndromes: Cervical Radiculopathy (pinched exiting nerve root causing arm pain) or Cervical Spondylotic Myelopathy (direct spinal cord compression causing clumsy hands and walking imbalance).",
    symptoms: [
      "Sharp or aching pain radiating from the neck across the shoulder blade and down the arm into the fingers",
      "Numbness, tingling, or weakness in specific fingers or hand muscles",
      "Difficulty with fine motor coordination (dropping cups, buttoning buttons, handwriting changes)",
      "Feeling unsteady on your feet or feeling like you are walking on sponges (myelopathy sign)",
      "Neck stiffness and muscle spasms aggravated by prolonged computer or smartphone usage"
    ],
    causes: [
      "Cervical disc desiccation, height loss, and osteophyte formation",
      "Acute cervical disc extrusion from traumatic whip-lash or sports strain",
      "Chronic forward head posture ('text neck') multiplying biomechanical weight on lower cervical discs",
      "Congenitally small cervical canal diameter"
    ],
    diagnosticEvaluation: [
      "High-Resolution Cervical MRI – Evaluates cord signal changes (myelomalacia) and exact nerve root exits",
      "Dynamic Cervical Spine X-Rays – Assesses cervical lordosis and segmental instability",
      "Upper Extremity EMG/NCV – Distinguishes cervical radiculopathy from carpal tunnel syndrome"
    ],
    treatmentOptions: [
      {
        type: "Cervical Physical Therapy & Posture Retraining",
        desc: "Isometric neck strengthening, scapular stabilization, and ergonomic workstation adjustments."
      },
      {
        type: "Targeted Cervical Foraminal Injections",
        desc: "Precision injection reducing inflammation around inflamed cervical nerve roots."
      },
      {
        type: "Anterior Cervical Discectomy & Fusion (ACDF)",
        desc: "Gold standard surgical solution: removing the diseased disc through a natural neck fold, freeing nerves, and stabilizing with a cage."
      },
      {
        type: "Cervical Artificial Disc Replacement",
        desc: "Motion-preserving surgery replacing the damaged disc with a prosthetic articulation in selected young patients."
      }
    ],
    whenToConsult: "Seek early evaluation for severe arm pain, and urgent evaluation if you notice hand clumsiness, frequent dropping of objects, or balance instability when walking.",
    relatedServiceSlug: "spine-surgery",
    relatedServiceName: "Comprehensive Spine Surgery",
    faqs: [
      {
        q: "What is the difference between radiculopathy and myelopathy?",
        a: "Radiculopathy is compression of an individual nerve root causing arm pain and tingling. Myelopathy is compression of the main spinal cord itself, causing clumsy hands, balance impairment, and requires timely decompression to prevent irreversible cord damage."
      }
    ]
  },
  {
    slug: "lumbar-disc-disease",
    category: "Spine",
    title: "Lumbar Disc Disease",
    scientificName: "Degenerative Disc Disease of the Lumbar Spine",
    summary: "Degenerative deterioration of the low back cushions, producing chronic axial back aching, disc tears, and radiating sciatic nerve symptoms.",
    overview: "The lower lumbar discs (specifically L4-L5 and L5-S1) endure the heaviest mechanical loads in the human skeleton. Lumbar disc disease involves gradual loss of disc hydration, loss of structural height, tears in the outer fibrous annulus, and secondary micro-instability between adjacent vertebrae.",
    symptoms: [
      "Deep, persistent aching in the lower back that worsens after prolonged sitting, driving, or bending",
      "Episodes of acute 'catch' in the back where standing upright becomes agonizingly difficult",
      "Referred pain spreading into the buttocks, posterior thighs, or groin",
      "Stiffness upon waking that slightly eases with gentle ambulation",
      "Secondary nerve root compression symptoms (sciatica) if disc fragments bulge into the canal"
    ],
    causes: [
      "Natural desiccation and biochemical breakdown of proteoglycans with advancing age",
      "Repetitive axial loading, prolonged vibration exposure (drivers), and heavy manual lifting",
      "Weak abdominal core and gluteal musculature shifting mechanical support burden onto passive spinal discs",
      "Smoking, which impairs microvascular capillary nutrition to avascular disc tissue"
    ],
    diagnosticEvaluation: [
      "Lumbar Spine MRI – Demonstrates disc desiccation (dark discs on T2), annular tears (HIZ), and Modic endplate changes",
      "Standing Lumbar Radiographs – Evaluates disc height reduction, alignment, and facet joint arthritis"
    ],
    treatmentOptions: [
      {
        type: "Core Strengthening & Physiotherapy",
        desc: "Reconditioning deep spinal stabilizers (multifidus, transversus abdominis) to relieve disc pressure."
      },
      {
        type: "Lifestyle & Ergonomic Optimization",
        desc: "Weight management, lumbar support, sit-stand desks, and smoking cessation."
      },
      {
        type: "Minimally Invasive Interbody Fusion (MIS-TLIF)",
        desc: "Reserved for severe disc collapse with painful mechanical instability and failed conservative therapy."
      }
    ],
    whenToConsult: "Consult if chronic low back pain hampers work or daily hobbies, does not respond to common pain relief, or radiates down into the legs.",
    relatedServiceSlug: "spine-surgery",
    relatedServiceName: "Spine Surgery Services",
    faqs: [
      {
        q: "Does a degenerative disc mean I will end up in a wheelchair?",
        a: "No. 'Degenerative disc disease' is a misleading term; it is an aging process, not a disease. With targeted core conditioning and weight control, the vast majority of people live active, pain-free lives."
      }
    ]
  },
  {
    slug: "head-injury",
    category: "Brain",
    title: "Head Injury & Neurotrauma",
    scientificName: "Traumatic Brain Injury (TBI) & Intracranial Hemorrhage",
    summary: "Trauma to the scalp, skull, or brain tissue from vehicular accidents, falls, or blunt impact, necessitating immediate triage and specialist neurosurgical management.",
    overview: "Traumatic brain injuries range from mild concussions to severe life-threatening intracranial hematomas and diffuse axonal injury. Acute trauma can cause arterial or venous bleeding inside the non-yielding skull, producing epidural hematomas (EDH), subdural hematomas (SDH), or cerebral contusions that require urgent surgical decompression to prevent brain herniation.",
    symptoms: [
      "Loss of consciousness (even momentary) following an impact to the head",
      "Worsening headache, repeated vomiting, or dizziness after head impact",
      "Confusion, disorientation, memory loss regarding the incident, or slurred speech",
      "Clear fluid or blood draining from the nose or ears (Cranial base fracture sign)",
      "Unequal pupil sizes or abnormal eye movements",
      "Sudden weakness, paralysis of an arm or leg, or post-traumatic seizures"
    ],
    causes: [
      "Motor vehicle and two-wheeler road traffic accidents",
      "Falls from heights or domestic slip-and-fall incidents in the elderly",
      "Physical assaults or blunt recreational/sports injuries"
    ],
    diagnosticEvaluation: [
      "Emergency Non-Contrast Computed Tomography (NCCT Brain) – Gold standard rapid scan detecting acute hemorrhages, skull fractures, and midline shift",
      "Glasgow Coma Scale (GCS) Assessment – Protocolized clinical neurological scoring",
      "Cervical Spine Clearance – Ruling out concurrent cervical spinal fracture in all trauma patients"
    ],
    treatmentOptions: [
      {
        type: "Emergency Decompressive Craniectomy",
        desc: "Immediate surgical removal of a bone flap and evacuation of blood clot (EDH/SDH) to relieve lethal intracranial pressure."
      },
      {
        type: "Neuro-Intensive Care Protocol",
        desc: "Invasive intracranial pressure (ICP) monitoring, neuro-protective sedation, and hyperosmolar therapy in dedicated Neuro-ICU."
      },
      {
        type: "Elevation of Depressed Skull Fractures",
        desc: "Surgical lifting and debridement of inward-driven skull bone fragments to avoid cortical laceration and infection."
      }
    ],
    whenToConsult: "All head injuries with loss of consciousness, recurrent vomiting, drowsiness, or neurological signs require immediate emergency hospital triage.",
    relatedServiceSlug: "brain-surgery",
    relatedServiceName: "Brain Surgery & Neurotrauma",
    faqs: [
      {
        q: "Why is a lucid interval dangerous after a head blow?",
        a: "A 'lucid interval' occurs when a patient briefly regains consciousness after a head strike, only to deteriorate rapidly into coma hours later due to expanding epidural arterial bleeding. Prompt CT scanning is critical."
      }
    ]
  },
  {
    slug: "nerve-compression",
    category: "Spine & Peripheral",
    title: "Nerve Compression",
    scientificName: "Radiculopathy & Entrapment Neuropathies",
    summary: "Physical constriction or impingement of peripheral nerves or spinal roots, producing pain, sensory disturbance, and muscle weakness along the nerve pathway.",
    overview: "Nerve compression occurs when anatomical structures (such as herniated disc material, hypertrophic bone spurs, or tight fibrous tunnels) place sustained pressure on a nerve. This mechanical constriction impedes blood supply to the nerve fibers, sparking inflammation, chronic neuropathic pain, and progressive axonal dysfunction.",
    symptoms: [
      "Burning, lancinating, or electric shock-like pain radiating along the nerve path",
      "Persistent numbness or pins-and-needles sensation in fingers, toes, or limbs",
      "Localized tenderness over anatomical nerve tunnels",
      "Muscle atrophy or noticeable weakness in specific muscle groups (e.g. thumb weakness in carpal tunnel syndrome)",
      "Worsening of symptoms at night or with repetitive movement"
    ],
    causes: [
      "Spinal exit foraminal narrowing or disc herniation impinging spinal nerve roots",
      "Carpal tunnel syndrome (compression of the median nerve at the wrist)",
      "Cubital tunnel syndrome (ulnar nerve compression at the elbow)",
      "Peroneal nerve entrapment at the fibular head causing foot drop",
      "Systemic risk factors including diabetes, thyroid disorders, and pregnancy"
    ],
    diagnosticEvaluation: [
      "Electromyography (EMG) and Nerve Conduction Velocity (NCV) Studies – Pinpoints the exact site and severity of nerve entrapment",
      "High-Resolution Ultrasound & MRI of Nerves – Visualizes structural swelling, neuroma formation, or compressing cysts"
    ],
    treatmentOptions: [
      {
        type: "Splinting & Biomechanical Offloading",
        desc: "Neutral-position nocturnal splints resting the nerve and preventing dynamic pinching."
      },
      {
        type: "Ultrasound-Guided Hydrodissection",
        desc: "Minimally invasive fluid injection separating the compressed nerve from adjacent scarring or tight fascia."
      },
      {
        type: "Microsurgical Decompression & Release",
        desc: "Dividing compressive retinacula or fibrous bands under magnification to permanently free the constricted nerve."
      }
    ],
    whenToConsult: "Consult when numbness becomes continuous, muscle wasting is visible, or fine hand functions are noticeably hindered.",
    relatedServiceSlug: "microneurosurgery",
    relatedServiceName: "Microneurosurgical Decompression",
    faqs: [
      {
        q: "Can a compressed nerve heal completely after decompression?",
        a: "Yes. When decompressed before irreversible axonal death occurs, nerve blood flow returns immediately and myelin sheaths regenerate, leading to steady sensory and motor recovery."
      }
    ]
  }
];


// Embedded Fallback Data for Local file:// Protocol Execution
// Ensures the application works seamlessly when double-clicked in Windows Explorer without a local web server

var EMBEDDED_DATA = {
  evidenceDomains: [
    {
      "id": 1,
      "code": "PROC_PRINCIPLES",
      "title": "Procurement Principles, Frameworks & Practical Tools",
      "weight": 0.12,
      "leadAuthor": "KCDH Evidence Synthesis Working Group",
      "summary": "Governs public buying guidelines under General Financial Rules (GFR 2017) and Government e-Marketplace (GeM), shifting from rudimentary lowest-cost (L1) selection to Quality and Cost Based Selection (QCBS) tailored for algorithmic health systems.",
      "keyStatutes": [
        "GFR 2017 Rule 144 (Fundamental principles of public buying)",
        "GFR 2017 Rule 149 (Mandatory GeM procurement)",
        "GFR 2017 Rule 192 (Quality and Cost Based Selection - QCBS)",
        "Department of Expenditure Manual for Procurement of Goods & Services (2022)"
      ],
      "internationalGuidance": [
        "WHO Guidance on Ethics and Governance of AI for Health (2021) - Chapter 5",
        "NHS England / NICE Evidence Standards Framework (ESF) for Digital Health Technologies",
        "OECD Recommendation of the Council on Public Procurement (2015)"
      ],
      "criticalRisks": [
        "Unmitigated L1 commodity bidding leading to brittle algorithms with high clinical failure rates.",
        "Opaque bidding specifications that unfairly favor single multinational hardware vendors.",
        "Absence of pre-award computational bench testing on local clinical samples."
      ],
      "recommendedClauses": [
        "The evaluation shall follow a Quality and Cost Based Selection (QCBS 80:20) methodology, wherein bidders must achieve a minimum qualifying technical benchmark of 75 marks before commercial opening."
      ]
    },
    {
      "id": 2,
      "code": "CLINICAL_PERF",
      "title": "Clinical & Technical Performance Validation",
      "weight": 0.18,
      "leadAuthor": "KCDH Evidence Synthesis Working Group",
      "summary": "Mandates empirical verification of diagnostic accuracy (Sensitivity, Specificity, AUROC, F1 Score) against robust clinical gold standards, with explicit subgroup parity testing across diverse Indian demographic cohorts.",
      "keyStatutes": [
        "ICMR Ethical Guidelines for Application of AI in Biomedical Research and Healthcare (2023)",
        "CDSCO Guidance on Clinical Evaluation of Medical Devices and SaMD",
        "Strategy for AI in Healthcare for India (SAHI) - NITI Aayog"
      ],
      "internationalGuidance": [
        "US FDA AI/ML-Based Software as a Medical Device Action Plan",
        "TRIPOD-AI & CONSORT-AI Reporting Guidelines",
        "WHO Regulatory Considerations on AI for Health (2023)"
      ],
      "criticalRisks": [
        "Laboratory overfitting: Vendor claims based solely on clean western academic benchmarks.",
        "High false-positive rate swamping public health laboratory confirmatory capacity (e.g. CBNAAT/TrueNat).",
        "Severe diagnostic drop-offs in rural populations, geriatric cohorts, or pediatric patients."
      ],
      "recommendedClauses": [
        "The AI solution must demonstrate a minimum verified Sensitivity of 90.0% and Specificity of 85.0% for screening workflows, evaluated against double-blind specialist consensus."
      ]
    },
    {
      "id": 3,
      "code": "SAFETY_HUMAN_OVERSIGHT",
      "title": "Safety, Fairness, Equity & Human Oversight",
      "weight": 0.14,
      "leadAuthor": "KCDH Evidence Synthesis Working Group",
      "summary": "Ensures artificial intelligence acts as assistive decision-support rather than autonomous clinical authority, mandating human-in-the-loop safeguards, bias auditing, and graceful failure fallbacks.",
      "keyStatutes": [
        "Clinical Establishments (Registration and Regulation) Act (2010)",
        "National Medical Commission (Professional Conduct) Regulations",
        "NITI Aayog Responsible AI for All (Approach Documents 1 & 2)"
      ],
      "internationalGuidance": [
        "EU AI Act (Regulation 2024/1689) - High-Risk Health Systems Requirements",
        "ISO 14971: Application of risk management to medical devices",
        "IEEE 7000 Series Standards on Algorithmic Bias & Ethical Design"
      ],
      "criticalRisks": [
        "Autonomous algorithmic diagnostic decisions without qualified medical officer validation.",
        "System crashes or silent freezes when cellular networks drop in remote primary health centres.",
        "Algorithmic discrimination against tribal or marginalized socio-economic communities."
      ],
      "recommendedClauses": [
        "Human-in-the-Loop Safeguard: The software shall strictly operate in an assistive capacity; the final clinical diagnosis, referral, or prescription shall solely rest with the registered medical practitioner."
      ]
    },
    {
      "id": 4,
      "code": "DATA_PRIVACY_SECURITY",
      "title": "Data Governance, Privacy (DPDP) & Cybersecurity",
      "weight": 0.15,
      "leadAuthor": "KCDH Evidence Synthesis Working Group",
      "summary": "Enforces strict statutory adherence to the Digital Personal Data Protection (DPDP) Act 2023, ABDM Health Data Management Policy, sovereign data localization, and CERT-In cybersecurity mandates.",
      "keyStatutes": [
        "Digital Personal Data Protection (DPDP) Act 2023 (Act No. 22 of 2023)",
        "ABDM Health Data Management Policy (HDMP)",
        "Indian Computer Emergency Response Team (CERT-In) Cyber Security Directions"
      ],
      "internationalGuidance": [
        "ISO/IEC 27001 (Information Security Management)",
        "HIPAA Security & Privacy Rules (Comparative Benchmark)",
        "GDPR Health Data Safeguards (Art. 9)"
      ],
      "criticalRisks": [
        "Transmission of unencrypted citizen health records to foreign or un-empanelled commercial cloud servers.",
        "Unauthorized vendor harvesting of public health telemetry for secondary commercial model training.",
        "Ransomware vulnerabilities in unpatched legacy edge deployment terminals."
      ],
      "recommendedClauses": [
        "Data Sovereignty & Localization: All patient data, model inference inputs, telemetry, and audit logs shall be hosted strictly within the territory of India on MeitY-empanelled Cloud Service Providers (CSPs)."
      ]
    },
    {
      "id": 5,
      "code": "INTEROP_STANDARDS",
      "title": "Interoperability & National Standards (ABDM)",
      "weight": 0.13,
      "leadAuthor": "KCDH Evidence Synthesis Working Group",
      "summary": "Mandates complete alignment with the Ayushman Bharat Digital Mission (ABDM) architecture, HL7 FHIR Release 4 schemas, DICOM 3.0 imaging standards, and standardized clinical terminologies.",
      "keyStatutes": [
        "Ayushman Bharat Digital Mission (ABDM) Architecture v1.0",
        "National Digital Health Blueprint (NDHB) - MoHFW",
        "National Health Stack Specifications (NITI Aayog)"
      ],
      "internationalGuidance": [
        "HL7 FHIR Release 4 (Fast Healthcare Interoperability Resources)",
        "DICOM PS 3.1 - 3.20 (Digital Imaging and Communications in Medicine)",
        "SNOMED CT International & LOINC terminologies"
      ],
      "criticalRisks": [
        "Proprietary vendor data formats creating acute vendor lock-in and isolated data silos.",
        "Inability to link patient screenings with Ayushman Bharat Health Account (ABHA).",
        "Incompatibility with existing state Picture Archiving and Communication Systems (PACS)."
      ],
      "recommendedClauses": [
        "ABDM Milestone Compliance: The solution must possess active sandbox certification for ABDM Milestones M1 (ABHA Creation/Verification), M2 (HFR/HPR registration), and M3 (FHIR R4 Health Information Exchange)."
      ]
    },
    {
      "id": 6,
      "code": "TRANSPARENCY_EXPLAIN",
      "title": "Transparency, Explainability & Accountability",
      "weight": 0.10,
      "leadAuthor": "KCDH Evidence Synthesis Working Group",
      "summary": "Demands algorithmic inspectability through standardized Model Factsheets, verifiable clinical explainability maps (heatmaps/Grad-CAM), and tamper-evident audit logs.",
      "keyStatutes": [
        "National Strategy for AI (NSAI) - NITI Aayog",
        "Draft Indian AI Governance Framework - MeitY",
        "Right to Information (RTI) Act (Algorithmic transparency considerations)"
      ],
      "internationalGuidance": [
        "ISO/IEC 42001: Artificial Intelligence Management System",
        "OECD AI Transparency and Explainability Principles",
        "Google Model Cards / Partnership on AI Factsheets"
      ],
      "criticalRisks": [
        "Opaque 'Black Box' inference preventing clinicians from validating anatomical reasons for alerts.",
        "Absence of audit logging in medical negligence disputes.",
        "Unverified marketing claims regarding model architectures and parameter counts."
      ],
      "recommendedClauses": [
        "Model Factsheet Submission: The bidder must furnish a comprehensive Model Card detailing parameter count, training set demographics, known edge failure cases, and hardware specifications."
      ]
    },
    {
      "id": 7,
      "code": "REGULATORY_INSTITUTIONAL",
      "title": "Regulatory & Institutional Considerations",
      "weight": 0.10,
      "leadAuthor": "KCDH Evidence Synthesis Working Group",
      "summary": "Verifies statutory licensing under Central Drugs Standard Control Organisation (CDSCO) Medical Device Rules (MDR 2017) as Software as a Medical Device (SaMD) and Institutional Ethics Committee clearance.",
      "keyStatutes": [
        "Medical Device Rules (MDR 2017) under Drugs and Cosmetics Act, 1940",
        "CDSCO Classification of Software as a Medical Device (SaMD) Notice",
        "ICMR National Ethical Guidelines for Biomedical and Health Research"
      ],
      "internationalGuidance": [
        "IMDRF Software as a Medical Device (SaMD) Harmonization",
        "US FDA 510(k) / De Novo Medical Device Clearances",
        "EU MDR 2017/745 CE Mark Certification"
      ],
      "criticalRisks": [
        "Procurement of unapproved diagnostic software operating under fraudulent 'Research Use Only' claims in clinical care.",
        "Civil and criminal liability for state health officials procuring unregulated SaMD.",
        "Unapproved clinical pilots conducted without ICMR-registered Institutional Ethics Committee oversight."
      ],
      "recommendedClauses": [
        "Statutory CDSCO Licensing: Bidder must furnish valid CDSCO Form MD-15 (Import License) or Form MD-5 / MD-9 (Manufacturing License) classified as Class B or Class C Software as a Medical Device."
      ]
    },
    {
      "id": 8,
      "code": "IMPLEMENTATION_SLA_TCO",
      "title": "Implementation Readiness, Contracting, SLAs & Monitoring",
      "weight": 0.08,
      "leadAuthor": "KCDH Evidence Synthesis Working Group",
      "summary": "Establishes long-term lifecycle governance, post-market algorithmic drift surveillance, uptime Service Level Agreements (SLAs), and transparent Total Cost of Ownership (TCO) budgeting.",
      "keyStatutes": [
        "GeM General Terms and Conditions (GTC) on SLA & Liquidated Damages",
        "GFR 2017 Rule 172 (Performance Security) and Rule 225 (Contract Management)",
        "National Health Mission State PIP Financial Guidelines"
      ],
      "internationalGuidance": [
        "ISO/IEC 23894: Artificial Intelligence - Risk Management",
        "NHS England Post-Deployment Algorithm Monitoring Protocol",
        "WHO Guidance on Total Cost of Ownership for Digital Health"
      ],
      "criticalRisks": [
        "Undetected algorithmic performance drift over time due to seasonal diseases or sensor degradation.",
        "Crippling unbudgeted recurring per-scan fees and exorbitant hardware vendor lock-in.",
        "Lack of designated state-level training resulting in abandoned edge terminals."
      ],
      "recommendedClauses": [
        "Mandatory Algorithmic Drift Recalibration: Vendor shall perform semi-annual drift audits and model recalibrations at zero additional cost throughout the 3-year contract lifecycle."
      ]
    }
  ],
  useCases: [
    {
      "id": "CASE_TB_CXR",
      "title": "AI-Enabled Chest X-Ray Screening for Pulmonary Tuberculosis",
      "authority": "State National Health Mission (NHM) & State TB Cell (NTEP)",
      "targetFacility": "Mobile Diagnostic Vans & Rural District TB Centres across 12 High-Burden Districts",
      "clinicalModality": "Digital Radiography (CXR) - Computer-Aided Detection (CAD) for Pulmonary TB",
      "targetEndUsers": "Medical Officers (MBBS), Radiographers & NTEP Senior Treatment Supervisors",
      "autonomyLevel": "Triage & Worklist Prioritization (Non-autonomous; flags suspicious lesions for sputum/CBNAAT test)",
      "procurementStage": "RFP Formulation & Technical Specification Drafting",
      "procurementMechanism": "GeM Custom Bid (QCBS 80:20)",
      "volumeEstimate": "120,000 screening scans annually",
      "hardwareContext": "Portable battery-powered Digital Radiography (DR) machines installed in all-terrain vans",
      "connectivityProfile": "Intermittent 2G/4G cellular networks; requiring zero-connectivity offline edge processing",
      "complianceProfile": {
        "cdscoClass": "Class B / Class C SaMD",
        "abdmRequirement": "M1 (ABHA verification) & Nikshay Portal API integration",
        "minSensitivity": "92.0%",
        "minSpecificity": "85.0%",
        "dataLocalization": "Mandatory sovereign hosting on MeitY empanelled CSP"
      },
      "evaluationScores": {
        "PROC_PRINCIPLES": 88,
        "CLINICAL_PERF": 94,
        "SAFETY_HUMAN_OVERSIGHT": 92,
        "DATA_PRIVACY_SECURITY": 90,
        "INTEROP_STANDARDS": 95,
        "TRANSPARENCY_EXPLAIN": 89,
        "REGULATORY_INSTITUTIONAL": 96,
        "IMPLEMENTATION_SLA_TCO": 86
      },
      "governmentTestingNotes": "Validated with simulated State TB Officer and State NHM Procurement Committee. Highlighted the necessity of offline local inference to prevent workflow halt in tribal zones where mobile signals are unavailable."
    },
    {
      "id": "CASE_RETINOPATHY_AAM",
      "title": "Autonomous Diabetic Retinopathy Screening at Ayushman Arogya Mandirs (AAM)",
      "authority": "State Directorate of Health Services (NCD Division)",
      "targetFacility": "250 Sub-Health Centre (SHC) level Ayushman Arogya Mandirs",
      "clinicalModality": "Non-Mydriatic Fundus Photography with automated grading (Referable vs. Non-Referable DR)",
      "targetEndUsers": "Community Health Officers (CHOs) and Auxiliary Nurse Midwives (ANMs)",
      "autonomyLevel": "Autonomous Screening Triage with tele-ophthalmology referral for referable stages",
      "procurementStage": "Pre-Tender Technical Feasibility & Pilot Evaluation",
      "procurementMechanism": "Open E-Tender (State Medical Services Corporation QCBS 70:30)",
      "volumeEstimate": "75,000 rural diabetic patient screenings annually",
      "hardwareContext": "Handheld non-mydriatic fundus cameras paired with Android/Windows edge tablets",
      "connectivityProfile": "Variable rural mobile broadband (3G/4G)",
      "complianceProfile": {
        "cdscoClass": "Class C Software as a Medical Device",
        "abdmRequirement": "M1 (ABHA creation), M2 (HFR clinic registry), M3 (FHIR R4 DiagnosticReport)",
        "minSensitivity": "90.0%",
        "minSpecificity": "88.0%",
        "dataLocalization": "Mandatory in-country data storage"
      },
      "evaluationScores": {
        "PROC_PRINCIPLES": 84,
        "CLINICAL_PERF": 91,
        "SAFETY_HUMAN_OVERSIGHT": 88,
        "DATA_PRIVACY_SECURITY": 92,
        "INTEROP_STANDARDS": 90,
        "TRANSPARENCY_EXPLAIN": 85,
        "REGULATORY_INSTITUTIONAL": 93,
        "IMPLEMENTATION_SLA_TCO": 82
      },
      "governmentTestingNotes": "Feedback highlighted the critical requirement for real-time image quality feedback: CHOs require the software to flag ungradable images immediately so the patient does not leave before a re-take is performed."
    },
    {
      "id": "CASE_MATERNAL_TRIAGE",
      "title": "Maternal & Neonatal High-Risk Labor Room Triage System",
      "authority": "State Maternal & Child Health Directorate (LaQshya Program)",
      "targetFacility": "18 High-Volume District Hospital Labor Rooms and SNCUs",
      "clinicalModality": "Continuous Multi-Parameter Vitals, Electronic Partograph & Fetal Heart Rate Monitoring",
      "targetEndUsers": "Duty Staff Nurses, Obstetricians, Pediatricians & Medical Officers",
      "autonomyLevel": "Assistive Clinical Decision Support (Real-time audible & visual early warning indicators)",
      "procurementStage": "RFP Formulation & Pilot Design",
      "procurementMechanism": "State E-Procurement Portal (QCBS 80:20 with Proof-of-Concept Pilot)",
      "volumeEstimate": "45,000 deliveries monitored per year",
      "hardwareContext": "Bedside touch terminals and central nursing station telemetry monitors",
      "connectivityProfile": "Hospital Local Area Network (Ethernet + Wi-Fi)",
      "complianceProfile": {
        "cdscoClass": "Class C / Class D Software as a Medical Device",
        "abdmRequirement": "M1, M2, M3 integration with Hospital Information Management System (HIMS)",
        "minSensitivity": "94.0%",
        "minSpecificity": "82.0%",
        "dataLocalization": "Strict zero-cloud on-premise hospital intranet hosting"
      },
      "evaluationScores": {
        "PROC_PRINCIPLES": 82,
        "CLINICAL_PERF": 89,
        "SAFETY_HUMAN_OVERSIGHT": 96,
        "DATA_PRIVACY_SECURITY": 94,
        "INTEROP_STANDARDS": 87,
        "TRANSPARENCY_EXPLAIN": 91,
        "REGULATORY_INSTITUTIONAL": 94,
        "IMPLEMENTATION_SLA_TCO": 79
      },
      "governmentTestingNotes": "Clinicians demanded rigorous alarm-fatigue mitigation clauses to prevent constant false-positive beeping in crowded labor rooms, as well as clear legal disclaimers ensuring doctor primacy."
    },
    {
      "id": "CASE_ICU_SEPSIS",
      "title": "Real-Time ICU Sepsis & Clinical Deterioration Early Warning System",
      "authority": "Autonomous State Medical College & Tertiary Referral Hospital",
      "targetFacility": "60-Bed Medical & Surgical Intensive Care Units (ICUs)",
      "clinicalModality": "Multi-stream physiological telemetry, lab feeds (arterial blood gas, CBC), and vitals NLP",
      "targetEndUsers": "Intensivists, Critical Care Fellows, and Senior Nursing Supervisors",
      "autonomyLevel": "Assistive Early Warning System (Predictive risk score for septic shock 4-6 hours in advance)",
      "procurementStage": "Technical Bid Evaluation & Vendor Demonstration",
      "procurementMechanism": "Open Tender Two-Bid System (Technical + Financial QCBS)",
      "volumeEstimate": "3,200 critical admissions monitored per year",
      "hardwareContext": "Multi-vendor bedside monitors linked to a central server via HL7 gateway",
      "connectivityProfile": "Dedicated Gigabit Medical Intranet; air-gapped from public internet",
      "complianceProfile": {
        "cdscoClass": "Class C SaMD",
        "abdmRequirement": "M3 compliant EHR export via FHIR Encounter & Observation resources",
        "minSensitivity": "88.0%",
        "minSpecificity": "86.0%",
        "dataLocalization": "On-premise air-gapped server infrastructure"
      },
      "evaluationScores": {
        "PROC_PRINCIPLES": 85,
        "CLINICAL_PERF": 92,
        "SAFETY_HUMAN_OVERSIGHT": 94,
        "DATA_PRIVACY_SECURITY": 97,
        "INTEROP_STANDARDS": 91,
        "TRANSPARENCY_EXPLAIN": 88,
        "REGULATORY_INSTITUTIONAL": 90,
        "IMPLEMENTATION_SLA_TCO": 83
      },
      "governmentTestingNotes": "Evaluators strongly emphasized multi-vendor physiological monitor compatibility to ensure the state is not forced to replace existing equipment to accommodate the AI tool."
    }
  ],
  checklists: [
    {
      "domainId": 1,
      "domainCode": "PROC_PRINCIPLES",
      "items": [
        {
          "id": "CHK_1_1",
          "text": "Has the procurement authority adopted Quality and Cost-Based Selection (QCBS) rather than lowest-cost (L1) bidding?",
          "mandatory": true,
          "statuteRef": "GFR 2017 Rule 192 & Manual for Procurement of Goods (2022)",
          "guidance": "Clinical AI must not be procured under commodity L1 rules; technical quality benchmark must carry at least 70% to 80% weight."
        },
        {
          "id": "CHK_1_2",
          "text": "Is pre-award sandboxed computational bench testing on local clinical samples mandated before financial bid opening?",
          "mandatory": true,
          "statuteRef": "GeM Special Bidding Guidelines for Software & AI Services",
          "guidance": "Prevents award to algorithms that fail on local demographic data."
        },
        {
          "id": "CHK_1_3",
          "text": "Are proprietary single-vendor hardware lock-in clauses explicitly excluded from tender requirements?",
          "mandatory": true,
          "statuteRef": "GFR 2017 Rule 144(i) (Ensuring competitive non-restrictive technical specs)",
          "guidance": "Software must operate on multi-vendor standard imaging / diagnostic hardware."
        }
      ]
    },
    {
      "domainId": 2,
      "domainCode": "CLINICAL_PERF",
      "items": [
        {
          "id": "CHK_2_1",
          "text": "Does the vendor provide external clinical validation on Indian populations demonstrating Sensitivity ≥90% and Specificity ≥85%?",
          "mandatory": true,
          "statuteRef": "ICMR Guidelines for AI in Healthcare & WHO Guidance on Health AI",
          "guidance": "Self-reported training accuracy or synthetic benchmark testing is insufficient."
        },
        {
          "id": "CHK_2_2",
          "text": "Are validation metrics disaggregated across gender, age brackets, and prevalent national comorbidities?",
          "mandatory": true,
          "statuteRef": "TRIPOD-AI Reporting Guidelines",
          "guidance": "Ensures algorithmic equity across vulnerable subgroups."
        },
        {
          "id": "CHK_2_3",
          "text": "Is the reference clinical gold standard clearly documented and verified by a multi-expert arbitration panel?",
          "mandatory": false,
          "statuteRef": "CDSCO Medical Device Clinical Investigation Guidance",
          "guidance": "Double-blind expert reads with tie-breaker arbitration."
        }
      ]
    },
    {
      "domainId": 3,
      "domainCode": "SAFETY_HUMAN_OVERSIGHT",
      "items": [
        {
          "id": "CHK_3_1",
          "text": "Does the system explicitly operate in an assistive 'Human-in-the-Loop' decision-support capacity without replacing doctor authorization?",
          "mandatory": true,
          "statuteRef": "Clinical Establishments Act & National Medical Commission Ethics Regulations",
          "guidance": "Clinicians must hold ultimate diagnostic, prescribing, and treatment authority."
        },
        {
          "id": "CHK_3_2",
          "text": "Is there an automated deterministic fallback mechanism when cellular network connectivity fails?",
          "mandatory": true,
          "statuteRef": "National Health Systems Resource Centre (NHSRC) Hardware Norms",
          "guidance": "Crucial for remote PHCs, Sub-Centres, and mobile health vans."
        },
        {
          "id": "CHK_3_3",
          "text": "Has the solution been audited for algorithmic bias against marginalized, tribal, and rural patient cohorts?",
          "mandatory": false,
          "statuteRef": "NITI Aayog Strategy for AI in Healthcare for India (SAHI)",
          "guidance": "Prevent disparate false-negative rates in vulnerable populations."
        }
      ]
    },
    {
      "domainId": 4,
      "domainCode": "DATA_PRIVACY_SECURITY",
      "items": [
        {
          "id": "CHK_4_1",
          "text": "Are all patient data, model inference inputs, and server logs hosted strictly on MeitY-empanelled CSP data centres in India?",
          "mandatory": true,
          "statuteRef": "Digital Personal Data Protection (DPDP) Act 2023 & CERT-In Directives",
          "guidance": "Cross-border transfer of sensitive public health records without authorization is illegal."
        },
        {
          "id": "CHK_4_2",
          "text": "Does the routine procurement and inference workflow function with zero unencrypted Protected Health Information (PHI)?",
          "mandatory": true,
          "statuteRef": "ABDM Health Data Management Policy (HDMP)",
          "guidance": "Anonymization or pseudonymization before cloud ingestion."
        },
        {
          "id": "CHK_4_3",
          "text": "Is the vendor contractually prohibited from using state citizen health data to train or fine-tune proprietary commercial models?",
          "mandatory": true,
          "statuteRef": "Department of Expenditure Public Procurement Integrity Guidelines",
          "guidance": "State retains sovereign data ownership."
        }
      ]
    },
    {
      "domainId": 5,
      "domainCode": "INTEROP_STANDARDS",
      "items": [
        {
          "id": "CHK_5_1",
          "text": "Does the software hold official Sandbox Certification for ABDM Milestones (M1, M2, and M3)?",
          "mandatory": true,
          "statuteRef": "National Health Authority (NHA) ABDM Integration Guidelines",
          "guidance": "Allows ABHA linkage and state registry synchronization."
        },
        {
          "id": "CHK_5_2",
          "text": "Does the system support open standards: HL7 FHIR R4 for health records and native DICOM 3.0 for medical imaging?",
          "mandatory": true,
          "statuteRef": "National Digital Health Blueprint (NDHB) Standards",
          "guidance": "Prevents proprietary lock-in with state PACS and EMR systems."
        },
        {
          "id": "CHK_5_3",
          "text": "Are diagnostic classifications mapped to standard clinical terminologies (SNOMED-CT, LOINC, ICD-11)?",
          "mandatory": false,
          "statuteRef": "MoHFW Electronic Health Record (EHR) Standards for India",
          "guidance": "Ensures longitudinal epidemiological tracking across state health databases."
        }
      ]
    },
    {
      "domainId": 6,
      "domainCode": "TRANSPARENCY_EXPLAIN",
      "items": [
        {
          "id": "CHK_6_1",
          "text": "Has the vendor submitted a standardized Model Card / Factsheet detailing training demographics and known edge failure cases?",
          "mandatory": true,
          "statuteRef": "ISO/IEC 42001 & NITI Aayog Responsible AI Framework",
          "guidance": "Ensures algorithmic accountability and transparency."
        },
        {
          "id": "CHK_6_2",
          "text": "Does the clinical interface provide visual explainability (e.g. Grad-CAM heatmaps, bounding boxes) for radiological/morphological alerts?",
          "mandatory": true,
          "statuteRef": "WHO Regulatory Guidance on AI for Health",
          "guidance": "Allows medical officers to rapidly verify anatomical basis of suspicion."
        },
        {
          "id": "CHK_6_3",
          "text": "Is there a tamper-evident audit log recording every inference timestamp, model version, and user action?",
          "mandatory": true,
          "statuteRef": "CERT-In Cyber Security Audit Guidelines & Indian Evidence Act",
          "guidance": "Crucial for medical-legal auditability."
        }
      ]
    },
    {
      "domainId": 7,
      "domainCode": "REGULATORY_INSTITUTIONAL",
      "items": [
        {
          "id": "CHK_7_1",
          "text": "Does the vendor possess a valid CDSCO manufacturing (MD-5/MD-9) or import (MD-15) license for Software as a Medical Device (SaMD)?",
          "mandatory": true,
          "statuteRef": "CDSCO Medical Device Rules (MDR 2017) under Drugs & Cosmetics Act",
          "guidance": "Statutory prerequisite for clinical deployment in public facilities."
        },
        {
          "id": "CHK_7_2",
          "text": "Has the validation study or pilot design been reviewed and approved by an ICMR-registered Institutional Ethics Committee (IEC)?",
          "mandatory": true,
          "statuteRef": "ICMR National Ethical Guidelines for Biomedical and Health Research",
          "guidance": "Mandatory for clinical research or pilot trials."
        },
        {
          "id": "CHK_7_3",
          "text": "Has the bidder submitted an affidavit declaring no conflict of interest or undisclosed exclusivity pacts with hardware manufacturers?",
          "mandatory": true,
          "statuteRef": "GFR 2017 Rule 175 (Code of Integrity for Public Procurement)",
          "guidance": "Ensures anti-corruption and competitive fairness."
        }
      ]
    },
    {
      "domainId": 8,
      "domainCode": "IMPLEMENTATION_SLA_TCO",
      "items": [
        {
          "id": "CHK_8_1",
          "text": "Does the contract include a mandatory semi-annual algorithmic drift audit and recalibration clause at no extra licensing fee?",
          "mandatory": true,
          "statuteRef": "GeM Service Level Agreement Norms & ISO/IEC 23894",
          "guidance": "Guarantees sustained accuracy over the full multi-year contract lifecycle."
        },
        {
          "id": "CHK_8_2",
          "text": "Has the Total Cost of Ownership (TCO) including compute infrastructure, maintenance, and staff training been fully costed?",
          "mandatory": true,
          "statuteRef": "Department of Expenditure Guidelines on TCO Evaluation",
          "guidance": "Prevents unanticipated runaway cloud and support costs."
        },
        {
          "id": "CHK_8_3",
          "text": "Is there a structured exit management and data handover protocol (transfer within 30 days in open formats)?",
          "mandatory": true,
          "statuteRef": "GFR 2017 Rule 225 (Contract Management & Transition)",
          "guidance": "Eliminates state health department vendor lock-in upon contract conclusion."
        }
      ]
    }
  ],
  policyReferences: [
    {
      "id": "REF_GFR_2017",
      "category": "Indian Statutory & Financial",
      "title": "General Financial Rules (GFR 2017)",
      "issuingBody": "Ministry of Finance, Department of Expenditure, Government of India",
      "year": 2017,
      "clauses": ["Rule 144", "Rule 149", "Rule 173", "Rule 175", "Rule 192", "Rule 225"],
      "relevance": "Core legal backbone governing all public procurement, competitive bidding, GeM mandating, QCBS technical scoring, and contractual compliance."
    },
    {
      "id": "REF_ABDM_ARCH",
      "category": "National Digital Health",
      "title": "Ayushman Bharat Digital Mission (ABDM) Architecture & Milestone Specifications",
      "issuingBody": "National Health Authority (NHA), MoHFW",
      "year": 2022,
      "clauses": ["Milestone M1 (ABHA)", "Milestone M2 (HFR/HPR)", "Milestone M3 (FHIR R4 Exchange)"],
      "relevance": "Technical interoperability benchmarks for patient health ID linkage and digital health record federation."
    },
    {
      "id": "REF_DPDP_2023",
      "category": "Data Protection & Privacy",
      "title": "Digital Personal Data Protection Act, 2023 (DPDP)",
      "issuingBody": "Ministry of Law and Justice / MeitY, Government of India",
      "year": 2023,
      "clauses": ["Section 4 (Grounds for Processing)", "Section 6 (Consent Architecture)", "Section 16 (Cross-border Transfer Restrictions)"],
      "relevance": "Strict statutory mandate governing personal health data processing, data fiduciaries, consent tracking, and localized processing."
    },
    {
      "id": "REF_CDSCO_MDR",
      "category": "Medical Device Regulation",
      "title": "Medical Device Rules (MDR 2017) & SaMD Guidance",
      "issuingBody": "Central Drugs Standard Control Organisation (CDSCO), Directorate General of Health Services",
      "year": 2017,
      "clauses": ["Form MD-5 / MD-9", "Form MD-14 / MD-15", "Risk Classification Class A-D"],
      "relevance": "Statutory pre-qualification requirement; clinical AI algorithms functioning as diagnostic software must hold valid CDSCO licenses."
    },
    {
      "id": "REF_SAHI_NITI",
      "category": "National Strategy & Policy",
      "title": "Strategy for AI in Healthcare for India (SAHI)",
      "issuingBody": "NITI Aayog, Government of India",
      "year": 2021,
      "clauses": ["Section 3 (Clinical Validation)", "Section 5 (Demographic Equity)", "Section 7 (Public Procurement Models)"],
      "relevance": "Strategic roadmap for scaling responsible healthcare AI across primary and secondary tiers of the Indian health system."
    },
    {
      "id": "REF_WHO_ETHICS",
      "category": "International Multilateral Guidance",
      "title": "Ethics and Governance of Artificial Intelligence for Health",
      "issuingBody": "World Health Organization (WHO)",
      "year": 2021,
      "clauses": ["Core Principle 1 (Protecting Autonomy)", "Principle 2 (Promoting Well-Being)", "Principle 3 (Ensuring Transparency)"],
      "relevance": "Global foundational guidance establishing ethical redlines, human oversight, and validation standards for health systems."
    },
    {
      "id": "REF_NHS_ESF",
      "category": "International Procurement Tool",
      "title": "Evidence Standards Framework (ESF) for Digital Health Technologies & AI Buyer's Guide",
      "issuingBody": "National Institute for Health and Care Excellence (NICE) / NHS England",
      "year": 2023,
      "clauses": ["Tier C (Clinical Decision Support)", "Tier B (Behavior Change)", "Algorithmic Drift Protocol"],
      "relevance": "Leading international procurement due-diligence framework adapted for tiered risk assessment."
    },
    {
      "id": "REF_ISO_42001",
      "category": "International Standards",
      "title": "ISO/IEC 42001:2023 - Artificial Intelligence Management System",
      "issuingBody": "International Organization for Standardization (ISO) / IEC",
      "year": 2023,
      "clauses": ["Clause 6 (Risk Assessment)", "Clause 8 (Operational Control)", "Annex A (AI Controls)"],
      "relevance": "Standardized auditing baseline for AI developer transparency, quality management, and continuous monitoring."
    }
  ]
};

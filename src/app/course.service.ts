import { Injectable } from '@angular/core';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly courses: Course[] = [
    {
      id: 'fire-fighting',
      title: 'Basic Fire Fighting',
      subtitle: 'Emergency Response & Fire Safety',
      description: 'Equip yourself with the essential skills to prevent, detect, and respond to fire emergencies in the workplace. This course covers fire behavior, extinguisher operation, and evacuation procedures.',
      icon: 'fire',
      accentColor: '#e74c3c',
      duration: '1 Day',
      level: 'Foundation',
      certification: 'SAQCC / DoL Compliant Certificate',
      modules: [
        { title: 'Fire Science & Behavior', description: 'Understanding the fire triangle, classes of fire, and how fires spread in industrial environments.', duration: '1 hour' },
        { title: 'Fire Prevention', description: 'Identifying and eliminating hazards, housekeeping standards, and flammable material management.', duration: '1 hour' },
        { title: 'Fire Extinguisher Operation', description: 'Types of extinguishers (CO2, dry powder, foam, water), selection, and hands-on practical use.', duration: '2 hours' },
        { title: 'Evacuation Procedures', description: 'Assembly points, warden roles, emergency contact protocols, and muster drills.', duration: '1 hour' },
        { title: 'Practical Assessment', description: 'Live fire extinguisher practical and written competency evaluation.', duration: '1 hour' }
      ],
      outcomes: [
        'Identify fire hazards and implement preventative measures',
        'Select and correctly operate the appropriate fire extinguisher',
        'Execute emergency evacuation procedures safely',
        'Understand legal obligations under South African fire safety legislation',
        'Report and document fire incidents correctly'
      ],
      prerequisites: [
        'No prior experience required',
        'Basic literacy in English',
        'Suitable for all employees'
      ]
    },
    {
      id: 'forklift',
      title: 'Forklift Operation',
      subtitle: 'Counterbalance & Reach Truck Training',
      description: 'Comprehensive forklift operator training designed to meet OHS Act requirements. Covers pre-operation inspection, load handling, stability principles, and safe workplace navigation.',
      icon: 'forklift',
      accentColor: '#d9481c',
      duration: '3 Days',
      level: 'Operator Certification',
      certification: 'TETA Accredited Certificate',
      modules: [
        { title: 'Legislation & Operator Responsibilities', description: 'OHS Act regulations, operator duties, site rules, and consequences of non-compliance.', duration: '2 hours' },
        { title: 'Forklift Types & Components', description: 'Counterbalance, reach trucks, pallet jacks - key components and their functions.', duration: '2 hours' },
        { title: 'Pre-Operation Inspection', description: 'Daily checklist procedures, defect identification, and reporting defective equipment.', duration: '2 hours' },
        { title: 'Load Handling & Stability', description: 'Load capacity, centre of gravity, safe stacking, and load stability principles.', duration: '3 hours' },
        { title: 'Practical Driving Skills', description: 'Hands-on driving, reversing, turning in confined spaces, and ramp navigation.', duration: '8 hours' },
        { title: 'Final Assessment', description: 'Practical proficiency test and written knowledge assessment.', duration: '3 hours' }
      ],
      outcomes: [
        'Conduct thorough pre-operation inspections',
        'Operate a forklift safely in warehouse and yard environments',
        'Calculate load capacity and apply stability principles',
        'Navigate safely around pedestrians and other plant',
        'Obtain a legally compliant forklift operator certificate'
      ],
      prerequisites: [
        "Valid South African driver's licence (Code 8 or higher preferred)",
        'Physical fitness for operating industrial equipment',
        'Minimum age: 18 years'
      ]
    },
    {
      id: 'overhead-crane',
      title: 'Overhead Crane Operation',
      subtitle: 'Lifting Machinery & Rigging Safety',
      description: 'Accredited overhead crane and hoist operator training covering safe lifting practices, rigging fundamentals, load control, and compliance with the Driven Machinery Regulations.',
      icon: 'crane',
      accentColor: '#b53112',
      duration: '2 Days',
      level: 'Operator Certification',
      certification: 'DoL / DMR Compliant Certificate',
      modules: [
        { title: 'Lifting Machinery Legislation', description: 'Driven Machinery Regulations (DMR), OHS Act requirements, and mandatory inspection intervals.', duration: '2 hours' },
        { title: 'Crane Types & Components', description: 'Overhead bridge cranes, monorails, hoists - components, capacities, and controls.', duration: '2 hours' },
        { title: 'Pre-Use Inspection', description: 'Inspection checklists, identifying mechanical faults, and out-of-service tagging procedures.', duration: '2 hours' },
        { title: 'Rigging & Slinging', description: 'Sling types (chain, wire rope, webbing), load angle factors, slinging configurations, and tag load inspection.', duration: '4 hours' },
        { title: 'Safe Lifting Operations', description: 'Communication signals, exclusion zones, tandem lifts, and emergency procedures.', duration: '3 hours' },
        { title: 'Practical Assessment', description: 'Supervised lifting operations and written competency test.', duration: '3 hours' }
      ],
      outcomes: [
        'Identify and inspect overhead crane components before use',
        'Select appropriate rigging equipment for load characteristics',
        'Execute safe lifts using correct hand signals and communication',
        'Comply with DMR legislation and site-specific lifting procedures',
        'Identify and respond to crane emergencies correctly'
      ],
      prerequisites: [
        'Basic mechanical aptitude',
        'Ability to work at heights (for some configurations)',
        'Minimum age: 18 years'
      ]
    },
    {
      id: 'first-aid',
      title: 'First Aid in the Workplace',
      subtitle: 'Emergency Medical Response',
      description: 'HPCSA-aligned first aid training that empowers employees to provide immediate life-saving assistance before emergency services arrive. Available at Level 1, 2, and 3.',
      icon: 'medical',
      accentColor: '#c43715',
      duration: '3 Days (Level 1)',
      level: 'HPCSA Level 1 / 2 / 3',
      certification: 'HPCSA Recognised Certificate',
      modules: [
        { title: 'Principles of First Aid', description: 'Legal responsibilities, scene assessment, personal protective equipment, and calling for help.', duration: '1 hour' },
        { title: 'CPR & AED', description: 'Adult, child, and infant CPR technique, and automated external defibrillator operation.', duration: '4 hours' },
        { title: 'Choking & Airway Management', description: 'Heimlich manoeuvre, recovery position, and managing unconscious casualties.', duration: '2 hours' },
        { title: 'Wound Care & Bleeding Control', description: 'Types of wounds, dressing application, tourniquets, and infection control.', duration: '3 hours' },
        { title: 'Fractures, Burns & Shock', description: 'Immobilisation techniques, burn classification, fluid loss, and shock management.', duration: '3 hours' },
        { title: 'Medical Emergencies', description: 'Heart attack, stroke, seizure, diabetic emergency, and anaphylaxis response.', duration: '3 hours' }
      ],
      outcomes: [
        'Perform high-quality CPR and use an AED confidently',
        'Control life-threatening bleeding and treat wounds',
        'Manage fractures, burns, and musculoskeletal injuries',
        'Recognise and respond to medical emergencies',
        'Maintain an accurate first aid register and incident report'
      ],
      prerequisites: [
        'No prior medical training required',
        'Basic literacy in English',
        'Physical ability to perform CPR'
      ]
    },
    {
      id: 'ohs',
      title: 'Occupational Health & Safety',
      subtitle: 'OHS Act Awareness & Compliance',
      description: 'A comprehensive overview of the Occupational Health and Safety Act (Act 85 of 1993) and its regulations. Designed for employees, supervisors, and safety representatives across all industries.',
      icon: 'shield',
      accentColor: '#8f240f',
      duration: '1-2 Days',
      level: 'Foundation / Supervisory',
      certification: 'Accredited Attendance Certificate',
      modules: [
        { title: 'OHS Act Overview', description: 'Structure of Act 85 of 1993, regulations, employer and employee duties, and enforcement.', duration: '2 hours' },
        { title: 'Hazard Identification & Risk Assessment', description: 'HIRA methodology, risk matrices, control hierarchy (eliminate, substitute, engineer, admin, PPE).', duration: '3 hours' },
        { title: 'Safety Representative & Committee Roles', description: 'Appointment, powers, functions, and meetings of safety reps and H&S committees.', duration: '2 hours' },
        { title: 'Incident Investigation', description: 'Reportable incidents, root cause analysis methods, and corrective action planning.', duration: '2 hours' },
        { title: 'PPE Management', description: 'Employer obligations, PPE selection, issue records, and inspection procedures.', duration: '1 hour' },
        { title: 'Legal Liability & Compliance', description: 'Section 8 duties, penalties for non-compliance, and right to refuse dangerous work.', duration: '2 hours' }
      ],
      outcomes: [
        'Understand rights and duties under the OHS Act',
        'Conduct a basic hazard identification and risk assessment',
        'Function effectively as a safety representative',
        'Investigate workplace incidents using root cause analysis',
        'Implement and monitor a basic safety management system'
      ],
      prerequisites: [
        'No prior OHS knowledge required',
        'Recommended for all employees',
        'Supervisors and safety reps particularly encouraged'
      ]
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }
}

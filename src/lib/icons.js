import {
  Activity, Baby, Bone, Brain, Building2, BookOpen, Camera, Cross, Dumbbell,
  Ear, Eye, FlaskConical, HeartPulse, Home, Layers, Microscope, Monitor,
  Scissors, Stethoscope, Syringe, Users, Utensils, Wind, Bed, ShieldCheck,
  Droplets, ScanLine, Library, GraduationCap, ClipboardList,
} from 'lucide-react'

/**
 * Icon registry for data-driven blocks. Content files name an icon as a
 * string so `src/data/*.js` stays free of component imports.
 */
export const ICONS = {
  activity: Activity,
  baby: Baby,
  bed: Bed,
  bone: Bone,
  brain: Brain,
  building: Building2,
  book: BookOpen,
  camera: Camera,
  clipboard: ClipboardList,
  cross: Cross,
  dialysis: Droplets,
  dumbbell: Dumbbell,
  ear: Ear,
  eye: Eye,
  flask: FlaskConical,
  heart: HeartPulse,
  home: Home,
  layers: Layers,
  library: Library,
  microscope: Microscope,
  monitor: Monitor,
  scan: ScanLine,
  scissors: Scissors,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  student: GraduationCap,
  syringe: Syringe,
  users: Users,
  utensils: Utensils,
  wind: Wind,
}

export const iconFor = (name) => ICONS[name] ?? Activity

import React from 'react';
import {
  Home as HomeIcon,
  Image as ImageIcon,
  Images,
  MapPin,
  Phone,
  Mail,
  Camera,
  ZoomIn,
  Eye,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  MessageCircle,
  Menu,
  Check,
  Star,
  Cake,
  Heart,
  GraduationCap,
  Vote,
  FileCheck,
  Handshake,
  Sparkles,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  Package,
  Award,
  Shirt,
  Printer,
  Palette,
  Zap,
  Tag,
  Landmark,
  Clock,
  Smartphone,
  Sliders,
  Cpu,
  Store,
  Navigation2,
  FolderCheck,
  Fingerprint,
  FileText,
  Contact,
  BookOpen,
  Copy,
  Files,
  Receipt,
  Megaphone,
  IdCard,
  Sprout,
  Gavel,
  Scale,
  HelpCircle,
  Instagram,
  Layers,
  SearchX,
} from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = '', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ICON_MAP = {
  // Navigation & Location
  home: HomeIcon,
  location_on: MapPin,
  directions: Navigation,
  near_me: Navigation2,

  // Communication & Social
  call: Phone,
  phone: Phone,
  mail: Mail,
  chat: MessageCircle,
  message: MessageCircle,
  whatsapp: WhatsAppIcon,
  wa: WhatsAppIcon,
  instagram: Instagram,
  insta: Instagram,
  contact_phone: Contact,

  // Actions & Arrows
  arrow_forward: ArrowRight,
  arrow_right: ArrowRight,
  arrow_up_right: ArrowUpRight,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  close: X,
  menu: Menu,
  zoom_in: ZoomIn,
  visibility: Eye,
  eye: Eye,
  view: Eye,

  // Status & Verification
  check: Check,
  check_circle: CheckCircle2,
  task_alt: CheckCircle2,
  verified: CheckCircle2,
  verified_user: ShieldCheck,
  star: Star,
  sparkles: Sparkles,
  favorite: Heart,

  // Products, Services & Workshop
  inventory_2: Package,
  package: Package,
  print: Printer,
  printer: Printer,
  palette: Palette,
  design_services: Palette,
  services: Palette,
  bolt: Zap,
  sell: Tag,
  tag: Tag,
  badge: Award,
  checkroom: Shirt,
  schedule: Clock,
  clock: Clock,
  account_balance: Landmark,
  photo_camera: Camera,
  camera: Camera,
  photo_library: Images,
  images: Images,
  gallery: Images,
  image: ImageIcon,
  smartphone: Smartphone,
  tune: Sliders,
  precision_manufacturing: Cpu,
  storefront: Store,
  store: Store,
  menu_book: BookOpen,
  book: BookOpen,
  file_copy: Copy,
  copy: Copy,
  files: Files,
  layers: Layers,
  receipt_long: Receipt,
  receipt: Receipt,
  campaign: Megaphone,
  megaphone: Megaphone,

  // Occasions & CSC Services
  cake: Cake,
  school: GraduationCap,
  how_to_vote: Vote,
  assignment_turned_in: FileCheck,
  handshake: Handshake,
  folder_shared: FolderCheck,
  fingerprint: Fingerprint,
  description: FileText,
  id_card: IdCard,
  agriculture: Sprout,
  sprout: Sprout,
  gavel: Gavel,
  scale: Scale,
  search_off: SearchX,
  search_x: SearchX,
};

export default function Icon({
  name,
  size = 20,
  className = '',
  strokeWidth = 2,
  ...props
}) {
  if (!name) return null;

  const cleanName = String(name).trim().toLowerCase();
  const Component = ICON_MAP[cleanName] || HelpCircle;

  return (
    <Component
      size={size}
      strokeWidth={strokeWidth}
      className={`inline-block align-middle shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

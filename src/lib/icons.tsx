import {
  BarChart3,
  Check,
  CheckCircle,
  Cloud,
  Code2,
  FileText,
  Github,
  Headphones,
  HeadphonesIcon,
  Linkedin,
  Mail,
  MessageCircle,
  Rocket,
  Search,
  Shield,
  ShoppingBag,
  Sparkles,
  Users,
  Zap,
  Clock,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Users,
  ShoppingBag,
  Zap,
  Cloud,
  HeadphonesIcon,
  Headphones,
  Sparkles,
  BarChart3,
  Shield,
  Clock,
  MessageCircle,
  Search,
  FileText,
  CheckCircle,
  Rocket,
  Check,
  Github,
  Linkedin,
  Mail,
};

export function DynamicIcon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon className={className} size={size} />;
}

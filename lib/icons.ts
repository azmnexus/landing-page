import {
  BrainCircuit,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Database,
  Landmark,
  Mail,
  MapPin,
  Monitor,
  Phone,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Store,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Explicit icon registry.
 *
 * Capability and industry icons are referenced by name from content, so they
 * need to be resolved at runtime. Previously this was done with a namespace
 * import of `lucide-react`, which pulled the entire icon set into the client
 * bundle. Listing the icons we actually use keeps the bundle small and makes a
 * typo in `iconName` visible here rather than failing silently in the UI.
 */
const icons: Record<string, LucideIcon> = {
  BrainCircuit,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Database,
  Landmark,
  Mail,
  MapPin,
  Monitor,
  Phone,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Store,
  Workflow,
  Zap,
};

export const resolveIcon = (name: string): LucideIcon | null => icons[name] ?? null;

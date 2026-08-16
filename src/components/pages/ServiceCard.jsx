import {
  Bot,
  Boxes,
  Cloud,
  Code2,
  Globe,
  LayoutDashboard,
  Link2,
  Puzzle,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ServiceCard as BaseServiceCard } from "@/components/ui/Card.jsx";

const serviceIcons = {
  "ai-solutions": Bot,
  "saas-platforms": Boxes,
  "web-applications": Globe,
  "dashboards-analytics": LayoutDashboard,
  "apis-integrations": Link2,
  "automation-solutions": Workflow,
  "blockchain-web3": Puzzle,
  "cloud-deployment": Cloud,
  "custom-software": Code2,
};

export default function ServiceCard({ id, title, summary, description, capabilities, className }) {
  const Icon = serviceIcons[id] ?? Sparkles;

  return (
    <BaseServiceCard
      title={title}
      summary={summary}
      description={description}
      capabilities={capabilities}
      icon={<Icon aria-hidden="true" className="size-5" />}
      className={className}
    />
  );
}

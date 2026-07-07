export interface SecurityCheckItem {
  id: string;
  category: string;
  label: string;
  weight: number; // impact on core score
  checked: boolean;
  recommendation: string;
}

export interface VulnerabilityAsset {
  id: string;
  name: string;
  type: 'web' | 'network' | 'cloud' | 'api';
  status: 'secure' | 'vulnerable' | 'checking';
  ipAddress: string;
  vulnerabilitiesFoundCount: number;
  severity: 'none' | 'low' | 'medium' | 'high' | 'critical';
  details?: string[];
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  type: 'info' | 'warn' | 'success' | 'danger';
  message: string;
}

export interface SecurityService {
  id: string;
  name: string;
  iconName: string;
  shortDescription: string;
  detailedDescription: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export interface ClientMessage {
  id: string;
  senderName: string;
  email: string;
  messageText: string;
  encryptedBytes: string;
  decryptionKeyHex: string;
  status: 'draft' | 'encrypting' | 'encrypted' | 'sent';
  timestamp: string;
  assessment?: string;
  actionPlan?: string[];
  threatScore?: number;
  securityGrade?: string;
}

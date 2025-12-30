/**
 * GoHighLevel TypeScript Type Definitions
 *
 * Comprehensive types for GHL API v2
 */

export interface GHLLocation {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  website: string;
  timezone: string;
  settings: Record<string, any>;
}

export interface GHLUser {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  extension: string;
  permissions: {
    campaignsEnabled: boolean;
    campaignsReadOnly: boolean;
    contactsEnabled: boolean;
    workflowsEnabled: boolean;
    workflowsReadOnly: boolean;
    triggersEnabled: boolean;
    funnelsEnabled: boolean;
    websitesEnabled: boolean;
    opportunitiesEnabled: boolean;
    dashboardStatsEnabled: boolean;
    bulkRequestsEnabled: boolean;
    appointmentsEnabled: boolean;
    reviewsEnabled: boolean;
    onlineListingsEnabled: boolean;
    phoneCallEnabled: boolean;
    conversationsEnabled: boolean;
    assignedDataOnly: boolean;
    adwordsReportingEnabled: boolean;
    membershipEnabled: boolean;
    facebookAdsReportingEnabled: boolean;
    attributionsReportingEnabled: boolean;
    settingsEnabled: boolean;
    tagsEnabled: boolean;
    leadValueEnabled: boolean;
    marketingEnabled: boolean;
    agentReportingEnabled: boolean;
    botService: boolean;
    socialPlanner: boolean;
    bloggingEnabled: boolean;
    invoiceEnabled: boolean;
    affiliateManagerEnabled: boolean;
    contentAiEnabled: boolean;
    refundsEnabled: boolean;
    recordPaymentEnabled: boolean;
    cancelSubscriptionEnabled: boolean;
    paymentsEnabled: boolean;
    communitiesEnabled: boolean;
    exportPaymentsEnabled: boolean;
  };
  roles: {
    type: string;
    role: string;
    locationIds: string[];
  }[];
}

export interface GHLCustomField {
  id: string;
  name: string;
  fieldKey: string;
  dataType: 'TEXT' | 'LARGE_TEXT' | 'NUMERICAL' | 'PHONE' | 'MONETORY' | 'CHECKBOX' | 'SINGLE_OPTIONS' | 'MULTIPLE_OPTIONS' | 'DATE' | 'FILE_UPLOAD';
  position: number;
  options?: string[];
  placeholder?: string;
  model: 'contact' | 'opportunity';
}

export interface GHLTag {
  id: string;
  name: string;
  color: string;
  locationId: string;
}

export interface GHLPipeline {
  id: string;
  name: string;
  stages: GHLPipelineStage[];
  locationId: string;
}

export interface GHLPipelineStage {
  id: string;
  name: string;
  position: number;
  pipelineId: string;
}

export interface GHLCalendar {
  id: string;
  name: string;
  description: string;
  slug: string;
  widgetSlug: string;
  calendarType: 'round_robin_booking' | 'event' | 'class_booking' | 'collective_booking' | 'service_booking';
  eventTitle: string;
  eventColor: string;
  locationId: string;
  meetingLocation: string;
  slotDuration: number;
  slotInterval: number;
  slotBuffer: number;
  appoinmentPerSlot: number;
  appoinmentPerDay: number;
  openHours: {
    daysOfTheWeek: number[];
    hours: {
      openHour: number;
      openMinute: number;
      closeHour: number;
      closeMinute: number;
    }[];
  }[];
  enableRecurring: boolean;
  notifications: {
    type: 'email' | 'sms';
    shouldSendToContact: boolean;
    shouldSendToGuest: boolean;
    shouldSendToUser: boolean;
    shouldSendToSelectedUsers: boolean;
    selectedUsers: string[];
  }[];
  confirmationPage: {
    enabled: boolean;
    url: string;
    shouldRedirect: boolean;
  };
  pixelId: string;
  formId: string;
  stickyContact: boolean;
  isLivePaymentMode: boolean;
}

export interface GHLNote {
  id: string;
  body: string;
  contactId: string;
  userId: string;
  dateAdded: string;
}

export interface GHLTask {
  id: string;
  title: string;
  body: string;
  contactId: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
  completedDate?: string;
}

export interface GHLConversation {
  id: string;
  contactId: string;
  locationId: string;
  type: 'SMS' | 'Email' | 'WhatsApp' | 'GMB' | 'IG' | 'FB' | 'Custom' | 'Live_Chat' | 'Call';
  status: 'unread' | 'read';
  lastMessageDate: string;
  lastMessageBody: string;
  unreadCount: number;
}

export interface GHLMessage {
  id: string;
  conversationId: string;
  type: 'SMS' | 'Email' | 'WhatsApp' | 'GMB' | 'IG' | 'FB' | 'Custom' | 'Live_Chat';
  direction: 'inbound' | 'outbound';
  status: 'pending' | 'scheduled' | 'sent' | 'delivered' | 'read' | 'failed' | 'opened';
  body: string;
  from: string;
  to: string;
  dateAdded: string;
  attachments?: {
    type: string;
    url: string;
  }[];
}

export interface GHLContact {
  id?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  source?: string;
  tags?: string[];
  customFields?: Record<string, any>;
  dateOfBirth?: string;
  companyName?: string;
  website?: string;
}

export interface GHLWebhookEvent {
  type: 'ContactCreate' | 'ContactUpdate' | 'ContactDelete' |
        'AppointmentCreate' | 'AppointmentUpdate' | 'AppointmentDelete' |
        'OpportunityCreate' | 'OpportunityUpdate' | 'OpportunityStatusUpdate' | 'OpportunityStageUpdate' | 'OpportunityMonetaryValueUpdate' | 'OpportunityDelete' |
        'InboundMessage' | 'OutboundMessage' |
        'TaskCreate' | 'TaskUpdate' | 'TaskDelete' | 'TaskCompleted' |
        'NoteCreate' |
        'WorkflowCompleted';
  locationId: string;
  id: string;
  contact?: GHLContact;
  appointment?: GHLAppointment;
  opportunity?: GHLOpportunity;
  message?: GHLMessage;
  task?: GHLTask;
  note?: GHLNote;
}

export interface GHLFormSubmission {
  id: string;
  formId: string;
  contactId: string;
  locationId: string;
  submittedAt: string;
  data: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  page: {
    url: string;
    title: string;
  };
}

// Re-export from client.ts for convenience
export type {
  GHLContact,
  GHLAppointment,
  GHLOpportunity,
} from './client';

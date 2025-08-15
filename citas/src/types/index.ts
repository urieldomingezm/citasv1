// Tipos para la aplicación de citas

// Tipos de usuario
export interface User {
  id: string;
  username: string;
  email?: string;
  firstName: string;
  lastName?: string;
  age?: number;
  location?: Location;
  bio?: string;
  photos?: Photo[];
  preferences?: UserPreferences;
  isPremium: boolean;
  isOnline: boolean;
  lastSeen?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Photo {
  id: string;
  url: string;
  isProfile: boolean;
  order: number;
  uploadedAt: Date;
}

export interface Location {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

export interface UserPreferences {
  ageRange: {
    min: number;
    max: number;
  };
  distance: number; // en kilómetros
  interests: string[];
  lookingFor: 'relationship' | 'friendship' | 'casual' | 'any';
}

// Tipos de autenticación
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email?: string;
  password: string;
  firstName: string;
  lastName?: string;
  age?: number;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  refreshToken?: string;
  user?: User;
  message?: string;
  expiresIn?: number;
}

// Tipos de matches
export interface Match {
  id: string;
  userId: string;
  targetUserId: string;
  type: 'like' | 'dislike' | 'super_like';
  isMutual: boolean;
  createdAt: Date;
  user?: User;
  targetUser?: User;
}

export interface MatchResponse {
  isMatch: boolean;
  match?: Match;
  message: string;
}

// Tipos de mensajes
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  messageType: 'text' | 'image' | 'emoji';
  isRead: boolean;
  sentAt: Date;
  readAt?: Date;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  code?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Tipos SOAP
export interface SoapRequest {
  method: string;
  service: string;
  parameters: Record<string, any>;
}

export interface SoapResponse<T = any> {
  success: boolean;
  data?: T;
  fault?: SoapFault;
}

export interface SoapFault {
  code: string;
  message: string;
  detail?: any;
}

// Tipos de configuración
export interface ServiceConfig {
  protocol: 'REST' | 'SOAP';
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
}

// Tipos de búsqueda
export interface SearchFilters {
  ageRange?: {
    min: number;
    max: number;
  };
  distance?: number;
  location?: Location;
  interests?: string[];
  isOnline?: boolean;
  isPremium?: boolean;
}

export interface SearchRequest extends SearchFilters {
  page?: number;
  limit?: number;
  sortBy?: 'distance' | 'age' | 'lastSeen' | 'compatibility';
  sortOrder?: 'asc' | 'desc';
}

// Tipos de Premium
export interface PremiumFeature {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'basic' | 'premium' | 'gold';
  features: PremiumFeature[];
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  autoRenew: boolean;
}

// Tipos de errores
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

// Tipos de navegación
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
  isActive?: boolean;
  children?: NavigationItem[];
}

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (emailOrPhone: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Test credentials
const TEST_USER_CREDENTIALS = {
  phone: '8058060375',
  password: '12345678',
  userData: {
    name: 'Meghram Meena',
    email: 'meghram@email.com',
    phone: '8058060375'
  }
};

const TEST_ADMIN_CREDENTIALS = {
  email: 'admin@lakhilraj.org',
  password: 'admin123',
  userData: {
    name: 'Admin User',
    email: 'admin@lakhilraj.org',
    phone: '+91 9XXXXXXXXX',
    isAdmin: true
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('currentUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (emailOrPhone: string, password: string): boolean => {
    // Check user credentials
    if (emailOrPhone === TEST_USER_CREDENTIALS.phone && password === TEST_USER_CREDENTIALS.password) {
      setUser(TEST_USER_CREDENTIALS.userData);
      localStorage.setItem('currentUser', JSON.stringify(TEST_USER_CREDENTIALS.userData));
      return true;
    }
    
    // Check admin credentials
    if (emailOrPhone === TEST_ADMIN_CREDENTIALS.email && password === TEST_ADMIN_CREDENTIALS.password) {
      setUser(TEST_ADMIN_CREDENTIALS.userData);
      localStorage.setItem('currentUser', JSON.stringify(TEST_ADMIN_CREDENTIALS.userData));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

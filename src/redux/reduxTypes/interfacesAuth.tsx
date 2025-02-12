export interface User {
  id?: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthCredentials {
  name: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | { name: null; email: null };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

// export interface Contact {
//   id: string;
//   name: string;
//   number: string;
// }

// export interface ContactsState {
//   items: Contact[];
//   isLoading: boolean;
//   error: string | null;
// }

// export interface AuthState {
//   user: {
//     name: string | null;
//     email: string | null;
//   };
//   token: string | null;
//   isLoggedIn: boolean;
//   isRefreshing: boolean;
// }

// export interface NewContact {
//   name: string;
//   number: string;
// }

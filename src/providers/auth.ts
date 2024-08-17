import axios from 'axios';

export interface RegisterUserData {
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  first_name: string;
  last_name: string;
}

export async function registerUser(data: RegisterUserData): Promise<void> {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8090/api/collections/users/records',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('User registered:', response.data);

    // Optionally, send an email verification request
    await axios.post(
      'http://127.0.0.1:8090/api/collections/users/request-verification',
      { email: data.email }
    );
    console.log('Verification email sent');
  } catch (error: any) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
  }
}

export async function loginUser(email: string, password: string): Promise<void> {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8090/api/collections/users/auth-with-password',
      {
        identity: email,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const token = response.data.token;
    const userId = response.data.record.id;
    console.log('User logged in, token:', token);
    console.log('User logged in, userID:', userId);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);

  } catch (error: any) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
  }
}

export async function signInWithGoogle(): Promise<void> {
  try {
    // Assuming PocketBase has a Google OAuth provider configured
    const response = await axios.get('http://127.0.0.1:8090/api/collections/users/auth-oauth2', {
      params: {
        provider: 'google',
        redirectUrl: `${window.location.origin}/oauth/callback`,
      },
    });
    window.location.href = response.data.authUrl; // Redirect to Google OAuth URL
  } catch (error: any) {
    console.error('Error signing in with Google:', error.response ? error.response.data : error.message);
  }
}
  export async function getCurrentUser(userId: string): Promise<any> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('User is not authenticated');
      }
  
      const response = await axios.get(
        `http://127.0.0.1:8090/api/collections/users/records/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      return response.data;
    } catch (error: any) {
      console.error('Error fetching user details:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  export async function checkUserAuthenticated() {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      
      if (!token || !userId) {
        return { isAuthenticated: false, user: null };
      }
  
      const user = await getCurrentUser(userId);
      
      return { isAuthenticated: true, user };
    } catch (error) {
      console.error('Error checking user authentication:', error);
      return { isAuthenticated: false, user: null };
    }
  }
  export function logoutUser(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  
    window.location.href = '/login'; 
  }  
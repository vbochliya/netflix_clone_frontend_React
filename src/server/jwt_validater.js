import jwt_decode from 'jwt-decode';

function isTokenExpired(token) {
  if (!token) return true;
  
  try {
    const decoded = jwt_decode(token);
    
    if (!decoded.exp) {
      return false; 
    }
    
    return decoded.exp * 1000 < Date.now();
  } catch (error) {
    console.error('Token decoding error:', error);
    return true;
  }
}

function isUserLoggedIn() {
  const token = localStorage.getItem('token');
  return !isTokenExpired(token);
}

export default isUserLoggedIn;
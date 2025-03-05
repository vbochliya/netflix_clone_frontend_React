import jwt_decode from 'jwt-decode';

function isTokenExpired(token) {
  if (!token) return true;
  
  try {
    const decoded = jwt_decode(token);
    
    if (!decoded.exp) {
      return false; 
    }

    let result = decoded.exp < Date.now() / 1000;
    if (result) {
      localStorage.removeItem('token');
    }
    return result;
    
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

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);


// export async function logout() {  
//   const options = {
//     method: 'DELETE'
//   };

//   return await fetch(`http://craftify.herokuapp.com/api/session`, options)
// }
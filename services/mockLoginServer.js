export function mockLogin(email, password) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(randomString(10));
    }, 200);
  });
}

const randomString = (length) => {
   let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
};

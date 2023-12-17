export const generateRandomString = ()=>{
    const character = 'ABCDEFGHIJKLMNOPQUIRSTUVWXYZabcdefghijklmnopquvwxyz1234567890';
    let result = ''
    for (let i = 0; i < 4; i++) {
        const result = character.charAt(Math.floor(Math.random()*character.length));

    }
   return result;
}
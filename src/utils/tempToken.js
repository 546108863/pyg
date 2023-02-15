import {v4 as uuidv4} from 'uuid'
export default ()=>{
    let token = localStorage.getItem('temp-token');
    if (!token) {
        token = uuidv4();
        localStorage.setItem('temp-token',token)
    }
    return token;
}
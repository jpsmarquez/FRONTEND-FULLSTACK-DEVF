export default function (){
    const token = localStorage.getItem('clone');
    const [,baseUri] = token.split('.');
    const base64 = baseUri.replace('-','+').replace('_','/');
    const payload = JSON.parse(window.atob(base64));
    return payload;
}
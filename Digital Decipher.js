function digitalDecipher(Message, key) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m'
			       ,'n','o','p','q','r','s','t','u','v','w','x','y','z']
    let keyStr = key.toString();
        return Message.map((x,i)=>{
    addVal = +keyStr.charAt(i%(keyStr.length));
        return alphabet[x-addVal-1];
     }).join('');
}
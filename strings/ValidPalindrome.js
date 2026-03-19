function palindrome(str){
    let n=str.length;
    let l=0;
    let r=n-1;
    while(l<=r){
        if(str[l]!=str[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;

 }
 function isAlphaNumeric(c){
    let asci=c.charCodeAt(0);
    if((asci>=65&&asci<=90)|| (asci>=97&&asci<=122)||(asci>=48&&asci<=57)){
        return true;
    }
    else{
        return false;
    }
    
 }
var isPalindrome = function(s) {
    let sr="";
    let n=s.length;
    for(let i=0;i<n;i++){
        let ch=s[i].toLowerCase();
        if(isAlphaNumeric(ch)){
            sr+=(ch);
        }
    }
    let res=palindrome(sr);
    return res;

};

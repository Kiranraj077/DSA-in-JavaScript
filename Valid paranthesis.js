/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st=[];
    n=s.length;
    for(let i=0;i<n;i++){
        let ch=s[i];
        if(st.length!=0){
            if(st[st.length-1]=='('){
                if(ch==')'){
                    st.pop();
                    continue;
                }
            }
            if(st[st.length-1]=='['){
                if(ch==']'){
                    st.pop();
                    continue;
                }
            }
            if(st[st.length-1]=='{'){
                if(ch=='}'){
                    st.pop();
                    continue;
                }
             }
        }
       st.push(ch);
    }
    if(st.length==0){
        return true;
    }
    else{
        return false;
    }
    
};

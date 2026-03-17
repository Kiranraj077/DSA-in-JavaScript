/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let n=s.length;
    let l=t.length;
    if(n!=l){
        return false;
    }
    let mpps=new Map();
    let mppt=new Map();

    for(let i=0;i<n;i++){
        mpps.set(s[i],(mpps.get(s[i])||0)+1);
    }
      for(let i=0;i<l;i++){
        mppt.set(t[i],(mppt.get(t[i])||0)+1);
    }
    for(let i=0;i<n;i++){
        if(mppt.has(s[i])){
            if(mpps.get(s[i])!=mppt.get(s[i])){
                return false;
            }
        }
        else{
               return false;
        }
      
    }
   return true;
};

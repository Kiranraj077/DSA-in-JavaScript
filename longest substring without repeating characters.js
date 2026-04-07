/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n=s.length;
    let l=0;
    let r=0;
    let mpp=new Map();
    let maxi=0;
    while(r<n){
         if(mpp.has(s[r])){
            if(mpp.get(s[r])>=l){
                l=mpp.get(s[r])+1;
            }
         }
         let len=r-l+1;
         maxi=Math.max(maxi,len);
         mpp.set(s[r],r);
         r++;
    }
    return maxi;
};

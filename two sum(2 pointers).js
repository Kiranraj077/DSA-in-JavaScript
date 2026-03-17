/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let n=numbers.length;
    let l=0;
    let r=n-1;
    let res=[];

    while(l<=n){
        if(numbers[l]+numbers[r]<target){
            l++;
        }
        else if(numbers[l]+numbers[r]>target){
            r--;
        }
        else{
            res.push(l+1,r+1);
            break;
        }
    }
    return res;
};

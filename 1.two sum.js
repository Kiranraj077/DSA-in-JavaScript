/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n=nums.length;
    let mpp=new Map();
    let res=[];

    for(let i=0;i<n;i++){
        let a=nums[i];
        let comp=target-a;
        if(mpp.has(comp)){
            let ind1=mpp.get(comp);
            let ind2=i;
            res.push(ind1,ind2);
        }
        mpp.set(a,i);
    }

    return res;
};

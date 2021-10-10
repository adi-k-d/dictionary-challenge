const dict = {'2020-01-01' : 4, '2020-01-02' : 4, '2020-01-03': 6, '2020-01-04': 8,'2020-01-05' : 2,'2020-01-06': -6, '2020-01-07': 2,'2020-01-08' : -2,};
let k = Object.entries(dict);
var res =[];
var c=0;
let prev =0;
let next=0;
for (const [key, value] of Object.entries(dict)) {
    c=value;   
    var myDate = new Date(key);    
    var b= myDate.getDay()
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var n = days[b];
    
    if (b==1) {
        
        res[0]=+c;
        
        
    }
    if (b==2) {
        
        res[1]=+c;
    }
    if (b==3) {
        
        res[2]=+c;
    }
    if (b==4) {
        
        res[3]=+c;
    }
    if (b==5) {
        
        res[4]=+c;
    }
    if (b==6) {
        
        res[5]=+c;
    }
    if (b==0) {
        
        res[6]=+c;
    }
}



for (let i = 1; i < 5; i++) {
    
    if (!res[i]) {
        for (let j = i; j < res.length; j++) {
            if (res[j]) {
                next=res[j];
            }
            res[i]=((res[i-1]+next)/2);
            
        }
            
    }
    
    
}

const result = {'Monday':res[0], 'Tuesday': res[1], 'Wednesday' : res[2], 'Thursday': res[3], 'Friday': res[4], 'Saturday' : res[5], 'Sunday' : res[6],};
console.log(result,next);
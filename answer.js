'use strict';

function getDayName(dateString) {
    const day = new Date(dateString);
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekDays[day.getDay()];
}

function Solution(D){
    var a = new Array(1000001,1000001,1000001,1000001,1000001,1000001,1000001); 

    // iterate over the  D  object
    for (const key in D) {
      //  console.log(`${key}: ${D[key]}`);
        var dayName = getDayName(key);
        switch (dayName) {
            case 'Mon':
                if(a[0]==1000001) 
                    a[0]=D[key];
                else
                    a[0]+=D[key];
                break;
            case 'Tue':
                if(a[1]==1000001)
                    a[1]=D[key];
                else
                    a[1]+=D[key];
                break;
            case 'Wed':
                if(a[2]==1000001)
                    a[2]=D[key];
                else
                    a[2]+=D[key];
                break;              
            case 'Thu':
                if(a[3]==1000001)
                    a[3]=D[key];
                else
                    a[3]+=D[key];;
                break;          
            case 'Fri':
                if(a[4]==1000001)
                    a[4]=D[key];
                else
                    a[4]+=D[key];
                break;        
            case 'Sat':
                if(a[5]==1000001)
                    a[5]=D[key];
                else
                    a[5]+=D[key];
                break;   
            case 'Sun':
                if(a[6]==1000001)
                    a[6]=D[key];
                else
                    a[6]+=D[key];
                break;                 
        }
    }
    for(var i=1;i<=5;i++){
        var k=1;
        var j=i;
        while(a[i]==1000001 && i<6)
        {
            i++;
            k++;
        }
        var h = j+k-1;
        for(i=j;i<h && k>1;i++,k--){
            a[i]=a[i-1]+(a[h]-a[i-1])/k;
            a[i]=Math.trunc(a[i]);
        }
        i=j;
    }
    console.log(a);
}

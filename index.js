'use strict'

    const vikrant = {
        collegeName: 'Vikrant',
        collgeCode: '0858',
        registeredNumber:[],
        registration: function(studentName,branch,favNum){
        const date = new Date().toLocaleDateString();
        const current_year =   date.slice(date.lastIndexOf('/')+3);
        const newEnrollmentNum = `${this.collgeCode}${branch}${current_year}${favNum}`;           
        console.log(`Congrats ${studentName}, your are successfully enrollned in "${this.collegeName}" College with this enrollnmentnumber number ${this.collgeCode}${branch}${current_year}${favNum}`)
        this.registeredNumber.push({studentName:studentName,enrollnmentNum: `${newEnrollmentNum}`});
       }
    }

//updated by santosh
    const acropolis = {
        collegeName: 'Acropolis',
        collgeCode: '2005',
        registeredNumber:[],
    }

    const bansal = {
        collegeName: 'Bansal',
        collgeCode: '0422',
        registeredNumber:[],
    }

    const registration = vikrant.registration;

    registration.call(vikrant,'Littu Mohanti','me','11');    
    registration.call(acropolis,'Nayra Mehta','it','04');
    registration.call(bansal,'Anamika Singh','cs','51');
    
    console.log('Acropolis ',acropolis)

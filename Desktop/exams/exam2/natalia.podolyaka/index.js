const participantObject = {
    firstName: String,
    lastName: String,
    seniorityLevel: String
}

const pricingObject = {
    roleName: Number
}

const project = {
    participants: [],
    pricing: {},
    isBusy: false,

    init(participants, pricing) {
        isBusy = false; 
        if(typeof participants !== Array || typeof pricing !== Object || participants === undefined || pricing === undefined){
            return null;
        } else {
            this.participants = participants;
            this.pricing = pricing;
        }
    },

    findParticipant(functor, callbackFunction) { 
      function functor (participant)
        {
            for(let k = 0; k < this.participants.length; k++){
                if ( JSON.stringify(participants[k]) === JSON.stringify(participant))
                    return true;
                else 
                    return false;
            }
        }
        if (this.isBusy === true){
            return false;
        } 
        this.isBusy = true;
        setTimeout(() => {
            let participant = this.participants.find(functor)
            if ( participant === undefined )
            {
                this.isBusy = false; 
                callbackFunction(null);
            }
            else {
                this.isBusy = false;
                callbackFunction(participant); 
            }   
        }, 500)
    },

    findParticipants(functor, callbackFunction) {
        if (this.isBusy === true){
            return false;
        }
        function functor (participant)
        {
            for(let k = 0; k < this.participants.length; k++){
                if ( JSON.stringify(participants[k]) === JSON.stringify(participant))
                    return true;
                else 
                    return false;
            }
        }
        this.isBusy = true;
        setTimeout(() => {
            let participant = this.participants.find(functor);
            let partArray = [];
            for (let prop of this.participants){
                let participant = [prop].find(functor);
                if (participant){
                    partArray.push(participant);
                }
            }
            this.isBusy = false;
            callbackFunction(partArray);
        }, 500)
    },

    addParticipant(participantObject, callbackFunction) { 
        if (this.isBusy === true){
            return false;
        } 
        this.isBusy = true;
        setTimeout(() => {
            if(participantObject.seniorityLevel !==undefined ){
                this.participants.push(participantObject);
                this.isBusy = false;
                callbackFunction();
            }
            else {
                this.isBusy = false;
                callbackFunction((err) => {});   
            } 
        }, 500)
    },

    removeParticipant(participantObject, callbackFunction) { 
        if (this.isBusy === true){
            return false;
        } 
        this.isBusy = true;
        setTimeout(() => {
            let participantIndex = this.participants.findIndex(functor);
            if (participantIndex == -1 )
            {
                this.isBusy = false;
                callbackFunction(null);
            }
            else {
                this.participants.splice(participantIndex, 1);
                this.isBusy = false;
                callbackFunction(participantObject);
            }         
        }, 500)
    },

    setPricing(participantPriceObject, callbackFunction) { 
        if (this.isBusy === true){
                return false
            }
        this.isBusy = true;
        setTimeout(() => {
            for (let key in participantPriceObject){ 
                if (pricing[key] === participantPriceObject[key]){
                    this.pricing[key] = participantPriceObject[key];
                }
                else {
                    this.pricing.push(participantPriceObject[key]);
                }
            this.isBusy = false;
            callbackFunction();
            } 
        }, 500);
    },

    calculateSalary(periodInDays) {
    let result = 0;
        for (let i = 0; i < periodInDays; i++) {
            for (let k of this.participants){
                if (this.pricing[k.seniorityLevel]!== undefined){
                    result += this.pricing[k.seniorityLevel] * 8 
                }
                else{
                    throw "err";
                }
            }
        }
        return result; 
    }
}

const ProjectModule = (function getInstance(){
        let object = project;
        return object;
    })

module.exports = {
    firstName: 'Natalia',
    lastName: 'Podolyaka',
    task: project
}
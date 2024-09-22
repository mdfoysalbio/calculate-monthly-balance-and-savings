document.getElementById('assistant-tab').addEventListener('click', function(){
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

    
    document.getElementById('assistant-tab').classList.add('bg-gradient-to-r');
    document.getElementById('assistant-tab').classList.add('from-blue-500');
    document.getElementById('assistant-tab').classList.add('to-purple-600');
    document.getElementById('assistant-tab').classList.add('text-white');
     document.getElementById('assistant-tab').classList.remove('text-black');


    document.getElementById('history-tab').classList.remove('bg-gradient-to-r');
    document.getElementById('history-tab').classList.remove('from-blue-500');
    document.getElementById('history-tab').classList.remove('to-purple-600');
    document.getElementById('history-tab').classList.remove('text-white');

    

})

document.getElementById('calculate').addEventListener('click', function(event){
    event.preventDefault();

    const income = same('income');
    const software = same('software');
    const courses = same('courses');
    const internet = same('internet');
    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    
    if(income <= 0  || income <= totalExpense ){
       document.getElementById('income-error').classList.remove('hidden');
       document.getElementById('results').classList.add('hidden');

    }
    else if( software < 0 || software > income){
        document.getElementById('software-error').classList.remove('hidden');
        document.getElementById('results').classList.add('hidden');


    }

    else if( courses < 0 || courses > income){
        document.getElementById('courses-error').classList.remove('hidden');
        document.getElementById('results').classList.add('hidden');


    }
    else if( internet < 0 || internet > income){
        document.getElementById('internet-error').classList.remove('hidden');
        document.getElementById('results').classList.add('hidden');


    }
    else{
        document.getElementById('income-error').classList.add('hidden');
        document.getElementById('software-error').classList.add('hidden');
        document.getElementById('courses-error').classList.add('hidden');
        document.getElementById('internet-error').classList.add('hidden');
        document.getElementById('results').classList.remove('hidden');



    
    };


    if(isNaN = true){
        document.getElementById('results').classList.add('hidden');

    }
    else{
        document.getElementById('results').classList.remove('hidden');

    }

    

    
    document.getElementById('total-expenses').innerText = totalExpense;
    
    document.getElementById('balance').innerText= balance;
    
});


document.getElementById('calculate-savings').addEventListener('click', function(event){
    event.preventDefault();
    
   
    const income = same('income');
    const software = same('software');
    const courses = same('courses');
    const internet = same('internet');
    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;
   
    const savings = same('savings');
    const savingsAmount  = (balance * savings)/100;
    const remainingBalance = balance - savingsAmount;

    
    document.getElementById('savings-amount').innerText = savingsAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
    
    
   
    


});



document.getElementById('history-tab').addEventListener('click', function(){
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');

     document.getElementById('assistant-tab').classList.remove('bg-gradient-to-r');
     document.getElementById('assistant-tab').classList.remove('from-blue-500');
     document.getElementById('assistant-tab').classList.remove('to-purple-600');
     document.getElementById('assistant-tab').classList.remove('text-white');
     document.getElementById('assistant-tab').classList.add('text-black');

     document.getElementById('history-tab').classList.add('bg-gradient-to-r');
     document.getElementById('history-tab').classList.add('from-blue-500');
     document.getElementById('history-tab').classList.add('to-purple-600');
     document.getElementById('history-tab').classList.add('text-white');
     
    


    const income = same('income');
    const software = same('software');
    const courses = same('courses');
    const internet = same('internet');
   
    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;
   


    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md shadow-sm border-l-2 border-yellow-500';
    historyItem.innerHTML = `
         
         <p class = "text-xs text-gray-500">${new Date().toLocaleDateString()}</p> 

         <p class = "text-xs text-gray-500"> Income : $${income}</p>
         <p class = "text-xs text-gray-500"> Expense : $${totalExpense}</p>
         <p class = "text-xs text-gray-500"> Balance : $${balance}</p>

    `


    
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

   

})
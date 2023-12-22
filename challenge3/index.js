// Write a program whose major task is to calculate an individual’s Net Salary 
// by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), 
// NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
// Function to calculate net salary
function calculateNetSalary() {
    // Get user inputs
    const grossSalary = parseFloat(prompt("Enter gross salary:"));
    const contributionBenefit = parseFloat(prompt("Enter contribution benefits:"));
   
   
    // Calculate tax deductions
    const taxableIncome = grossSalary - contributionBenefit - 2400; // Assuming a personal relief of 2400
    let tax = 0;
   
    // Applying tax brackets and rates
    if (taxableIncome <= 24000) {
      tax =  0.1 * (taxableIncome);
    } else if (taxableIncome <= 32333) {
      tax = 0.25 * (taxableIncome);
    } else if (taxableIncome <= 500000) {
      tax = 0.30 * (taxableIncome);
    } else if (taxableIncome <= 800000){
      tax = 0.325 * (taxableIncome);
    } else if (taxableIncome > 800000){
        tax = 0.35 * (taxableIncome);
    }
   
    // Calculate NHIF and NSSF deductions
    let nhifDeductions = 0;
    if (grossSalary < 6000){
        nhifDeductions = 150;
    }else if (grossSalary <= 7999){
        nhifDeductions = 300;
    }else if (grossSalary <= 11999){
        nhifDeductions = 400;
    }else if (grossSalary <= 14999){
        nhifDeductions = 500;
    }else if (grossSalary <= 19999){
        nhifDeductions = 600;
    }else if (grossSalary <= 24999){
        nhifDeductions = 750;
    }else if (grossSalary <= 29999){
        nhifDeductions = 850;
    }else if (grossSalary <= 34999){
        nhifDeductions = 900;
    }else if (grossSalary <= 39999){
        nhifDeductions = 950;
    }else if (grossSalary <= 44999){
        nhifDeductions = 1000;
    }else if (grossSalary <= 49999){
        nhifDeductions = 1100;
    }else if (grossSalary <= 59999){
        nhifDeductions = 1200;
    }else if (grossSalary <= 69999){
        nhifDeductions = 1300;
    }else if (grossSalary <= 79999){
        nhifDeductions = 1400;
    }else if (grossSalary <= 89999){
        nhifDeductions = 1400;
    }else if (grossSalary <= 99999){
        nhifDeductions = 1600;
    }else if (grossSalary >= 100000){
        nhifDeductions = 1700;
    }
    const nssfDeductions = grossSalary * 0.06;
   
    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
   
    console.log(`Gross Salary: Ksh${grossSalary.toFixed(2)}`);
    console.log(`Benefits: Ksh${contributionBenefit.toFixed(2)}`);
    console.log(`Taxable Income: Ksh${taxableIncome.toFixed(2)}`);
    console.log(`Payee (Tax): Ksh${tax.toFixed(2)}`);
    console.log(`NHIF Deductions: Ksh${nhifDeductions.toFixed(2)}`);
    console.log(`NSSF Deductions: Ksh${nssfDeductions.toFixed(2)}`);
    console.log(`Net Salary: Ksh${netSalary.toFixed(2)}`);
}
   
calculateNetSalary();
   
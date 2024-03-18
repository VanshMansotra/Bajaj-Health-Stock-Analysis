const fetchAccountNumber = async () => {
    const response = await fetch(
      "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Vansh Mansotra",
          email: "vansh1507.be21@chitkara.edu.in",
          rollNumber: 2110991507,
          phone: 9876635692,
        }),
      }
    );
  
    return await response.json();
  };
  
  const buyStock = async () => {
    const { accountNumber } = await fetchAccountNumber();
    console.log(accountNumber);
    const response = await fetch(
      "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "bfhl-auth": 2110991507,
        },
        body: JSON.stringify({
          company: "Bajaj Health",
          currentPrice: 310,
          accountNumber: accountNumber,
          githubRepoLink: "https://github.com/VanshMansotra/Bajaj-Health-Stock-Analysis",
        }),
      }
    );
  
    return await response.json();
  };
  
  buyStock().then((response) => console.log(response));
document.getElementById("searchButton").addEventListener("click", async () => {
    const name = document.getElementById("nameInput").value.trim();
    if (!name) {
      alert("Please enter a name!");
      return;
    }
    
    const query = `${name} poop song`; //build a request to search in Youtube
    chrome.runtime.sendMessage({ //send the request and his action
      action: 'searchYoutube', 
      query: query 
    });
  });


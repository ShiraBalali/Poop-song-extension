chrome.runtime.onInstalled.addListener(() => {
    console.log("YouTube Poop Song Finder installed!"); //google listerner about the installation of the extension
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'searchYoutube') {
      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(request.query)}`; //if the listener is 'searchYoutube', send this URL with the request.query (the name)
      
      chrome.tabs.create({ url }, (tab) => {
        chrome.tabs.onUpdated.addListener(function listener(tabId, info) { //open Youtube tab

          if (tabId === tab.id && info.status === 'complete') { // loaded successfully
            chrome.tabs.onUpdated.removeListener(listener); // remove the listerner
            chrome.scripting.executeScript({ //open the first video from the searching
              target: { tabId: tab.id },
              func: () => {
                const firstVideo = document.querySelector('#video-title');
                if (firstVideo) firstVideo.click();
              }
            });
          }
        });
      });
    }
  });
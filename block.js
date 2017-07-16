var backButton = document.querySelector('#back-button');
var happyImage = document.querySelector('#happy-image');
var sadImage = document.querySelector('#sad-image');

fetch('https://s3.us-east-2.amazonaws.com/pawblock-sources/images.json')
.then(function (res) {
  return res.json();
}).then(function (json) {
  var sets = json.sets;
  sets.push({
    happy: 'images/default-happy.jpg',
    sad: 'images/default-sad.jpg'
  });

  var randomChoice = json.sets[Math.floor(Math.random() * sets.length)];
  happyImage.src = randomChoice.happy;
  sadImage.src = randomChoice.sad;
}).catch(function (err) {
  console.error('Failed to get images json:', err);

  happyImage.src = 'images/default-happy.jpg';
  sadImage.src = 'images/default-sad.jpg';
});

happyImage.onerror = function () {
  console.error('Failed to load:', happyImage.src);
  happyImage.src = 'images/default-happy.jpg';
}

sadImage.onerror = function () {
  console.error('Failed to load:', sadImage.src);
  sadImage.src = 'images/default-sad.jpg';
}

backButton.addEventListener('click', function () {
  // If we're on a new tab, just close it.
  if (window.history.length === 1) {
    window.close();
  }
  else {
    history.back();
  }
});

backButton.addEventListener('mouseenter', function () {
  happyImage.style.display = 'inline';
  sadImage.style.display = 'none';
});

backButton.addEventListener('mouseleave', function () {
  happyImage.style.display = 'none';
  sadImage.style.display = 'inline';
});

document.querySelector('#continue-button').onclick = function () {
  var params = window.location.search.substring(1).split('&');
  params.forEach(function (param) {
    var split = param.split('=');
    if (split[0] === 'target') {
      chrome.tabs.getCurrent(function (tab) {
        if (tab && tab.id) {
          chrome.storage.sync.set({allowedTabId: tab.id}, function () {
            var error = chrome.runtime.lastError;
            if (error || !split[1]) {
              document.querySelector('#message').style.display = 'block';
              return;
            }

            var url = decodeURIComponent(split[1]);

            // Use replace so that the block page isn't in the
            // tab's history
            window.location.replace(url);
          });
        }
      });
    }
  });
}

document.querySelector('#options-link').onclick = function () {
  if (chrome.runtime.openOptionsPage) {
    // New way to open options pages, if supported (Chrome 42+).
    chrome.runtime.openOptionsPage();
  }
  else {
    window.open(chrome.runtime.getURL('options.html'));
  }
}

document.querySelector('#copyright-year').textContent =
  new Date().getFullYear();

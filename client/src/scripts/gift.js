const renderGift = async () => {

    // Get the gift ID from the URL
    const requestedID = parseInt(window.location.pathname.split('/').pop())
  
    // Get all gifts from our Express server
    const response = await fetch('/gifts')
    const data = await response.json()
  
    // Find the main section of gift.html
    const giftContent = document.getElementById('gift-content')
  
    // Find the gift whose ID matches the ID in the URL
    const gift = data.find(gift => gift.id === requestedID)
  
    // If we found the gift, display its information
    if (gift) {
  
      document.getElementById('image').src = gift.image
  
      document.getElementById('name').textContent = gift.name
  
      document.getElementById('submittedBy').textContent =
        'Submitted by: ' + gift.submittedBy
  
      document.getElementById('submittedOn').textContent =
        'Submitted on: ' + gift.submittedOn
  
      document.getElementById('pricePoint').textContent =
        'Price: ' + gift.pricePoint
  
      document.getElementById('audience').textContent =
        'Great For: ' + gift.audience
  
      document.getElementById('description').textContent =
        gift.description
  
      document.title = `UnEarthed - ${gift.name}`
  
    } else {
  
      const message = document.createElement('h2')
  
      message.textContent = 'No Gift Found 😞'
  
      giftContent.appendChild(message)
    }
  }
  
  renderGift()
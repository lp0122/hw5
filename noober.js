function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

let url = 'https://kiei451.com/api/rides.json'

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

  let url = 'https://kiei451.com/api/rides.json'

  let allRidesButton = document.querySelector('#all-filter')
  allRidesButton.addEventListener('click', async function(event) {
    event.preventDefault()
    document.querySelector('.rides').innerHTML = ''

    console.log('all rides works!')

    let response = await fetch(url)
    let json = await response.json()

    renderRides(json)
  })

  let poolButton = document.querySelector('#noober-pool-filter')
  poolButton.addEventListener('click', async function(event) {
  
    event.preventDefault()
    document.querySelector('.rides').innerHTML = ''
    
    console.log('pool works!')

    let response = await fetch(url)
    let json = await response.json()

    let poolArray = []

    for (let n=0; n<json.length; n++) {
      let poolRide = json[n]
      levelOfService(poolRide)
      if (levelOfService(poolRide) == 'Noober Pool') {
        poolArray.push(poolRide)
      }
      renderRides(poolArray)
      }

    })

  let purpleButton = document.querySelector('#noober-purple-filter')
  purpleButton.addEventListener('click', async function(event) {
  
    event.preventDefault()
    document.querySelector('.rides').innerHTML = ''
    
    console.log('purple works!')

    let response = await fetch(url)
    let json = await response.json()

    let purpleArray = []

    for (let n=0; n<json.length; n++) {
      let purpleRide = json[n]
      levelOfService(purpleRide)
      if (levelOfService(purpleRide) == 'Noober Purple') {
        purpleArray.push(purpleRide)
      }
      renderRides(purpleArray)
      }

    })

  let xlButton = document.querySelector('#noober-xl-filter')
  xlButton.addEventListener('click', async function(event) {
  
    event.preventDefault()
    document.querySelector('.rides').innerHTML = ''
    
    console.log('xl works!')

    let response = await fetch(url)
    let json = await response.json()

    let xlArray = []

    for (let n=0; n<json.length; n++) {
      let xlRide = json[n]
      levelOfService(xlRide)
      if (levelOfService(xlRide) == 'Noober XL') {
        xlArray.push(xlRide)
      }
      renderRides(xlArray)
      }

    })
  
  let xButton = document.querySelector('#noober-x-filter')
  xButton.addEventListener('click', async function(event) {
  
    event.preventDefault()
    document.querySelector('.rides').innerHTML = ''
    
    console.log('x works!')

    let response = await fetch(url)
    let json = await response.json()

    let xArray = []

    for (let n=0; n<json.length; n++) {
      let xRide = json[n]
      levelOfService(xRide)
      if (levelOfService(xRide) == 'Noober X') {
        xArray.push(xRide)
      }
      renderRides(xArray)
      }

    })
})


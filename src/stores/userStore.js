import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAddress } from '@/services/apiGeocoding'

// Helper function remains the same
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export const useUserStore = defineStore('user', () => {
  // --- STATE ---
  const username = ref('')
  const status = ref('idle') // 'idle' | 'loading' | 'error'
  const position = ref({})
  const address = ref('')
  const error = ref('')

  // --- ACTIONS ---

  // Equivalent to updateName reducer
  function updateName(newName) {
    username.value = newName
  }

  // Equivalent to fetchAddress AsyncThunk
  async function fetchAddress() {
    try {
      status.value = 'loading'
      error.value = ''

      // 1) Get geolocation
      const positionObj = await getPosition()
      const pos = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
      }

      // 2) Reverse geocoding
      const addressObj = await getAddress(pos)
      const addr = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`

      // 3) Update state (Equivalent to .fulfilled)
      position.value = pos
      address.value = addr
      status.value = 'idle'

      return { position: pos, address: addr }
    } catch (err) {
      // Equivalent to .rejected
      status.value = 'error'
      error.value = 'There was a problem getting your address. Make sure to fill this field!'
      throw err // Re-throw if you want the component to handle the error too
    }
  }

  return {
    username,
    status,
    position,
    address,
    error,
    updateName,
    fetchAddress,
  }
})

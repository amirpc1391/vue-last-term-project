import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore( 'notification' , () =>
{
    const isActive = ref( false )

    const type = ref( 'success' )

    const message = ref( '' )

    function showNotification( typeNotification , messageNotification , duration = 2000 ) {

        type.value = typeNotification
        message.value = messageNotification
        isActive.value = true
        setTimeout( () =>
        {
            isActive.value = false
        } , duration )

    }

    return { isActive , type , message , showNotification }
} )

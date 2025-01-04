import { ref , reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore( 'auth' , () =>
{
    const phone = ref( '' )
    const password = ref( '' )
    const iranianPhoneRegex = /^09\d{9}$/;
    const isAuth = ref( false )

    const users = reactive( {
        "09302431385" : "123"
    } );

    function validationPhone() {
        return iranianPhoneRegex.test( phone )
    }

    function checkPhoneExists() {
        return phone in users;
    }

    function reset() {
        phone.value = ''
        password.value = ''
    }

    function addNewUser() {
        users[ phone.value ] = password.value;
    }

    return { phone , password , users , isAuth , validationPhone , checkPhoneExists , reset , addNewUser }
} )
